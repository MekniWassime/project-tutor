import { PartialType } from '@nestjs/swagger';
import { CreateSchedularDto } from './CreateSchedular.dto';

export class UpdateSchedularDto extends PartialType(CreateSchedularDto) {}