import { UserService } from './user.service';
import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private service: UserService) {}

  @Get()
  index() {
    return this.service.getAll();
  }

  @Get('profile')
  profile() {
    return this.service;
  }
}
