import { Body, Controller, Post } from '@nestjs/common';
import { BlockedUserService } from './blocked-users.service';

@Controller('blocked-users')
export class BlockedUsersController {
    constructor(private blockService:BlockedUserService){

    }
    @Post("")
    searchUser(@Body() user) {
        return this.blockService.blockUnblockUser(user)
    }
}
