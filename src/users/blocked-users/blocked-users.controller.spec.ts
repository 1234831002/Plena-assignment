import { Test, TestingModule } from '@nestjs/testing';
import { BlockedUsersController } from './blocked-users.controller';

describe('BlockedUsersController', () => {
  let controller: BlockedUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlockedUsersController],
    }).compile();

    controller = module.get<BlockedUsersController>(BlockedUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
