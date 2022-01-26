import {  Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    UseGuards
 } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreatePackageDTO } from './dto/CreatePackage.dto';
import { UpdatePackageDto} from './dto/UpdatePackage.dto'
import { PackageService } from './package.service';


@Controller('package')
export class PackageController {
    constructor(private packageService: PackageService) {}
    
    @Get('findByCourse/:id')
    findByCourse(@Param('id') courseId: string) {
      return this.packageService.findByCourse(courseId);
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.packageService.findOne(+id);
    }
  
    @UseGuards(AuthGuard('jwt'))
    @Patch('update/:id')
    update(@Param('id') id: string, @Body() updatePackageDto: UpdatePackageDto) {
      return this.packageService.update(+id, updatePackageDto);
    }
  
    @UseGuards(AuthGuard('jwt'))
    @Delete('delete/:id')
    remove(@Param('id') id: string) {
      return this.packageService.remove(+id);
    }
    
    @UseGuards(AuthGuard('jwt'))
    @Post('create/:courseId')
    create(@Param('courseId') courseId: string,@Body() addPackageDto: CreatePackageDTO){
      return this.packageService.createWithRelation(addPackageDto,courseId);
    }
  
}
