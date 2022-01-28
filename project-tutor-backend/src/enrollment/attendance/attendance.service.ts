import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from 'src/auth/auth.service';
import { CourseService } from 'src/course/course.service';
import { CrudService } from 'src/generics/crud.service';
import { SessionService } from 'src/session/session.service';
import { Repository } from 'typeorm';
import { EnrollmentService } from '../enrollment.service';
import { AttendanceEntity } from '../entities/attendance.entity';

@Injectable()
export class AttendanceService extends CrudService<AttendanceEntity> {
    constructor( 
        @InjectRepository(AttendanceEntity)
        private readonly attendanceRepository: Repository<AttendanceEntity>,
        private readonly authService: AuthService,
        private readonly enrollmentService: EnrollmentService,
        private readonly sessionService: SessionService,
        private readonly courseService: CourseService,

    ) {
        super(attendanceRepository);
    }

    async attend(createAttendanceDto): Promise<AttendanceEntity> {
        
        const user = await this.authService.findOne(createAttendanceDto.userId);
        const session = await this.sessionService.findOne(createAttendanceDto.sessionId)
        if (user && session) {
            const course = await this.courseService.findOne(session.course.id);
            
            const enrollments = await this.enrollmentService.findAll({course: course, user:user})
            let enrollment = enrollments[0];
            if(enrollment){
                enrollment.nbSessionsAttended = enrollment.nbSessionsAttended +1;
                const attendance= {
                    user: user,
                    session: session,
                }
                return this.attendanceRepository.save(attendance);
            } else {
                throw new NotFoundException('Enrollment innexistant');
            }
           
        }
        throw new NotFoundException('user/session innexistant');
    }
}
