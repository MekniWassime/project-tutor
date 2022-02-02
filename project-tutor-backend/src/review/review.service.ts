import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CourseEntity } from 'src/course/entity/course.entity';
import { SimpleUserEntity } from 'src/simple-user/entity/simpleUser.entity';
import { Repository } from 'typeorm';
import { ReviewDto } from './dto/review.dto';
import { ReviewEntity } from './entity/review.entity';

@Injectable()
export class ReviewService {
    constructor(
        @InjectRepository(ReviewEntity) private readonly reviewRepository: Repository<ReviewEntity>,
        @InjectRepository(CourseEntity) private readonly courseRepository: Repository<CourseEntity>,
        @InjectRepository(SimpleUserEntity) private readonly simpleUserRepository: Repository<SimpleUserEntity>
    ) {}

    async createReview(dto: ReviewDto, courseId: number) {
        const course = this.courseRepository.findOne({where: {id: courseId}})
        const review = this.reviewRepository.save({
            rating: dto.rating,
            comment: dto.comment,
            userId: dto.userId,
            courseId: course
        });
        return review;
    }

    async fetchAllReviews(id: number) {
        const coursee = this.courseRepository.findOne({where:{id: id}});
        return this.reviewRepository.find({where: {course: coursee}});
    }

    async findMyReview(myId: number, courseId: number) {
        const userr = this.simpleUserRepository.findOne({where: {id: myId}})
        const coursee = this.courseRepository.findOne({where:{id: courseId}});
        return this.reviewRepository.find({where: {course: coursee, user: userr}}); 
    }

}
 