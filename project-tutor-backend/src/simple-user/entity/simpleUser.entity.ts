import { ReviewEntity } from "src/review/entity/review.entity";
import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm"; 

@Entity('simpleuser')
export class SimpleUserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @Column()
    name: string;

    @Column()
    hashedRT: string;

    @Column()
    qrCode: string;

    @Column()
    birthday: Date;

    @Column()
    phone: number;

    @Column()
    confirmed: boolean;

    @OneToMany(
        type => ReviewEntity,
        (review) => review.user,
        {
            cascade: true
        }
    )
    reviews: ReviewEntity[];
}
 