import { type } from "os";
import { Mentor } from "src/auth/entity/mentor.entity";
import { EnrollmenEntity } from "src/enrollment/entities/enrollment.entity";
import { Timestamp } from "src/generics/timestamps";
import { PackageEntity } from "src/package/entities/package.entity";
import { ReviewEntity } from "src/review/entity/review.entity";
import { SchedularEntity } from "src/session/entities/schedular.entity";
import { SessionEntity } from "src/session/entities/session.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
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

    @ManyToOne(
        type => Mentor,
        (mentor) => mentor.courses,
        {
            cascade: false,
        }
    )
    mentor: Mentor;

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

    @OneToMany(
        type => EnrollmenEntity,
        (enroll) => enroll.course,
        {
            cascade: true
        }
    )
    enrollments: EnrollmenEntity[];

    @OneToMany(
        type => ReviewEntity,
        (review) => review.course,
        {
            cascade: true
        }
    )
    reviews: ReviewEntity[];
}