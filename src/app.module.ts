import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { PersonController } from './controllers/person.controller';
import { AppService } from './services/app.service';

@Module({
    imports: [],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
