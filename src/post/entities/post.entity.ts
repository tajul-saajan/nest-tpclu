import { Comment } from 'src/comment/entities/comment.entity';
import { User } from 'src/entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
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
}
