import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto, UserSignInDto } from './user.dto';
import { compare, hash } from 'bcrypt';
import { UnauthorizedException } from '@nestjs/common/exceptions';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  async getAll() {
    return await this.repository.find();
  }
}
