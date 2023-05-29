import { CreateUserDto, UserSignInDto } from './../user/user.dto';
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private service: AuthService) {}
  @Post('register')
  create(@Body() dto: CreateUserDto) {
    return this.service.create(dto);
  }

  @Post('sign-in')
  signIn(@Body() dto: UserSignInDto) {
    return this.service.signIn(dto);
  }
}
