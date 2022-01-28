import { Module } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service';
import { EnrollmenEntity } from './entities/enrollment.entity';
import { CourseModule } from 'src/course/course.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttendanceEntity } from './entities/attendance.entity';
import { AuthModule } from 'src/auth/auth.module';
import { PackageModule } from 'src/package/package.module';
import { EnrollmentController } from './enrollment.controller';
import { AttendanceService } from './attendance/attendance.service';
import { SessionModule } from 'src/session/session.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      EnrollmenEntity, AttendanceEntity
    ]), CourseModule, PackageModule,AuthModule,SessionModule
  ],
  providers: [EnrollmentService, AttendanceService],
  controllers: [EnrollmentController]
})
export class EnrollmentModule {}