import { IsNotEmpty, IsOptional, IsPositive, MaxLength, MinLength } from 'class-validator';
import { errorMessages } from '../../utils/utils';
import { CourseCategoryEnum } from '../entities/courseCategoryEnum';
export class FindCourseWhereDTO {
  searchTerm: string = '';
  excludedCategories: CourseCategoryEnum[] = [];
}