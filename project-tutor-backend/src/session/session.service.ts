import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CourseService } from 'src/course/course.service';
import { CrudService } from 'src/generics/crud.service';
import { Repository } from 'typeorm';
import { SessionEntity } from './entities/session.entity';

@Injectable()
export class SessionService extends CrudService<SessionEntity> {
    constructor( 
        @InjectRepository(SessionEntity)
        private readonly sessionRepository: Repository<SessionEntity>,
        private readonly courseService: CourseService

        
    ) {
        super(sessionRepository);
    }
    async createWithRelation(sessionToAdd, courseId): Promise<SessionEntity> {
        
        const course = await this.courseService.findOne(courseId);
        if (course) {
            sessionToAdd.course = course ;
            return this.sessionRepository.save(sessionToAdd);
        }
        throw new NotFoundException('Object innexistant');
    }
    async findByCourse(courseId): Promise<SessionEntity[]> {
        return this.sessionRepository.find({course: courseId})
    }
          
}