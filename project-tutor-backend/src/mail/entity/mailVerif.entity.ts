import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('emailverifications')
export class EmailVerif {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    email: string;

    @Column()
    emailToken: String;

    @Column()
    timestamp: Date
}
