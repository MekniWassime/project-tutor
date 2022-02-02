import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { MailModule } from './mail/mail.module';
import { SimpleUserModule } from './simple-user/simple-user.module';
import { ReviewModule } from './review/review.module';
import { CourseModule } from './course/course.module';

@Module({
  imports: [AuthModule, MailModule, SimpleUserModule, ReviewModule, CourseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
