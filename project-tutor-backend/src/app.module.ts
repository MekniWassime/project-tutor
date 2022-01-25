import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PackageModule } from './package/package.module';
import { PackageEntity } from './package/entities/package.entity'
import { CourseModule } from './course/course.module';
import { CourseEntity } from './course/entities/course.entity';

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
  TypeOrmModule.forFeature([PackageEntity,CourseEntity]),
  PackageModule,CourseModule
 ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
