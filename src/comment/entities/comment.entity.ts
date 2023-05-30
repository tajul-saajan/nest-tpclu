import { Post } from 'src/post/entities/post.entity';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class Comment {
  @PrimaryColumn()
  id: number;

  @Column({ nullable: false })
  text: string;

  @ManyToOne(() => Post, (post) => post.id)
  post: number;
}
