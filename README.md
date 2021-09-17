# nest-api

NestJS で色々遊んでみたリポジトリです

## 環境構築

パッケージマネージャには pnpm を使用しています

```bash
$ pnpm install
```

データストアとして MySQL を使っているので Docker で立ち上げます

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
