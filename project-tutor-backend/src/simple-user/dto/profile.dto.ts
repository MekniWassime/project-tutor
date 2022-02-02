import { IsDate, IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ProfileDto {

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsDate()
    birthday: string;

    @IsNotEmpty()
    @IsNumber()
    phone: number;
}