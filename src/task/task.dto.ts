import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  name: string;

  is_done: boolean;

  @IsNotEmpty()
  added_by: number;
}

export class UpdateTaskDto extends PartialType(CreateTaskDto) {}
