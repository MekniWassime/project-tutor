import { IsDate, IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class AuthDto {

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    occupation: string;

    @IsNotEmpty()
    @IsNumber()
    phone: number;

    @IsNotEmpty()
    birthdate: string;

    @IsString()
    role: string;
}