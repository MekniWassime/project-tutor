import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { ForgottenPassword } from "./forgottenPassword.entity";
import { Mentor } from "./mentor.entity";
import { RtStrategy } from "./strategy";
import { JwtStrategy } from "./strategy/at.strategy";



@Module({
    imports:[
      TypeOrmModule.forFeature([Mentor, ForgottenPassword]),
      JwtModule.register({})
    ],
    exports: [AuthService],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy, RtStrategy]
})
export class AuthModule {
}