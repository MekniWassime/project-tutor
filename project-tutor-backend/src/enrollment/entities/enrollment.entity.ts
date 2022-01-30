import { Mentor } from "src/auth/mentor.entity";
import { CourseEntity } from "src/course/entities/course.entity";
import { Timestamp } from "src/generics/timestamps";
import { PackageEntity } from "src/package/entities/package.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('enrollment')
export class EnrollmenEntity extends Timestamp{
    @PrimaryGeneratedColumn()
    id:number;

    @ManyToOne(
        type => Mentor,
        (user) => user.enrollments,
        {
            cascade: false,
        }
    )
    user: Mentor

    @ManyToOne(
        type => CourseEntity,
        (course) => course.enrollments,
        {
            cascade: false,
        }
    )
    course: CourseEntity

    @ManyToMany(
        type => PackageEntity
    )
    @JoinTable()
    packages: PackageEntity[]

    @Column()
    nbSessionsPayed: number;

    @Column()
    nbSessionsAttended: number;

    @Column()
    lastPackage: string;
}