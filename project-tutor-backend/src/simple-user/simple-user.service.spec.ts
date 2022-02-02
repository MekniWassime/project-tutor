import { Test, TestingModule } from '@nestjs/testing';
import { SimpleUserService } from './simple-user.service';

describe('SimpleUserService', () => {
  let service: SimpleUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SimpleUserService],
    }).compile();

    service = module.get<SimpleUserService>(SimpleUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
