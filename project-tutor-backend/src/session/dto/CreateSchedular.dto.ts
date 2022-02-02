import {IsNotEmpty, IsPositive,} from 'class-validator';
import { errorMessages } from '../../utils/utils';
import { DaysEnum } from '../entities/daysEnum';
import { SchedularFrequencyEnum } from '../entities/schedularFrequencyEnum';
export class CreateSchedularDto {

  dayOfWeek: DaysEnum;

  @IsNotEmpty()
  @IsPositive( {
    message: errorMessages.positiveValueErrorMessage(),
  })
  duration: number;

  @IsNotEmpty()
  time: Date;


  @IsNotEmpty()
  frequency: SchedularFrequencyEnum;

}