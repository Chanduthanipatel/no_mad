import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";
//import { HttpExceptionFilter } from "./cfexception/httpExceptionFilter";
import { initiateDbConnection } from "./common/config/db-connection";
// import { GlobalExceptionFilter } from "./modules/global-exception/gloablExceptionFilter";
// import { GlobalLoggerService } from "./modules/global-logger/global-logger/global-logger.service";

async function bootstrap() {
  const config = new DocumentBuilder()
    .setTitle("Team 3 APIs")
    .setDescription("Hackathon Team-3 APIs")
    .setVersion("1.0")
    .build();

  const app = await NestFactory.create(AppModule);
  // const loggerService = app.get<GlobalLoggerService>(GlobalLoggerService);
  // app.useGlobalFilters(new GlobalExceptionFilter(loggerService));
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup("", app, document);

  // app.useGlobalPipes(new ValidationPipe());

  app.enableCors({
    origin: "*",
  });
  initiateDbConnection();
  await app.listen(process.env.HTTP_PORT);
}
bootstrap();

