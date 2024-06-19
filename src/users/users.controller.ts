import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./users.service";
import { UserDto } from "src/dto/user.dto";

@Controller("users")
export class UserController {
    constructor(private userService: UserService) { }
    @Post("search")
    searchUser(@Body() user: UserDto) {
        return this.userService.search(user)
    }
    @Post("")
    saveUser(@Body() user: UserDto) {
        user.birthdate=new Date(user.birthdate)
        return this.userService.saveUser(user)
    }
}