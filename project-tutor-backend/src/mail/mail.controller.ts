import { Controller, Get, Param } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('email')
export class MailController {

    constructor(private readonly mailService: MailService){}

    @Get('verify/:token')
    public async verifyEmail(@Param() params) {
      try {
        var isEmailVerified = await this.mailService.verifyMail(params.token);
        return new Response("LOGIN.EMAIL_VERIFIED");
      } catch(error) {
        return new Error("LOGIN.ERROR");
      }
    }
    
}