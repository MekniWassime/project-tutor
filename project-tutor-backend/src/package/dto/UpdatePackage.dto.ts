import { PartialType } from '@nestjs/swagger';
import { CreatePackageDTO } from './CreatePackage.dto';

export class UpdatePackageDto extends PartialType(CreatePackageDTO) {}