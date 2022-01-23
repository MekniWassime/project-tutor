import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('mentors')
export class Mentor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @Column()
    name: string;

    @Column()
    occupation: string;

    @Column()
    hashedRT: string;

    @Column()
    confirmed: boolean;
}
