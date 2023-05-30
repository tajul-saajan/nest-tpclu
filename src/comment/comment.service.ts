import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './entities/comment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment) private readonly repository: Repository<Comment>,
  ) {}

  async create(createCommentDto: CreateCommentDto) {
    return await this.repository.save(createCommentDto);
  }

  async update(id: number, updateCommentDto: UpdateCommentDto) {
    return await this.repository
      .createQueryBuilder()
      .update()
      .set(updateCommentDto)
      .where('id = :id', { id })
      .execute();
  }

  async remove(id: number) {
    return await this.repository.delete(id);
  }
}
