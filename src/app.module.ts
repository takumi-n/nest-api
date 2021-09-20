import { MeowMiddleware } from './middleware/meow.middleware';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './middleware/logger.middleware';

@Module({
  imports: [CatsModule, TypeOrmModule.forRoot()],
  controllers: [AppController],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('/');
    consumer.apply(MeowMiddleware).forRoutes('cats');
  }
}
