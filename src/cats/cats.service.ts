import { Cat } from './entities/cat.entity';
import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CatsService {
  constructor(@InjectRepository(Cat) private catsRepository: Repository<Cat>) {}

  create(createCatDto: CreateCatDto) {
    return this.catsRepository.insert(createCatDto);
  }

  findAll() {
    return this.catsRepository.find();
  }

  findOne(id: number) {
    return this.catsRepository.findOne(id);
  }

  async remove(id: number) {
    await this.catsRepository.delete(id);
  }
}
