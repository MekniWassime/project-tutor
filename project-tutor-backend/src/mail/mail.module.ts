import { MailerService } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { Mentor } from 'src/auth/entity/mentor.entity';
import { MailController } from './mail.controller';
import { MailService } from './mail.service';
import { EmailVerif } from './entity/mailVerif.entity';

@Module({
  imports: [AuthModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'projetaymen',  
    entities: [EmailVerif, Mentor],
    synchronize: true,
    keepConnectionAlive: true,
  }), TypeOrmModule.forFeature([EmailVerif, Mentor])],
  exports: [MailService],
  controllers: [MailController],
  providers: [MailService]
})
export class MailModule {}
