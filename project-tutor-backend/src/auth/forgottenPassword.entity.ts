import {BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import * as bcrypt from 'bcrypt'; 

@Entity('forgottenpasswords')
export class ForgottenPassword {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    email: string;

    @Column()
    newPasswordToken: string;

    @Column()
    timestamp: Date;
}
