import { Cat } from './cats/entities/cat.entity';
import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [
    CatsModule,
    CacheModule.register(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 5000,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [Cat],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
