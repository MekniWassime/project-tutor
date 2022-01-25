import { type } from "os";
import { CourseEntity } from "src/course/entities/course.entity";
import { Timestamp } from "src/generics/timestamps";
import { PackageEntity } from "src/package/entities/package.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { DaysEnum } from "./daysEnum";
import { SchedularFrequencyEnum } from "./schedularFrequencyEnum";

@Entity('schedular')
export class SchedularEntity extends Timestamp{
    @PrimaryGeneratedColumn()
    id:number;

    @Column(
        {
            type: 'enum',
            enum: DaysEnum
        }
    )
    date: DaysEnum;

    //in minutes
    @Column()
    duration: number

    @Column()
    time: Date

    @Column({
        type: 'enum',
        enum: SchedularFrequencyEnum
    })
    frequency: SchedularFrequencyEnum

    @ManyToOne(
        type => CourseEntity,
        (course) => course.sessions,
        {
            cascade: false,
        }
    )
    course: CourseEntity
}