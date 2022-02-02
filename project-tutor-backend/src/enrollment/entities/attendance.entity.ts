import { Mentor } from "src/auth/entity/mentor.entity";
import { CourseEntity } from "src/course/entities/course.entity";
import { Timestamp } from "src/generics/timestamps";
import { SessionEntity } from "src/session/entities/session.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('attendance')
export class AttendanceEntity extends Timestamp{
    @PrimaryGeneratedColumn()
    id:number;

    @ManyToOne(
        type => Mentor,
        (user) => user.attendances,
        {
            cascade: false,
        }
    )
    user: Mentor


    @ManyToOne(
        type => SessionEntity,
        (sess) => sess.attendances,
        {
            cascade: false,
        }
    )
    session: SessionEntity
}