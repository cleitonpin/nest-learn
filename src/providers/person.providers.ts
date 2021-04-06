import { Person } from "src/entities/person.entity";
import { Connection } from "typeorm";

export const personProviders = [
    {
        provide: 'PERSON_REPOSITORY',
        useFactory: (conn: Connection) => conn.getRepository(Person),
        inject: 'DATABASE_CONNECTION'
    }
]