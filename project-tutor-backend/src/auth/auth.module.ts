import { MailerModule, MailerService } from "@nestjs-modules/mailer";
import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MailController } from "src/mail/mail.controller";
import { MailService } from "src/mail/mail.service";
import { EmailVerif } from "src/mail/mailVerif.entity";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { ForgottenPassword } from "./forgottenPassword.entity";
import { Mentor } from "./mentor.entity";
import { RtStrategy } from "./strategy";
import { JwtStrategy } from "./strategy/at.strategy";



@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'projetaymen',
        entities: [Mentor, ForgottenPassword, EmailVerif],
        synchronize: true,
      }),
      TypeOrmModule.forFeature([Mentor, ForgottenPassword, EmailVerif]),
      JwtModule.register({}),
      MailerModule, MailService
    ],
    exports: [],
    controllers: [AuthController, MailController],
    providers: [AuthService, JwtStrategy, RtStrategy, MailerService]
})
export class AuthModule {
}