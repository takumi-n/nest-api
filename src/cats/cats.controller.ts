import { Cat } from './entities/cat.entity';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Inject,
  CACHE_MANAGER,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cache } from 'cache-manager';

@Controller('cats')
export class CatsController {
  constructor(
    private readonly catsService: CatsService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Get()
  findAll() {
    return this.catsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const key = this.catCacheKey(id);
    const catFromCache = await this.cacheManager.get(key);
    if (catFromCache instanceof Cat) {
      return catFromCache as Cat;
    }

    const cat = await this.catsService.findOne(+id);
    this.cacheManager.set(key, cat);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catsService.remove(+id);
  }

  private catCacheKey(id: string) {
    return `cats-${id}`;
  }
}
