import { Test, TestingModule } from '@nestjs/testing';
import { SimpleUserController } from './simple-user.controller';

describe('SimpleUserController', () => {
  let controller: SimpleUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SimpleUserController],
    }).compile();

    controller = module.get<SimpleUserController>(SimpleUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
