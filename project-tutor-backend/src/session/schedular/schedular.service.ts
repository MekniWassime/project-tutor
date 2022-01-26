import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { CourseService } from 'src/course/course.service';
import { CrudService } from 'src/generics/crud.service';
import { Repository } from 'typeorm';
import { CreateSessionDTO } from '../dto/CreateSession.dto';
import { DaysEnum } from '../entities/daysEnum';
import { SchedularEntity } from '../entities/schedular.entity';
import { SchedularFrequencyEnum } from '../entities/schedularFrequencyEnum';
import { SessionService } from '../session.service';


@Injectable()
export class SchedularService extends CrudService<SchedularEntity> {
    constructor( 
        @InjectRepository(SchedularEntity)
        private readonly schedularRepository: Repository<SchedularEntity>,
        private readonly courseService: CourseService,
        private readonly sessionService: SessionService        
    ) {
        super(schedularRepository);
    }
    async createWithRelation(schedularToAdd, courseId): Promise<SchedularEntity> {
        
        const course = await this.courseService.findOne(courseId);
        if (course) {
            schedularToAdd.course = course ;
            const schedular = await this.schedularRepository.save(schedularToAdd);
            let currentDate = new Date(Date.now());
            const time = new Date(schedular.time);
            if(schedularToAdd.frequency == SchedularFrequencyEnum.everyday){
                for(let i = 0; i<7; i++){
                    const sessionToAdd = new CreateSessionDTO();
                    sessionToAdd.duration = schedular.duration;
                    let newDate = new Date(Date.now() + 1000 * 60 * 60 * 24 * i);
                    newDate.setUTCHours(time.getHours(),time.getMinutes())
                    sessionToAdd.date = newDate;
                    const session = await this.sessionService.createWithRelation(sessionToAdd,course.id)
                }
            } else {
                let dayOfWeek = currentDate.getDay();
                const numberOfDays = (+DaysEnum[schedularToAdd.date] - dayOfWeek + 7) % 7;
                let newDate = new Date(Date.now() + 1000 * 60 * 60 * 24 * numberOfDays)
                newDate.setUTCHours(time.getHours(),time.getMinutes())

                const sessionToAdd = new CreateSessionDTO();
                sessionToAdd.duration = schedular.duration;
                sessionToAdd.date = newDate;
                const session = await this.sessionService.createWithRelation(sessionToAdd,course.id)
            }
            return schedular
        }
        throw new NotFoundException('Object innexistant');
    }
    async findByCourse(courseId): Promise<SchedularEntity[]> {
        return this.schedularRepository.find({course: courseId})
    }

    @Cron(CronExpression.EVERY_DAY_AT_1AM)
    async handleCron() {
        let currentDate = new Date(Date.now());
        let dayOfWeek = currentDate.getDay();
        const schedulesDay = await this.schedularRepository.find({loadRelationIds:true, where: {frequency: SchedularFrequencyEnum.everyday}});
        schedulesDay.forEach(async (element) => {
            const time = new Date(element.time);
            const sessionToAdd = new CreateSessionDTO();
            sessionToAdd.duration = element.duration;
            let newDate = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7)
            newDate.setUTCHours(time.getHours(),time.getMinutes())
            sessionToAdd.date = newDate;
            const session = await this.sessionService.createWithRelation(sessionToAdd,element.course)
        });
        const schedulesWeek = await this.schedularRepository.find({loadRelationIds:true, where: {frequency: SchedularFrequencyEnum.everyweek}});
        schedulesWeek.forEach(async (element) => {
            if (DaysEnum[dayOfWeek] == DaysEnum[element.dayOfWeek]) {
                const time = new Date(element.time);
                const sessionToAdd = new CreateSessionDTO();
                sessionToAdd.duration = element.duration;
                let newDate = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7)
                newDate.setUTCHours(time.getHours(),time.getMinutes())
                sessionToAdd.date = newDate;
                const session = await this.sessionService.createWithRelation(sessionToAdd,element.course)
            }
        });
    }
}