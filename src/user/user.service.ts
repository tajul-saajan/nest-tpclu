import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './user.dto';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  async getAll() {
    return await this.repository.find();
  }

  async create(dto: CreateUserDto) {
    const user = new User();
    user.name = dto.name;
    user.email = dto.email;
    user.password = await this.encryptPassword(dto.password);
    user.phone = dto.phone;
    return await this.repository.save(user);
  }

  async encryptPassword(password: string) {
    const saltOrRounds = 10;
    return await hash(password, saltOrRounds);
  }
}
