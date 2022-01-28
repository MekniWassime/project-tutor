import { IsNotEmpty } from 'class-validator';
export class AddPackageDto {

  @IsNotEmpty()
  enrollmentId: number;

  @IsNotEmpty()
  packageId: number;


}