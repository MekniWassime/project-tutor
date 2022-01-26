import { IsNotEmpty, IsPositive } from 'class-validator';
import { errorMessages } from '../../utils/utils';
export class CreateSessionDTO {

  @IsNotEmpty()
  date: Date;

  @IsNotEmpty()
  @IsPositive( {
    message: errorMessages.positiveValueErrorMessage(),
  })
  duration: number;

}