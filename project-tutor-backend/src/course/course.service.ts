import { Injectable, NotFoundException } from '@nestjs/common';
import { CourseCategoryEnum } from './entities/courseCategoryEnum';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from 'src/auth/auth.service';
import { CrudService } from 'src/generics/crud.service';
import { In, Like, Not, Repository } from 'typeorm';
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

    async search(searchTerm: string, excludedCategories: CourseCategoryEnum[]): Promise<CourseEntity[]> {
        return this.courseRepository.find({
            loadRelationIds: true,
            where: {
                title: Like(`%${searchTerm}%`),
                category: Not(In(excludedCategories)),
            }
        })
    }

    async findById(id:number){
        return this.courseRepository.findOne(id,{relations:['packages']})
    }

}
