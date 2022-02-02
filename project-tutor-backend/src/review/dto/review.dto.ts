import { IsDate, IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ReviewDto {

    @IsNotEmpty()
    @IsNumber()
    rating: number;

    @IsNotEmpty()
    @IsString()
    comment: string;

    @IsNotEmpty()
    userId: number;
/*
    @IsNotEmpty()
    courseId: number;
*/
}