import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: true,
    credentials: true,
  });
  app.setGlobalPrefix('api');
  const port = process.env.PORT || 8080;
  await app.listen(port);
  console.log(`Backend listening on port ${port}`);
}
bootstrap();
