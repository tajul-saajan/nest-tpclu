import { User } from 'src/user/user.interface';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CreateTaskDto } from './task.dto';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  name: string;

  @Column({ default: false, nullable: true })
  is_done: boolean;

  @ManyToOne(() => User, (user) => user.id)
  added_by: number;
}
