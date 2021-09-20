# nest-api

NestJS で色々遊んでみたリポジトリです

## 構成

- サーバー: NestJS
  - TypeORM: 連携用のパッケージを NestJS が用意してくれていて相性が良い
  - Express: [4、5 倍リクエスト捌ける](https://github.com/nestjs/nest/pull/8007/checks?check_run_id=3473130688) Fastify も魅力的だったがミドルウェアとの相性とか心配だったのでデフォルトの Express にしてみた
- パッケージマネージャー: pnpm
- データストア: MySQL

## 遊んでみた機能

- [TypeORM Integration](https://docs.nestjs.com/techniques/database#typeorm-integration): TypeORM をいい感じに Repository として NestJS と連携してくれる。便利
- [Caching](https://docs.nestjs.com/techniques/caching): In-memory キャッシュを利用。コントローラー単位、グローバル単位でキャッシュの有効化できるみたいだけど、事故怖いのでルート単位でやるのが良さそう
- [Middleware](https://docs.nestjs.com/middleware)
- [Exception filters](https://docs.nestjs.com/exception-filters)
- [Pipes](https://docs.nestjs.com/pipes)
- [Guards](https://docs.nestjs.com/guards)
- [OpenAPI](https://docs.nestjs.com/openapi/introduction)

## 環境構築

依存パッケージをインストールします

```bash
$ pnpm install
```

Docker で MySQL を立ち上げます

```bash
$ docker run -p 5000:3306 --name nest-api-mysql -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=nest-api -d mysql:latest
```

## 実行

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## テスト

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
