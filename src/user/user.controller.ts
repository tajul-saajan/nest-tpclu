import { Post, Body } from '@nestjs/common/decorators';
import { UserService } from './user.service';
import { Controller, Get } from '@nestjs/common';
import { CreateUserDto } from './user.dto';

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
}
