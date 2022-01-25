import { type } from "os";
import { Timestamp } from "src/generics/timestamps";
import { PackageEntity } from "src/package/entities/package.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CourseCategoryEnum } from "./courseCategoryEnum";

@Entity('course')
export class CourseEntity extends Timestamp{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title: string;

    @Column()
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
}