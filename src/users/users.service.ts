import { Injectable } from "@nestjs/common";
import { User, UserDocument } from "../schemas/users"
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserDto } from "src/dto/user.dto";
import { search } from "src/_models/search";

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name)
        private readonly userRepository: Model<UserDocument>,
    ) { }
    async search(data) {
        let userSearch = new search(data)
        let searchQuery = {}
        if (userSearch.userName) {
            searchQuery["userName"] = userSearch.userName
        }
        searchQuery["age"] = (userSearch.maxAge != 0 && userSearch.minAge != 0) ?
            { "$gte": userSearch.minAge, "$lte": userSearch.maxAge } :
            (userSearch.maxAge == 0 ? { "$gte": userSearch.minAge } : { "$lte": userSearch.maxAge })
        searchQuery["isActive"] = true

        return this.userRepository.find(searchQuery)
    }
    async saveUser(user: UserDto): Promise<User> {
        user.age = this.getAge(user.birthdate)
        return this.userRepository.create(user)
    }
    async updateUser(user: UserDto): Promise<User> {
        let userDetails = await this.userRepository.findById(user.id)
        Object.assign(userDetails, user)
        await userDetails.save()
        return userDetails
    }
    getAge(dateString: Date) {
        let today = new Date();
        let birthDate = new Date(dateString);
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
}