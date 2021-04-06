import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('persons')
export class Person {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    name: string;

    @Column('int')
    age: number;

    @Column()
    email: string;
}