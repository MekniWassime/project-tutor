import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseModule } from 'src/course/course.module';
import { PackageEntity } from './entities/package.entity';
import { PackageController } from './package.controller';
import { PackageService } from './package.service';

@Module({
  controllers: [PackageController],
  providers: [PackageService],
  imports: [
    TypeOrmModule.forFeature([
      PackageEntity
    ]), CourseModule
  ]
})
export class PackageModule {}
