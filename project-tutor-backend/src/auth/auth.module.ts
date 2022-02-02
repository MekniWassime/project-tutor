import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
/*import { MailController } from "src/mail/mail.controller";
import { MailModule } from "src/mail/mail.module";
import { MailService } from "src/mail/mail.service";
import { EmailVerif } from "src/mail/mailVerif.entity";*/
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { ForgottenPassword } from "./entity/forgottenPassword.entity";
import { Mentor } from "./entity/mentor.entity";
import { RtStrategy } from "./strategy";
import { JwtStrategy } from "./strategy/at.strategy";
import { EmailVerif } from "src/mail/entity/mailVerif.entity";
import { MailService } from "src/mail/mail.service"; 
import { SimpleUserEntity } from "src/simple-user/entity/simpleUser.entity";



@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'projetaymen',
        entities: [Mentor, ForgottenPassword, EmailVerif, SimpleUserEntity],
        synchronize: true,
        keepConnectionAlive: true,
      }),
      TypeOrmModule.forFeature([Mentor, ForgottenPassword, EmailVerif, SimpleUserEntity]),
      JwtModule.register({})
    ],
    exports: [],
    controllers: [AuthController,],
    providers: [AuthService, JwtStrategy, RtStrategy,  MailService],
})
export class AuthModule {
}