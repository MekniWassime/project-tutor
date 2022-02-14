import {BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import * as bcrypt from 'bcrypt'; 
import { CourseEntity } from "src/course/entities/course.entity";
import { EnrollmenEntity } from "src/enrollment/entities/enrollment.entity";
import { AttendanceEntity } from "src/enrollment/entities/attendance.entity";

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
    image: string;

    @Column()
    phone: number;

    @Column()
    birthdate: string;

    @Column()
    occupation: string;

    @Column({nullable:true})
    hashedRT: string;

    @Column()
    confirmed: boolean;
    @OneToMany(
        type => CourseEntity,
        (course) => course.mentor,
        {
            cascade: true
        }
    )
    courses: CourseEntity[];

    @OneToMany(
        type => EnrollmenEntity,
        (enroll) => enroll.user,
        {
            cascade: true
        }
    )
    enrollments: EnrollmenEntity[];

    @OneToMany(
        type => AttendanceEntity,
        (att) => att.user,
        {
            cascade: true
        }
    )
    attendances: AttendanceEntity[];


}
