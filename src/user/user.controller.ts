import { Post, Body } from '@nestjs/common/decorators';
import { UserService } from './user.service';
import { Controller, Get } from '@nestjs/common';
import { CreateUserDto, UserSignInDto } from './user.dto';

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
