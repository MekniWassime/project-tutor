import { type } from "os";
import { Timestamp } from "src/generics/timestamps";
import { PackageEntity } from "src/package/entities/package.entity";
import { SchedularEntity } from "src/session/entities/schedular.entity";
import { SessionEntity } from "src/session/entities/session.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CourseCategoryEnum } from "./courseCategoryEnum";

@Entity('course')
export class CourseEntity extends Timestamp{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title: string;

    @Column({default: ''})
    description: string;

    @Column({
        type: 'enum',
        enum: CourseCategoryEnum
    })
    category: CourseCategoryEnum;

    @Column()
    capacity: number;

    @Column()
    address: string;

    @OneToMany(
        type => PackageEntity,
        (pa) => pa.course,
        {
            cascade: true
        }
    )
    packages: PackageEntity[];

    @OneToMany(
        type => SessionEntity,
        (sess) => sess.course,
        {
            cascade: true
        }
    )
    sessions: SessionEntity[];

    @OneToMany(
        type => SchedularEntity,
        (sched) => sched.course,
        {
            cascade: true
        }
    )
    schedulars: SchedularEntity[];
}