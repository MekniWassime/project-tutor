import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PackageModule } from './package/package.module';
import { PackageEntity } from './package/entities/package.entity'
import { CourseModule } from './course/course.module';
import { CourseEntity } from './course/entities/course.entity';
import { SessionModule } from './session/session.module';
import { SessionEntity } from './session/entities/session.entity';
import { SchedularEntity } from './session/entities/schedular.entity';
import { ScheduleModule } from '@nestjs/schedule';
import { AuthModule } from './auth/auth.module';
import { Mentor } from './auth/mentor.entity';
import { ForgottenPassword } from './auth/forgottenPassword.entity';
import { EnrollmentModule } from './enrollment/enrollment.module';
import { EnrollmenEntity } from './enrollment/entities/enrollment.entity';
import { AttendanceEntity } from './enrollment/entities/attendance.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'projetaymen',
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
  }),
  TypeOrmModule.forFeature([PackageEntity,CourseEntity, SessionEntity,SchedularEntity, Mentor,ForgottenPassword, EnrollmenEntity,AttendanceEntity]),
  PackageModule,CourseModule, SessionModule, AuthModule,
  ScheduleModule.forRoot(),
  EnrollmentModule,
 ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
