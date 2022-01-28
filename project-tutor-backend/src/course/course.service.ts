import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from 'src/auth/auth.service';
import { CrudService } from 'src/generics/crud.service';
import { Repository } from 'typeorm';
import { CourseEntity } from './entities/course.entity';

@Injectable()
export class CourseService extends CrudService<CourseEntity> {
    constructor( 
        @InjectRepository(CourseEntity)
        private readonly courseRepository: Repository<CourseEntity>,
        private readonly authService: AuthService
    ) {
        super(courseRepository);
    }
      
    async createWithRelation(courseToAdd, mentorId): Promise<CourseEntity> {
        
        const mentor = await this.authService.findOne(mentorId);
        if (mentor) {
            courseToAdd.mentor = mentor ;
            return this.courseRepository.save(courseToAdd);
        }
        throw new NotFoundException('Mentor innexistant');
    }
}
