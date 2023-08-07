import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private readonly repository: Repository<Post>,
  ) {}

  async create(createPostDto: CreatePostDto) {
    return await this.repository.save(createPostDto);
  }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: number) {
    return await this.repository.findOne({ where: { id: id } });
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    return await this.repository
      .createQueryBuilder()
      .update()
      .set(updatePostDto)
      .where('id = :id', { id })
      .execute();
  }

  async likePost(id: number) {
    const post = await this.repository.findOne({
      where: { id: id },
      relations: { like: true },
    });

    // post.like.count += 1;
    // await this.repository.save(post);

    return post;
  }

  async remove(id: number) {
    return await this.repository.delete(id);
  }
}
