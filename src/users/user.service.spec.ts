import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './users.service';

describe('UserService', () => {
    let service: UserService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [UserService],
        }).compile();

        service = module.get<UserService>(UserService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should create a user', async () => {
        const user = { name: 'John', surname: "cena", userName: 'johncenawwe', birthdate: new Date("1988-03-25"), blockerUsers: [], age: 40, isActive: true };
        const createdUser = await service.saveUser(user);
        expect(createdUser).toHaveProperty('id');
        expect(createdUser.name).toBe(user.name);
        expect(createdUser.userName).toBe(user.userName);
        expect(createdUser.birthdate).toBe(user.birthdate);
        expect(createdUser.age).toBe(user.age);

    });
});
