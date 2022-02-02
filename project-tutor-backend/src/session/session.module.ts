import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseModule } from 'src/course/course.module';
import { SessionEntity } from './entities/session.entity';
import { SessionController } from './session.controller';
import { SessionService } from './session.service';
import { SchedularService } from './schedular/schedular.service';
import { SchedularEntity } from './entities/schedular.entity';

@Module({
  controllers: [SessionController],
  providers: [SessionService, SchedularService],
  imports: [
    TypeOrmModule.forFeature([
      SessionEntity,SchedularEntity
    ]), CourseModule
  ]
})
export class SessionModule {}
