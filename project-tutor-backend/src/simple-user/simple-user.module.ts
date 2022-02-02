import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from 'src/auth/auth.service';
import { Mentor } from 'src/auth/entity/mentor.entity';
import { ForgottenPassword } from 'src/auth/entity/forgottenPassword.entity';
import { JwtStrategy, RtStrategy } from 'src/auth/strategy';
import { EmailVerif } from 'src/mail/entity/mailVerif.entity';
import { MailService } from 'src/mail/mail.service';
import { ReviewEntity } from 'src/review/entity/review.entity';
import { SimpleUserEntity } from './entity/simpleUser.entity';
import { SimpleUserController } from './simple-user.controller';
import { SimpleUserService } from './simple-user.service';

@Module({
  imports:[TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'projetaymen',
    entities: [SimpleUserEntity, Mentor, ForgottenPassword, EmailVerif],
    synchronize: true,
    keepConnectionAlive: true,
  }), TypeOrmModule.forFeature([SimpleUserEntity, Mentor, ForgottenPassword, EmailVerif, ReviewEntity]),
  JwtModule.register({})
  ],
  controllers: [SimpleUserController],
  providers: [SimpleUserService, AuthService, JwtStrategy, RtStrategy, MailService]
})
export class SimpleUserModule {}
