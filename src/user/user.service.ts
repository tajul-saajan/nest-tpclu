import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.interface';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {}

  async getAll() {
    return await this.repository.find();
  }
}
