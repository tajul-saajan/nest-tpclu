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

  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.service.create(dto);
  }

  @Post('sign-in')
  signIn(@Body() dto: UserSignInDto) {
    return this.service.signIn(dto);
  }
}
