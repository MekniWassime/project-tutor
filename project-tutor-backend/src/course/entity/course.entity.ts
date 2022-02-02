import { ReviewEntity } from "src/review/entity/review.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";

@Entity('courses')
export class CourseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(
        type => ReviewEntity,
        (review) => review.course,
        {
            cascade: true
        }
    )
    reviews: ReviewEntity[];
} 