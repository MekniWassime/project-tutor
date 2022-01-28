import { CourseCategoryEnum } from './entities/courseCategoryEnum';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CrudService } from 'src/generics/crud.service';
import { In, Like, Not, Repository } from 'typeorm';
import { CourseEntity } from './entities/course.entity';
import { isNotIn, notContains } from 'class-validator';

@Injectable()
export class CourseService extends CrudService<CourseEntity> {
    constructor(
        @InjectRepository(CourseEntity)
        private readonly courseRepository: Repository<CourseEntity>
    ) {
        super(courseRepository);
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

}
