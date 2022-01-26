import { type } from "os";
import { CourseEntity } from "src/course/entities/course.entity";
import { Timestamp } from "src/generics/timestamps";
import { PackageEntity } from "src/package/entities/package.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('session')
export class SessionEntity extends Timestamp{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    date: Date;

    //in minutes
    @Column()
    duration: number

    // user relationship

    @ManyToOne(
        type => CourseEntity,
        (course) => course.sessions,
        {
            cascade: false,
        }
    )
    course: CourseEntity
}