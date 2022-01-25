import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CourseService } from 'src/course/course.service';
import { CrudService } from 'src/generics/crud.service';
import { Repository } from 'typeorm';
import { SchedularEntity } from '../entities/schedular.entity';

@Injectable()
export class SchedularService extends CrudService<SchedularEntity> {
    constructor( 
        @InjectRepository(SchedularEntity)
        private readonly schedularRepository: Repository<SchedularEntity>,
        private readonly courseService: CourseService

        
    ) {
        super(schedularRepository);
    }
    async createWithRelation(schedularToAdd, courseId): Promise<SchedularEntity> {
        
        const course = await this.courseService.findOne(courseId);
        if (course) {
            schedularToAdd.course = course ;
            return this.schedularRepository.save(schedularToAdd);
        }
        throw new NotFoundException('Object innexistant');
    }
    async findByCourse(courseId): Promise<SchedularEntity[]> {
        return this.schedularRepository.find({course: courseId})
    }
}