import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
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
    @UseGuards(AuthGuard('jwt'))
    update(@Param('id') id: string, @Body() updateSessionDto: UpdateSessionDto) {
      return this.sessionService.update(+id, updateSessionDto);
    }
  
    @Delete('delete/:id')
    @UseGuards(AuthGuard('jwt'))
    remove(@Param('id') id: string) {
      return this.sessionService.remove(+id);
    }
    
    @Post('create/:courseId')
    @UseGuards(AuthGuard('jwt'))
    create(@Param('courseId') courseId: string,@Body() addSessionDto: CreateSessionDTO){
      return this.sessionService.createWithRelation(addSessionDto,courseId);
    }

    //Schedular
    @Get('schedular/findByCourse/:id')
    @UseGuards(AuthGuard('jwt'))
    findSchedularByCourse(@Param('id') courseId: string) {
      return this.schedularService.findByCourse(courseId);
    }
  
    @Get('schedular/:id')
    @UseGuards(AuthGuard('jwt'))
    findSchedularOne(@Param('id') id: string) {
      return this.schedularService.findOne(+id);
    }
  
    @Patch('schedular/update/:id')
    @UseGuards(AuthGuard('jwt'))
    updateSchedular(@Param('id') id: string, @Body() updateSchedularDto: UpdateSchedularDto) {
      return this.schedularService.update(+id, updateSchedularDto);
    }
  
    @Delete('schedular/delete/:id')
    @UseGuards(AuthGuard('jwt'))
    removeSchedular(@Param('id') id: string) {
      return this.schedularService.remove(+id);
    }
    
    @Post('schedular/create/:courseId')
    @UseGuards(AuthGuard('jwt'))
    createSchedular(@Param('courseId') courseId: string,@Body() addSchedularDto: CreateSchedularDto){
      return this.schedularService.createWithRelation(addSchedularDto,courseId);
    }
}
