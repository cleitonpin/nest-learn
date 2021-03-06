import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './controllers/app.controller';
import { UsersModule } from './models/user/user.module';
import { AppService } from './services/app.service';

@Module({
    imports: [TypeOrmModule.forRoot(), UsersModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
