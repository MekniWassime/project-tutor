import {BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import * as bcrypt from 'bcrypt'; 

@Entity('mentors')
export class Mentor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @Column()
    name: string;

    @Column()
    occupation: string;

    @Column()
    hashedRT: string;
}