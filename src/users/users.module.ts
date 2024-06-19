import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { UserService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/schemas/users';
import { RedisService } from 'src/config/redis.config';
import { BlockedUsersController } from './blocked-users/blocked-users.controller';
import { BlockedUserService } from './blocked-users/blocked-users.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    ],
    controllers: [UserController, BlockedUsersController],
    providers: [UserService, RedisService, BlockedUserService]
})
export class UsersModule { }
