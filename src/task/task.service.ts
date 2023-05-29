import { CreateTaskDto, UpdateTaskDto } from './task.dto';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.interface';

@Injectable()
export class TaskService {
  constructor(@InjectRepository(Task) private repository: Repository<Task>) {}

  async index() {
    return await this.repository.find();
  }

  async create(dto: CreateTaskDto) {
    return await this.repository.save(dto);
  }

  async update(id: number, dto: UpdateTaskDto) {
    return await this.repository
      .createQueryBuilder()
      .update()
      .set(dto)
      .where('id = :id', { id })
      .execute();
  }

  async delete(id: number) {
    return await this.repository.delete(id);
  }
}
