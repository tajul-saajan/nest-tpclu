import { CreateUserDto, UserSignInDto } from './../user/user.dto';
import { User } from './../user/user.interface';
import { UnauthorizedException } from '@nestjs/common/exceptions';
import { Injectable } from '@nestjs/common';
import { compare, hash } from 'bcrypt';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
  constructor(@InjectRepository(User) private repository: Repository<User>) {}

  async create(dto: CreateUserDto) {
    const user = new User();
    user.name = dto.name;
    user.email = dto.email;
    user.password = await this.encryptPassword(dto.password);
    user.phone = dto.phone;
    return await this.repository.save(user);
  }

  async signIn(dto: UserSignInDto) {
    const user = await this.repository.findOne({ where: { email: dto.email } });
    if (!user) {
      throw new UnauthorizedException('user not found');
    }

    const isMatch = await compare(dto.password, user.password);
    if (!isMatch) {
      throw new UnauthorizedException('password does not match');
    }

    return user;
  }

  private async encryptPassword(password: string) {
    const saltOrRounds = 10;
    return await hash(password, saltOrRounds);
  }
}
