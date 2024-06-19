import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "src/schemas/users";

@Injectable()
export class BlockedUserService {
    constructor(
        @InjectModel(User.name)
        private readonly userRepository: Model<UserDocument>
    ) { }
    async blockUnblockUser(user) {
        let obj = {}
        if (user.isBlocking)
            obj = await this.userRepository.findByIdAndUpdate({ _id: user.blockingUserId }, { $addToSet: { blockedUsers: user.userToBeBlocked } })
        else
            obj = await this.userRepository.findByIdAndUpdate({ _id: user.blockingUserId }, { $pull: { blockedUsers: user.userToBeBlocked } })
        return obj
    }
}