import { Injectable } from "@nestjs/common";
import { User, UserDocument } from "../schemas/users"
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserDto } from "src/dto/user.dto";
@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name)
        private readonly userRepository: Model<UserDocument>,
    ) { }
    async saveUser(user: UserDto): Promise<User> {
        return this.userRepository.create(user)
    }
}