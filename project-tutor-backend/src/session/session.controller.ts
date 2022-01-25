import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateSchedularDto } from './dto/CreateSchedular.dto';
import { CreateSessionDTO } from './dto/CreateSession.dto';
import { UpdateSchedularDto } from './dto/UpdateSchedular.dto';
import { UpdateSessionDto } from './dto/UpdateSession.dto';
import { SchedularService } from './schedular/schedular.service';
import { SessionService } from './session.service';


@Controller('session')
export class SessionController {

    constructor(private sessionService: SessionService,
        private schedularService: SchedularService
        ) {}

    @Get('findByCourse/:id')
    findByCourse(@Param('id') courseId: string) {
      return this.sessionService.findByCourse(courseId);
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.sessionService.findOne(+id);
    }
  
    @Patch('update/:id')
    update(@Param('id') id: string, @Body() updateSessionDto: UpdateSessionDto) {
      return this.sessionService.update(+id, updateSessionDto);
    }
  
    @Delete('delete/:id')
    remove(@Param('id') id: string) {
      return this.sessionService.remove(+id);
    }
    
    @Post('create/:courseId')
    create(@Param('courseId') courseId: string,@Body() addSessionDto: CreateSessionDTO){
      return this.sessionService.createWithRelation(addSessionDto,courseId);
    }

    //Schedular
    @Get('schedular/findByCourse/:id')
    findSchedularByCourse(@Param('id') courseId: string) {
      return this.schedularService.findByCourse(courseId);
    }
  
    @Get('schedular/:id')
    findSchedularOne(@Param('id') id: string) {
      return this.schedularService.findOne(+id);
    }
  
    @Patch('schedular/update/:id')
    updateSchedular(@Param('id') id: string, @Body() updateSchedularDto: UpdateSchedularDto) {
      return this.schedularService.update(+id, updateSchedularDto);
    }
  
    @Delete('schedular/delete/:id')
    removeSchedular(@Param('id') id: string) {
      return this.schedularService.remove(+id);
    }
    
    @Post('schedular/create/:courseId')
    createSchedular(@Param('courseId') courseId: string,@Body() addSchedularDto: CreateSchedularDto){
      return this.schedularService.createWithRelation(addSchedularDto,courseId);
    }
}
