import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUserDto } from "src/models/user/create-user.dto";
import { UserService } from "src/models/user/user.service";
import { User } from "src/models/user/users.entity";

@Controller('users')
export class UserController {

    constructor(private readonly userService: UserService) { }

    @Get()
    find(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.userService.create(createUserDto)
    }
}