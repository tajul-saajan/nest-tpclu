import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto, UpdateTaskDto } from './task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly service: TaskService) {}

  @Get()
  async index() {
    return await this.service.index();
  }

  @Post()
  async create(@Body() dto: CreateTaskDto) {
    return await this.service.create(dto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() dto: UpdateTaskDto) {
    return await this.service.update(id, dto);
  }

  @Delete(':id')
  async destroy(@Param('id') id: number) {
    return await this.service.delete(id);
  }
}
