import { IsNotEmpty } from 'class-validator';
export class CreateEnrollmentDto {
  @IsNotEmpty()
  userId: number;

  @IsNotEmpty()
  courseId: number;

  @IsNotEmpty()
  packageId: number;
}