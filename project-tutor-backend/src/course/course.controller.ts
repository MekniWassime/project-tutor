import {  Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    UseGuards
 } from '@nestjs/common';
import { CreateCourseDto } from './dto/CreateCourse.dto';
import { UpdateCourseDto} from './dto/UpdateCourse.dto'
import { CourseService } from './course.service';
import { AuthGuard } from '@nestjs/passport';


@Controller('course')
export class CourseController {
    constructor(private courseService: CourseService) {}

    @Post('create')
    @UseGuards(AuthGuard('jwt'))
    create(@Body() addCourseDto: CreateCourseDto){
      return this.courseService.create(addCourseDto);
    }
    
    @Get('findAll')
    findAll() {
      return this.courseService.findAll({});
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.courseService.findOne(+id);
    }
  
    @Patch('update/:id')
    @UseGuards(AuthGuard('jwt'))
    update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
      return this.courseService.update(+id, updateCourseDto);
    }
  
    @Delete('delete/:id')
    @UseGuards(AuthGuard('jwt'))
    remove(@Param('id') id: string) {
      return this.courseService.remove(+id);
    }
    
  
}
