import { IsNotEmpty } from 'class-validator';
export class CreateAttendanceDto {
  @IsNotEmpty()
  userId: number;

  @IsNotEmpty()
  sessionId: number;
  
}