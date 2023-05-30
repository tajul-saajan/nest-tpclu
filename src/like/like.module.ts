import { Module } from '@nestjs/common';
import { LikeService } from './like.service';
import { LikeController } from './like.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Like } from './entities/like.entity';

@Module({
  controllers: [LikeController],
  providers: [LikeService],
  imports: [LikeModule, TypeOrmModule.forFeature([Like])],
})
export class LikeModule {}
