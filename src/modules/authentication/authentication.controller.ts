import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authService: AuthenticationService) {}
  @Get('health-check')
  async healthCheck() {
    return await this.authService.healthCheck();
  }

  @Post('login')
  login(@Body() data: any, @Req() req: any) {
    console.log('the data is --', req);
    console.log('the data is --', data);
    return { data: req };
  }
}
