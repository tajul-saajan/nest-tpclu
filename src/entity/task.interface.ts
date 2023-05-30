import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from 'src/entity';

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
