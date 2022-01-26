import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import * as bcrypt from 'bcrypt'; 
import { Mentor } from './mentor.entity';
import { AuthDto, LoginDto, ResetPasswordDto } from './dto';
import { AuthGuard } from '@nestjs/passport';
import { Tokens } from './types';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Post('register')
    @HttpCode(HttpStatus.CREATED)
    async register(@Body() dto: AuthDto): Promise<Tokens> {
        const register = this.authService.register(dto);
        return register;
    }

    @Post('login')
    @HttpCode(HttpStatus.OK)
    async login(@Body() dto: LoginDto) {
        return this.authService.login(dto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('laughs')
    getLaughs(): string {
        return 'HaHaHaHaHaHaHaHaHaHaHa';
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('logout')
    @HttpCode(HttpStatus.OK)
    async logout(@Req() req: Request) {
        const user = req.user;
        return this.authService.logout(user['sub']);
    }

    @UseGuards(AuthGuard('jwt-refresh'))
    @Post('refresh')
    @HttpCode(HttpStatus.OK)
    async refreshTokens(@Req() req: Request) {
        const user = req.user;
        return this.authService.refreshTokens(user['sub'], user['refreshToken'])
    }

    @Get('reset-password/:email')
    @HttpCode(HttpStatus.OK)
    public async sendEmailForgotPassword(@Param() params) {
        try {
          var isEmailSent = await this.authService.sendEmailForgotPassword(params.email);
          if(isEmailSent){
            return new Response("LOGIN.EMAIL_RESENT", null);
          } else {
            return new Error("REGISTRATION.ERROR.MAIL_NOT_SENT");
          }
        } catch(error) {
          return new Error("LOGIN.ERROR.SEND_EMAIL");
        }
      }

    @Post('email/reset-password')
    @HttpCode(HttpStatus.OK)
    public async setNewPassord(@Body() resetPassword: ResetPasswordDto) {
        try {
        var isNewPasswordChanged : boolean = false;
        if(resetPassword.email){
            isNewPasswordChanged = await this.authService.setPassword(resetPassword.email, resetPassword.newPassword);
            await this.authService.deleteResetToken(resetPassword.email);
            if(!isNewPasswordChanged) throw new Error("RESET_PASSWORD.WRONG_CURRENT_PASSWORD");
        } else if (resetPassword.newPasswordToken) {
            var forgottenPasswordRep = await this.authService.getForgottenPasswordModel(resetPassword.newPasswordToken);
            isNewPasswordChanged = await this.authService.setPassword(forgottenPasswordRep.email, resetPassword.newPassword);
            if(isNewPasswordChanged) await this.authService.deleteResetToken(forgottenPasswordRep.email);
        } else {
            return new Error("RESET_PASSWORD.CHANGE_PASSWORD_ERROR");
        }
        return new Response("RESET_PASSWORD.PASSWORD_CHANGED" + isNewPasswordChanged);
        } catch(error) {
        return new Error("RESET_PASSWORD.CHANGE_PASSWORD_ERROR");
        }
    }
}