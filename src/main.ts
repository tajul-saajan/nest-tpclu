import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  ParseArrayPipe,
  ParseBoolPipe,
  ParseIntPipe,
  ValidationPipe,
} from '@nestjs/common/pipes';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe(),
    new ParseIntPipe(),
    new ParseBoolPipe(),
    new ParseArrayPipe(),
  );
  await app.listen(3000);
}
bootstrap();
