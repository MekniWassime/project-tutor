import { CourseEntity } from "src/course/entities/course.entity";
import { SimpleUserEntity } from "src/simple-user/entity/simpleUser.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";

@Entity('reviews')
export class ReviewEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    rating: number;

    @Column()
    comment: String;

    @ManyToOne(
        type => SimpleUserEntity,
        (user) => user.reviews,
        {
            cascade: false,
        }
    )
    user: SimpleUserEntity;

    @ManyToOne(
        type => CourseEntity,
        (course) => course.reviews,
        {
            cascade: false,
        }
    )
    course: CourseEntity;

}
 