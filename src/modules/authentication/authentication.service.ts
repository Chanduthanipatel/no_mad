import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthenticationService {
  async healthCheck() {
    try {
      return 'success check!';
    } catch (err) {
      return err.message;
    }
  }

  async login(data: any) {
    try {
      return { data: data };
    } catch (err) {
      return err.message;
    }
  }
}
