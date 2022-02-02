import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Req, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ProfileDto } from './dto/profile.dto';
import { diskStorage } from 'multer';
import {v4 as uuidv4 } from 'uuid';
import { Request } from 'express';
import { SimpleUserDto } from './dto/simpleUser.dto';
import { SimpleUserService } from './simple-user.service';
import path from 'path';
import { AuthGuard } from '@nestjs/passport';
import { Tokens } from 'src/auth/types';

export const stockage = {
    storage: diskStorage({
    destination: './uploads/profileimages',
    filename: (req, file, cb) => {
        const filename: string = path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
        const extension: string = path.parse(file.originalname).ext;

        cb(null, `${filename}${extension}`)
        }
    }) 
}

@Controller('simple-user')
export class SimpleUserController {

    constructor(private readonly simpleUserService: SimpleUserService){}

    @Post('register')
    @UseInterceptors(FileInterceptor('file', stockage))
    @HttpCode(HttpStatus.CREATED)
    async createSimpleUser(@Body() dto: SimpleUserDto, @UploadedFile() file) {
        const register = this.simpleUserService.createSimpleUser(dto, file);
        return register;
    } 

    @Post('register-by-mentor')
    @HttpCode(HttpStatus.CREATED)
    async createSimpleUserByMentor(@Body() dto: SimpleUserDto) {
        const register = this.simpleUserService.createSimpleUserByMentor(dto);
        return register;
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('logout')
    @HttpCode(HttpStatus.OK)
    async logout(@Req() req: Request) {
        const user = req.user; 
        return this.simpleUserService.logout(user['sub']);
    }

    @UseGuards(AuthGuard('jwt-refresh'))
    @Post('refresh')
    @HttpCode(HttpStatus.OK)
    async refreshTokens(@Req() req: Request): Promise<Tokens> {
        const user = req.user;
        return this.simpleUserService.refreshTokens(user['sub'], user['refreshToken'])
    }
 
    @Get('profile/:id')
    @HttpCode(HttpStatus.CREATED)
    async fetchDataProfile(@Param() params) {
        return this.simpleUserService.findAllProfile(params.id);
    }

    @Post('edit-name')
    @HttpCode(HttpStatus.CREATED)
    async editName(@Body() dto: ProfileDto) {
        const profile = this.simpleUserService.editName(dto);
        return profile;
    }   
    
    @Post('edit-phone')
    @HttpCode(HttpStatus.CREATED)
    async editPhone(@Body() dto: ProfileDto) {
        const profile = this.simpleUserService.editPhone(dto);
        return profile;
    }

    @Post('edit-birth')
    @HttpCode(HttpStatus.CREATED)
    async editBirthdate(@Body() dto: ProfileDto) {
        const profile = this.simpleUserService.editBirth(dto);
        return profile;
    }
}
