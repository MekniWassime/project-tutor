import { PartialType } from '@nestjs/swagger';
import { CreateCourseDto } from './CreateCourse.dto';

export class UpdateCourseDto extends PartialType(CreateCourseDto) {}