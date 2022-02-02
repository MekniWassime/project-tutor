import { IsNotEmpty, IsPositive, MaxLength, MinLength } from 'class-validator';
import { errorMessages } from '../../utils/utils';
export class CreatePackageDTO {
  @IsNotEmpty()
  @MinLength(3, {
    message: errorMessages.sizeErrorMessage(),
  })
  @MaxLength(20, {
    message: errorMessages.sizeErrorMessage(false),
  })
  title: string;

  @IsPositive( {
    message: errorMessages.positiveValueErrorMessage(),
  })
  @IsNotEmpty()
  price: number;

  @IsPositive( {
    message: errorMessages.positiveValueErrorMessage(),
  })
  @IsNotEmpty()
  nbSessions: number;
}