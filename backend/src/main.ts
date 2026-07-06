import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 8081;
  const corsOrigins = (process.env.CORS_ORIGINS || '*')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);

  // Set a global prefix
  app.setGlobalPrefix('api');
  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  app.enableCors({
    origin: corsOrigins.includes('*') ? true : corsOrigins,
    credentials: true,
  });
  await app.listen(port, '0.0.0.0');
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
