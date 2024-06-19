import { Body, Controller, Get, Post, Put } from "@nestjs/common";
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
    @Put("")
    updateUser(@Body() user: UserDto) {
        user.birthdate=new Date(user.birthdate)
        return this.userService.saveUser(user)
    }
}