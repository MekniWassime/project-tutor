import { ForbiddenException, HttpException, HttpStatus, Injectable, UploadedFile } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from 'src/auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import config from 'src/config';
import * as nodemailer from 'nodemailer';
import { Repository } from 'typeorm';
import { SimpleUserDto } from './dto/simpleUser.dto';
import { SimpleUserEntity } from './entity/simpleUser.entity';
import { Tokens } from 'src/auth/types';
import * as bcrypt from 'bcrypt';
import { ProfileDto } from './dto/profile.dto';

@Injectable()
export class SimpleUserService {
    mailService: any;

    constructor( 
        @InjectRepository(SimpleUserEntity) private readonly simpleUserRepository: Repository<SimpleUserEntity>,
        private authService: AuthService,
        private jwtService: JwtService,
    ) {}

    async createSimpleUser(dto: SimpleUserDto, @UploadedFile() file): Promise<Tokens> {

      const hash = await this.hashData(dto.password);

        const newMentor = await this.simpleUserRepository.save({
            email: dto.email,
            password: hash,
            name: dto.name,
            image: file.filename,
            phone: dto.phone,
            birthdate: dto.birthdate,
            hashedRT: '',
            qrcode: '',
            confirmed: false,
        })

        this.mailService.createEmailToken(dto.email);
        this.mailService.sendEmailVerification(dto.email);

        const tokens = await this.getTokens(newMentor.id, newMentor.email);
        await this.updateRtHash(newMentor.id, tokens.refresh_token);
        return tokens;
    }

    async createSimpleUserByMentor(dto: SimpleUserDto): Promise<Tokens> {
        const passwd = (Math.floor(Math.random() * (9000000)) + 1000000).toString();
        const hash = await this.authService.hashData(passwd);

        const newUser = await this.simpleUserRepository.save({
            email: dto.email,
            password: hash,
            name: dto.name,
            hashedRT: '',
            qrCode: '',
            birthday:null,
            number: 55555555,
            confirmed: true,
        })

        this.sendPasswordEmail(dto.email, passwd);

        const tokens = await this.authService.getTokens(newUser.id, newUser.email);
        await this.updateRtHash(newUser.id, tokens.refresh_token);
        return tokens;
    }

    async updateRtHash(userId: number, rt: string) {
        const hash = await this.authService.hashData(rt);
        const simpleUser = await this.simpleUserRepository.findOne({where:{id: userId}});
        simpleUser.hashedRT = hash;
        await this.simpleUserRepository.save(simpleUser);
    }

    async refreshTokens(mentorId: number, rt: string) {
      const mentor = await this.simpleUserRepository.findOne({
          where:{id: mentorId}
      });
      if(!mentor) throw new ForbiddenException('Access Denied');

      const rtMatches = await bcrypt.compare(rt, mentor.hashedRT)
      if (!rtMatches) throw new ForbiddenException('Access Denied');

      const tokens = await this.getTokens((await mentor).id, (await mentor).email);
      await this.updateRtHash((await mentor).id, tokens.refresh_token);
      return tokens;
  }

    async sendPasswordEmail(email: string, passwd: string): Promise<boolean> {   
        var model = await this.simpleUserRepository.findOne({where:{email: email}});
        if(model && model.email){
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
                from: '"Company" <' + config.mail.user + '>', 
                to: email, // list of receivers (separated by ,)
                subject: 'Verify Email', 
                text: 'Verify Email', 
                html: 'Hi! <br><br> Thanks for your registration<br><br>'+
                'Your account has been created <br> And this is your password: '+passwd  // html body
              };
          
              var sent = await new Promise<boolean>(async function(resolve, reject) {
                return await transporter.sendMail(mailOptions, async (error, info) => {
                    if (error) {      
                      console.log('Message sent: %s', error);
                      return reject(false);
                    }
                    console.log('Message sent: %s', info.messageId);
                    resolve(true);
                });      
              })
      
              return sent;
          } else {
            throw new HttpException('REGISTER.USER_NOT_REGISTERED', HttpStatus.FORBIDDEN);
          }
        }

    async findAllProfile(id: number) {
      return this.simpleUserRepository.findOne({where:{id: id}});
    }

    async editName(dto: ProfileDto) {
      return this.simpleUserRepository.update({email:dto.email},{name: dto.name});
    }

    async editPhone(dto: ProfileDto) {
      return this.simpleUserRepository.update({email:dto.email},{phone: dto.phone});
    }

    hashData(data: string) {
      return bcrypt.hash(data, 10);
  }

    async editBirth(dto: ProfileDto) {
      return this.simpleUserRepository.update({email:dto.email},{birthday: dto.birthday});
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

  async logout(userId: number) {
    await this.simpleUserRepository.update({id: userId},{hashedRT: ''})
}

  }
  
 