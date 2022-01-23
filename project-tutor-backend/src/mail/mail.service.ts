import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as nodemailer from 'nodemailer';
import { Mentor } from 'src/auth/mentor.entity';
import { Repository } from 'typeorm';
import { EmailVerif } from './mailVerif.entity';
import config from '../config';

@Injectable()
export class MailService {
    constructor(
        @InjectRepository(EmailVerif) private readonly emailVerifRepository: Repository<EmailVerif>,
    ) {}
/*
    async verifyMail(token: string): Promise<boolean> {
        var emailVerif = await this.emailVerificationModel.findOne({ emailToken: token});
    if(emailVerif && emailVerif.email){
      var userFromDb = await this.mentorRepository.findOne({where:{ email: emailVerif.email}});
      if (userFromDb) {
        userFromDb.auth.email.valid = true;
        var savedUser = await userFromDb.save();
        await emailVerif.remove();
        return !!savedUser;
      }
    } else {
      throw new HttpException('LOGIN.EMAIL_CODE_NOT_VALID', HttpStatus.FORBIDDEN);
    }
    }
*/
    async createEmailToken(email: string): Promise<boolean> {
        var emailVerification = await this.emailVerifRepository.findOne({where:{email: email}}); 
        if (emailVerification && ( (new Date().getTime() - emailVerification.timestamp.getTime()) / 60000 < 15 )){
        throw new HttpException('LOGIN.EMAIL_SENDED_RECENTLY', HttpStatus.INTERNAL_SERVER_ERROR);
        } else {
        var emailVerificationRep = await this.emailVerifRepository.update( 
            {email: email},
            { 
            email: email,
            emailToken: (Math.floor(Math.random() * (9000000)) + 1000000).toString(), //Generate 7 digits number
            timestamp: new Date()
            }
        );
        return true;
        }
    }

    async sendEmailVerification(email: string): Promise<boolean> {   
        var model = await this.emailVerifRepository.findOne({where:{ email: email}});
    
        if(model && model.emailToken){
            let transporter = nodemailer.createTransport({
                host: config.mail.host,
                port: config.mail.port,
                secure: config.mail.secure, // true for 465, false for other ports
                auth: {
                    user: config.mail.user,
                    pass: config.mail.pass
                }
            });
        
            let mailOptions = {
              from: '"Company" <' + config.mail.user + '>', 
              to: email, // list of receivers (separated by ,)
              subject: 'Verify Email', 
              text: 'Verify Email', 
              html: 'Hi! <br><br> Thanks for your registration<br><br>'+
              '<a href='+ config.host.url + ':' + config.host.port +'/auth/email/verify/'+ model.emailToken + '>Click here to activate your account</a>'  // html body
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
}
