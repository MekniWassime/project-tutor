import { IsNotEmpty, IsOptional, IsPositive, MaxLength, MinLength } from 'class-validator';
import { errorMessages } from '../../utils/utils';
import { CourseCategoryEnum } from '../entities/courseCategoryEnum';
export class CreateCourseDto {
  @IsNotEmpty()
  @MinLength(3, {
    message: errorMessages.sizeErrorMessage(),
  })
  @MaxLength(20, {
    message: errorMessages.sizeErrorMessage(false),
  })
  title: string;

  category: CourseCategoryEnum;

  @IsOptional()
  description:string;

  @IsPositive( {
    message: errorMessages.positiveValueErrorMessage(),
  })
  @IsNotEmpty()
  capacity: number;

  @IsNotEmpty()
  address: string;
}