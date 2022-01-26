import { ForbiddenException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Not, Repository } from 'typeorm';
import { AuthDto, LoginDto } from './dto';
import { Mentor } from './mentor.entity';
import * as bcrypt from 'bcrypt';
import { Tokens } from './types';

import * as nodemailer from 'nodemailer';
import {default as config} from '../config';
import { ForgottenPassword } from './forgottenPassword.entity';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(Mentor) private readonly mentorRepository: Repository<Mentor>,
        @InjectRepository(ForgottenPassword) private readonly forgottenPasswordRepository: Repository<ForgottenPassword>,
        private jwtService: JwtService
    ) {}

    

    async register(dto: AuthDto): Promise<Tokens> {
        const hash = await this.hashData(dto.password);

        const newMentor = await this.mentorRepository.save({
            email: dto.email,
            password: hash,
            name: dto.name,
            occupation: dto.occupation,
            hashedRT: ''
        })

        const tokens = await this.getTokens(newMentor.id, newMentor.email);
        await this.updateRtHash(newMentor.id, tokens.refresh_token);
        return tokens;
    }

    async login(dto: LoginDto) {
        const mentor = this.mentorRepository.findOne({where:{email: dto.email} },);

        if (!mentor) throw new ForbiddenException('Access Denied');
        
        const passHashed = this.hashData(dto.password);
        const passwordMatches = await bcrypt.compare((await mentor).password, await passHashed);
        if (!passHashed) throw new ForbiddenException('Access Denied');
    
        const tokens = await this.getTokens((await mentor).id, (await mentor).email);
        await this.updateRtHash((await mentor).id, tokens.refresh_token);
        return tokens;
    }

    async logout(mentorId: number) {
        await this.mentorRepository.update({id:mentorId},{hashedRT: ''})
    }

    async refreshTokens(mentorId: number, rt: string) {
        const mentor = await this.mentorRepository.findOne({
            where:{id: mentorId}
        });
        if(!mentor) throw new ForbiddenException('Access Denied');

        const rtMatches = await bcrypt.compare(rt, mentor.hashedRT)
        if (!rtMatches) throw new ForbiddenException('Access Denied');

        const tokens = await this.getTokens((await mentor).id, (await mentor).email);
        await this.updateRtHash((await mentor).id, tokens.refresh_token);
        return tokens;
    }

    async createForgottenPasswordToken(email: string): Promise<ForgottenPassword> {
        var forgottenPassword= await this.forgottenPasswordRepository.findOne({email: email});
        if (forgottenPassword && ( (new Date().getTime() - forgottenPassword.timestamp.getTime()) / 60000 < 15 )){
          throw new HttpException('RESET_PASSWORD.EMAIL_SENDED_RECENTLY', HttpStatus.INTERNAL_SERVER_ERROR);
        } else {
          var forgottenPasswordModel = await this.forgottenPasswordRepository.save(
            //{email: email},
            { 
              email: email,
              newPasswordToken: (Math.floor(Math.random() * (9000000)) + 1000000).toString(), //Generate 7 digits number,
              timestamp: new Date()
            },
            //{upsert: true, new: true}
          );
          if(forgottenPasswordModel){
            return forgottenPasswordModel;
          } else {
            throw new HttpException('LOGIN.ERROR.GENERIC_ERROR', HttpStatus.INTERNAL_SERVER_ERROR);
          }
        }
    }   

    async sendEmailForgotPassword(email: string): Promise<boolean> {
        var userFromDb = await this.mentorRepository.findOne({ email: email});
        if(!userFromDb) throw new HttpException('LOGIN.USER_NOT_FOUND', HttpStatus.NOT_FOUND);
    
        var tokenModel = await this.createForgottenPasswordToken(email);
        console.log(tokenModel);
        if(tokenModel && tokenModel.newPasswordToken){
            let transporter = nodemailer.createTransport({
                host: config.mail.host,
                port: config.mail.port,
                secure: config.mail.secure, // true for 465, false for other ports
                auth: {
                    user: config.mail.user,
                    pass: config.mail.pass
                },
                tls: {
                    rejectUnauthorized: false
                }
            });
        
            let mailOptions = {
              from: '"TutorAid" <' + config.mail.user + '>', 
              to: email, // list of receivers (separated by ,)
              subject: 'Frogotten Password', 
              text: 'Forgot Password',
              html: 'Hi! <br><br> If you requested to reset your password<br><br>'+
              '<a href='+ config.host.url + ':' + config.host.port +'/auth/email/reset-password/'+ tokenModel.newPasswordToken + '>Click here</a><br><br>This is your Token: '+ tokenModel.newPasswordToken + "<br><a href='http://localhost:3000/auth/email/"+tokenModel.newPasswordToken+"'>Put your finger here</a>"// html body
            };
        
            var sended = await new Promise<boolean>(async function(resolve, reject) {
              return await transporter.sendMail(mailOptions, async (error, info) => {
                  if (error) {      
                    console.log('Message sent: %s', error);
                    return reject(false);
                  }
                  console.log('Message sent: %s', info.messageId);
                  resolve(true);
              });      
            })
    
            return sended;
        } else {
          throw new HttpException('REGISTER.USER_NOT_REGISTERED', HttpStatus.FORBIDDEN);
        }
      }

    async setPassword(email: string, newPassword: string): Promise<boolean> { 
        var mentorFromDb = await this.mentorRepository.findOne({where:{ email: email}});
        if(!mentorFromDb) throw new HttpException('LOGIN.USER_NOT_FOUND', HttpStatus.NOT_FOUND);
        
        mentorFromDb.password = await this.hashData(newPassword);
    
        await this.mentorRepository.save(mentorFromDb);
        return true;
    }
/*
    async checkPassword(email: string, password: string){
        var mentorFromDb = await this.mentorRepository.findOne({where:{ email: email}});
        if(!mentorFromDb) throw new HttpException('LOGIN.USER_NOT_FOUND', HttpStatus.NOT_FOUND);
    
        return await bcrypt.compare(password, mentorFromDb.password);
    }
*/
    async deleteResetToken(email: string) {
        await this.forgottenPasswordRepository.delete({email: email});
    }

    async getForgottenPasswordModel(newPasswordToken: string): Promise<ForgottenPassword> {
        return await this.forgottenPasswordRepository.findOne({where: {newPasswordToken: newPasswordToken}});
    }

   // async signUser(mentorId: number, email: string, type: string) {
   //     return this.jwtService.sign({
   //         sub: mentorId,
   //         email,
   //         type: type,
   //     });
   // }

    hashData(data: string) {
        return bcrypt.hash(data, 10);
    }

    async getTokens(mentorId: number, email: string): Promise<Tokens> {
        const [at, rt] = await Promise.all([
            this.jwtService.signAsync(
            {    
                sub: mentorId,
                email
            },
            {
                secret: 'dogyears-ya-wassime',
                expiresIn: 60 * 15,
            },
            ),
            this.jwtService.signAsync(
            {
                sub: mentorId,
                email
            },
            {
                secret: 'dogyears-ya-B',
                expiresIn: 60 * 60 * 24 * 7,
            },)  
        ]);

        return {
            access_token: at,
            refresh_token: rt,
        }
    }

    async updateRtHash(mentorId: number, rt: string) {
        const hash = await this.hashData(rt);
        const mentor = await this.mentorRepository.findOne({where:{id: mentorId}});
        mentor.hashedRT = hash;
        await this.mentorRepository.save(mentor);
    }

  }
