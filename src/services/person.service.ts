import { Inject, Injectable } from '@nestjs/common';
import { Person } from 'src/entities/person.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PersonService {
    constructor(
        @Inject('PERSON_REPOSITORY')
        private personRepository: Repository<Person>
    ) { }

    async findAll(): Promise<Person[]> {
        return this.personRepository.find();
    }
}
