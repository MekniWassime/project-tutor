import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PackageModule } from './package/package.module';
import { PackageEntity } from './package/entities/package.entity'
import { CourseModule } from './course/course.module';
import { CourseEntity } from './course/entities/course.entity';
import { SessionModule } from './session/session.module';
import { SessionEntity } from './session/entities/session.entity';
import { SchedularEntity } from './session/entities/schedular.entity';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'projetaymen',
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
  }),
  TypeOrmModule.forFeature([PackageEntity,CourseEntity, SessionEntity,SchedularEntity]),
  PackageModule,CourseModule, SessionModule,
  ScheduleModule.forRoot()
 ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
