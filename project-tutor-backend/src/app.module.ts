import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { EnrollmentModule } from './enrollment/enrollment.module';
import { EnrollmenEntity } from './enrollment/entities/enrollment.entity';
import { AttendanceEntity } from './enrollment/entities/attendance.entity';
import { Mentor } from './auth/entity/mentor.entity';
import { ForgottenPassword } from './auth/entity/forgottenPassword.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SchedularEntity } from './session/entities/schedular.entity';
import { SessionEntity } from './session/entities/session.entity';
import { CourseEntity } from './course/entities/course.entity';
import { PackageEntity } from './package/entities/package.entity';
import { SessionModule } from './session/session.module';
import { CourseModule } from './course/course.module';
import { PackageModule } from './package/package.module';
import { ScheduleModule } from '@nestjs/schedule';
import { SimpleUserEntity } from './simple-user/entity/simpleUser.entity';
import { EmailVerif } from './mail/entity/mailVerif.entity';
import { ReviewEntity } from './review/entity/review.entity';
import { MailController } from './mail/mail.controller';
import { MailerService } from '@nestjs-modules/mailer';
import { MailService } from './mail/mail.service';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'projetaymen',
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
    keepConnectionAlive: true,
  }),
  TypeOrmModule.forFeature([PackageEntity,CourseEntity, SessionEntity,SchedularEntity,EmailVerif, Mentor,ForgottenPassword, EnrollmenEntity,AttendanceEntity]),
  PackageModule,CourseModule, SessionModule, AuthModule, SimpleUserEntity, Mentor, ForgottenPassword, EmailVerif, ReviewEntity,
  ScheduleModule.forRoot(),
  EnrollmentModule,
 ],
  controllers: [AppController, MailController],
  providers: [AppService, MailService],
})
export class AppModule {}
