import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../entity/user.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Request } from 'express';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  async getAll() {
    return await this.repository.find();
  }

  async getTasks(request: Request) {
    const user: User = request['user'];
    const userWithTask = await this.repository.findOne({
      where: {
        id: user.id,
      },
      relations: {
        tasks: true,
      },
    });

    return userWithTask.tasks;
  }
}
