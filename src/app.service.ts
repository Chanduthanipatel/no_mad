import { Injectable } from '@nestjs/common';
// import { readFileSync } from 'fs';
// import { GlobalLoggerService } from "./modules/global-logger/global-logger/global-logger.service";
@Injectable()
export class AppService {
  constructor() {}
  getHealth() {
    return { health: 'Good' };
  }
}
