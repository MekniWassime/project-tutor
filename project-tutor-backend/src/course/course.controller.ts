import { FindCourseWhereDTO } from './dto/FindCourseWhere.dto';
import {  Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Req,
    Query,
    UseGuards
 } from '@nestjs/common';
import { CreateCourseDto } from './dto/CreateCourse.dto';
import { UpdateCourseDto} from './dto/UpdateCourse.dto'
import { CourseService } from './course.service';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';


@Controller('course')
export class CourseController {
    constructor(private courseService: CourseService) {}

    //@UseGuards(AuthGuard('jwt'))
    @Post('create')
    create(@Req() req: Request, @Body() addCourseDto: CreateCourseDto){
      const mentorId = req.user;
      return this.courseService.createWithRelation(addCourseDto, mentorId);
    }
    
    @Get('findAll')
    findAll(@Query() query: FindCourseWhereDTO) {
      return this.courseService.search(query.searchTerm,query.excludedCategories);
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.courseService.findOne(+id);
    }
  
    @UseGuards(AuthGuard('jwt'))
    @Patch('update/:id')
    update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
      return this.courseService.update(+id, updateCourseDto);
    }
  
    @UseGuards(AuthGuard('jwt'))
    @Delete('delete/:id')
    remove(@Param('id') id: string) {
      return this.courseService.remove(+id);
    }
    
  
}
