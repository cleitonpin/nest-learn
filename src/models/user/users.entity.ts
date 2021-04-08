import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    name: string;

    @Column('int')
    age: number;

    @Column()
    email: string;

    @Column()
    password: string;

    constructor(
        name: string,
        email: string,
        password: string,
        age?: number
    ) {
        this.age = age;
        this.name = name;
        this.email = email;
        this.password = password
    }
}