import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { SimpleUserDto } from 'src/simple-user/dto/simpleUser.dto';
import { SimpleUserService } from 'src/simple-user/simple-user.service';
import { ReviewDto } from './dto/review.dto';
import { ReviewService } from './review.service';

@Controller('review')
export class ReviewController {

    constructor(private readonly reviewService: ReviewService){}

    @Post('create-review')
    @HttpCode(HttpStatus.CREATED)
    async createReview(@Body() dto: ReviewDto, @Body('courseId') courseId: number) {
        const review = this.reviewService.createReview(dto, courseId);
        return review;
    } 

    @Get('get-reviews/:id')
    @HttpCode(HttpStatus.CREATED)
    async fetchAllReviews(@Param() params) {
        const allReviews = this.reviewService.fetchAllReviews(params.id);
        return allReviews;
    }

    @Get('get-reviews/:idMe/:idCourse')
    @HttpCode(HttpStatus.CREATED)
    async findMyReview(@Param() params) {
        const myReview = this.reviewService.findMyReview(params.idME, params.idCourse);
        return myReview;
    }

}
 