import { Comment } from 'src/comment/entities/comment.entity';
import { User } from 'src/entity';
import { Like } from 'src/like/entities/like.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, type: 'varchar' })
  title: string;

  @Column({ nullable: false, type: 'varchar' })
  body: string;

  @ManyToOne(() => User, (user) => user.id)
  created_by: number;

  @OneToMany(() => Comment, (comment) => comment.post)
  comments: Comment[];

  @OneToOne(() => Like, (like) => like.id)
  @JoinColumn()
  like: Like;
}
