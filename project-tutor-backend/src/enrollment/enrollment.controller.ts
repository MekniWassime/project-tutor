import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AttendanceService } from './attendance/attendance.service';
import { AddPackageDto } from './dto/AddPackage.dto';
import { CreateAttendanceDto } from './dto/CreateAttendance.dto';
import { CreateEnrollmentDto } from './dto/CreateEnrollment.dto';
import { EnrollmentService } from './enrollment.service';

@Controller('enrollment')
export class EnrollmentController {
    constructor(private enrollmentService: EnrollmentService,
        private attendanceService: AttendanceService
        ) {}

    // @UseGuards(AuthGuard('jwt'))
    @Post('enroll')
    enroll(@Body() addEnrollmentDto: CreateEnrollmentDto){
      return this.enrollmentService.createWithRelation(addEnrollmentDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('addPackage')
    addPackage(@Body() addPackageDto: AddPackageDto){
      return this.enrollmentService.createWithRelation(addPackageDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('attend')
    attend(@Body() createAttendanceDto: CreateAttendanceDto){
      return this.attendanceService.attend(createAttendanceDto);
    }

}
