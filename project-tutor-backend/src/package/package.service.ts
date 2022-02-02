import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CourseService } from 'src/course/course.service';
import { CrudService } from 'src/generics/crud.service';
import { Repository } from 'typeorm';
import { PackageEntity } from './entities/package.entity';

@Injectable()
export class PackageService extends CrudService<PackageEntity> {
    constructor( 
        @InjectRepository(PackageEntity)
        private readonly packageRepository: Repository<PackageEntity>,
        private readonly courseService: CourseService
    ) {
        super(packageRepository);
    }

    async createWithRelation(packageToAdd, courseId): Promise<PackageEntity> {
        
        const course = await this.courseService.findOne(courseId);
        if (course) {
            packageToAdd.course = course ;
            return this.packageRepository.save(packageToAdd);
        }
        throw new NotFoundException('Object innexistant');
    }
    async findByCourse(courseId): Promise<PackageEntity[]> {
        return this.packageRepository.find({course: courseId})
    }
}
