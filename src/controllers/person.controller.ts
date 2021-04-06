import { Body, Controller, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { PersonService } from "src/services/person.service";

export class PersonDto {
    name: string;
    age: number;
    height: number;
    email: string;
}

@Controller('persons')
export class PersonController {
    public persons: string[] = [];

    constructor(private readonly personService: PersonService) { }

    @Post()
    create(@Body() personDto: PersonDto, @Req() req: Request): Array<string> {
        const { name, age, height, email } = req.body;
        personDto.name = name;
        personDto.age = age;
        personDto.email = email;
        personDto.height = height;
        this.persons.push(req.body)
        console.log(this.persons)
        return this.persons;
    }
}