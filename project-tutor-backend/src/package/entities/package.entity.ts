import { CourseEntity } from "src/course/entities/course.entity";
import { Timestamp } from "src/generics/timestamps";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('package')
export class PackageEntity extends Timestamp{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title: string;

    @Column()
    price: number;

    @Column()
    nbSessions: number;

    @ManyToOne(
        type => CourseEntity,
        (course) => course.packages,
        {
            cascade: false,
        }
    )
    course: CourseEntity
}