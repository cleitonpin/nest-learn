import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './create-user.dto';
import { User } from './users.entity';


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) { }

    async create(createUserDto: CreateUserDto): Promise<User> {
        const user = new User();
        user.age = createUserDto.age;
        user.email = createUserDto.email;
        user.password = createUserDto.password;
        user.name = createUserDto.name;
        return this.userRepository.save(user)
    }

    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    findOne(id: string): Promise<User | undefined> {
        return this.userRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.userRepository.delete(id);
    }
}
