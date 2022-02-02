import { MailerService } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { Mentor } from 'src/auth/entity/mentor.entity';
import { MailController } from './mail.controller';
import { MailService } from './mail.service';
import { EmailVerif } from './entity/mailVerif.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EmailVerif, Mentor])],
  exports: [MailService],
  controllers: [MailController],
  providers: [MailService]
})
export class MailModule {}
