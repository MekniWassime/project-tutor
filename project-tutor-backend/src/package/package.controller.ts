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
  
    @Patch('update/:id')
    @UseGuards(AuthGuard('jwt'))
    update(@Param('id') id: string, @Body() updatePackageDto: UpdatePackageDto) {
      return this.packageService.update(+id, updatePackageDto);
    }
  
    @Delete('delete/:id')
    @UseGuards(AuthGuard('jwt'))
    remove(@Param('id') id: string) {
      return this.packageService.remove(+id);
    }
    
    @Post('create/:courseId')
    @UseGuards(AuthGuard('jwt'))
    create(@Param('courseId') courseId: string,@Body() addPackageDto: CreatePackageDTO){
      return this.packageService.createWithRelation(addPackageDto,courseId);
    }
  
}
