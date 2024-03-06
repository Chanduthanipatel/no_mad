import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { ConfigModule } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

import { HttpModule } from '@nestjs/axios';
import { AuthenticationModule } from './modules/authentication/authentication.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/environment/${process.env.NODE_ENV}.env`,
    }),
    CommonModule,
    HttpModule,
    AuthenticationModule,
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService, JwtService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    // Uncomment when JWT token need to be authenticated
    // consumer.apply(JwtAuthService).forRoutes("*");
    // Uncomment when date formatter required
    // consumer.apply(DatePayloadFormatter).forRoutes("*");
  }
}
