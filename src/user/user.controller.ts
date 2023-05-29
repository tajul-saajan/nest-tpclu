import { Request } from 'express';
import { UserService } from './user.service';
import { Controller, Get, Req } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private service: UserService) {}

  @Get()
  async index() {
    return await this.service.getAll();
  }

  @Get('/tasks')
  async getTasks(@Req() req: Request) {
    return await this.service.getTasks(req);
  }
}
