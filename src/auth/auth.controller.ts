import { CreateUserDto, UserSignInDto } from './../user/user.dto';
import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { SkipAuth } from 'src/skipAuth.decorator';

@Controller('auth')
export class AuthController {
  constructor(private service: AuthService, private jwtService: JwtService) {}

  @SkipAuth()
  @Post('register')
  create(@Body() dto: CreateUserDto) {
    return this.service.create(dto);
  }

  @SkipAuth()
  @Post('sign-in')
  async signIn(@Body() dto: UserSignInDto) {
    const user = await this.service.signIn(dto);
    const access_token = await this.jwtService.signAsync({ ...user });

    return {
      user,
      access_token,
    };
  }

  @Get('profile')
  profile(@Request() request) {
    return request['user'];
  }
}
