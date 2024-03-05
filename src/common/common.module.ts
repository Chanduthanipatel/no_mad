import { Module } from "@nestjs/common";
import { HttpModule, HttpService } from "@nestjs/axios"
// import { GlobalLoggerService } from "src/modules/global-logger/global-logger/global-logger.service";


@Module({
  exports: [],
  imports : [HttpModule],
  providers: []
})
export class CommonModule {}
