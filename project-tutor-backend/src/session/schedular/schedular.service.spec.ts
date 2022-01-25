import { Test, TestingModule } from '@nestjs/testing';
import { SchedularService } from './schedular.service';

describe('SchedularService', () => {
  let service: SchedularService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SchedularService],
    }).compile();

    service = module.get<SchedularService>(SchedularService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
