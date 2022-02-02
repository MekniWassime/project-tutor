import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from 'src/auth/auth.service';
import { CourseService } from 'src/course/course.service';
import { CrudService } from 'src/generics/crud.service';
import { PackageService } from 'src/package/package.service';
import { Repository } from 'typeorm';
import { EnrollmenEntity } from './entities/enrollment.entity';

@Injectable()
export class EnrollmentService extends CrudService<EnrollmenEntity> {
    constructor( 
        @InjectRepository(EnrollmenEntity)
        private readonly enrollmentRepository: Repository<EnrollmenEntity>,
        private readonly authService: AuthService,
        private readonly courseService: CourseService,
        private readonly packageService: PackageService
    ) {
        super(enrollmentRepository);
    }
    async createWithRelation(createEnrollmentDto): Promise<EnrollmenEntity> {
        const user = await this.authService.findOne(createEnrollmentDto.userId);
        const course = await this.courseService.findOne(createEnrollmentDto.courseId);
        const pack = await this.packageService.findOne(createEnrollmentDto.packageId);

        if (user && course && pack) {
            const enroll= {
                user: user,
                course: course,
                packages: [pack],
                nbSessionsPayed: pack.nbSessions,
                nbSessionsAttended: 0,
                lastPackage: pack.title
            }
            return this.enrollmentRepository.save(enroll);
        }
        throw new NotFoundException('Object innexistant');
    }
    async addPackage(enrollmentId,packageId): Promise<EnrollmenEntity> {
        
        const pack = await this.packageService.findOne(packageId)
        let enroll = await this.enrollmentRepository.findOne(enrollmentId);
        if (pack && enroll) {
            enroll.packages.push(pack);
            enroll.nbSessionsPayed = enroll.nbSessionsPayed + pack.nbSessions;
            enroll.lastPackage = pack.title;
            return this.enrollmentRepository.save(enroll);
        }
        throw new NotFoundException('Object innexistant');
    }

    async getUsersCourse(id): Promise<EnrollmenEntity[]> {
        const course = await this.courseService.findOne(id);
        if (course) {
            return this.enrollmentRepository.find({ where: {course: course.id}, relations: ['user']});
        }
    }
}
