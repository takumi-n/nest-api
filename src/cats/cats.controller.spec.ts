import { CatsService } from './cats.service';
import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from './cats.controller';
import { CacheModule } from '@nestjs/common';

describe('CatsController', () => {
  let controller: CatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [
        {
          provide: CatsService,
          useValue: {},
        },
      ],
      imports: [CacheModule.register()],
    }).compile();

    controller = module.get<CatsController>(CatsController);
  });

  it('鳴き声が返ってくる', () => {
    const response = controller.meow();
    expect(response.message).toBe('Meow!');
  });
});
