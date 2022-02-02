import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ForgottenPassword } from 'src/auth/entity/forgottenPassword.entity';
import { Mentor } from 'src/auth/entity/mentor.entity';
import { CourseEntity } from 'src/course/entity/course.entity';
import { EmailVerif } from 'src/mail/entity/mailVerif.entity';
import { SimpleUserEntity } from 'src/simple-user/entity/simpleUser.entity';
import { ReviewEntity } from './entity/review.entity';
import { ReviewController } from './review.controller';
import { ReviewService } from './review.service';

@Module({
  imports:[TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'projetaymen',
    entities: [SimpleUserEntity, Mentor, ReviewEntity, CourseEntity, ForgottenPassword, EmailVerif],
    synchronize: true,
    keepConnectionAlive: true,
  }), TypeOrmModule.forFeature([SimpleUserEntity, Mentor, ReviewEntity, CourseEntity, ForgottenPassword, EmailVerif]),
  JwtModule.register({})
  ],
  controllers: [ReviewController],
  providers: [ReviewService]
})
export class ReviewModule {}
 