import { PartialType } from '@nestjs/swagger';
import { CreateSessionDTO } from './CreateSession.dto';

export class UpdateSessionDto extends PartialType(CreateSessionDTO) {}