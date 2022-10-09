import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn  } from "typeorm"
import { ITask } from "../types/task.types"

@Entity('list')
export class List extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number

  @Column()
  title: string

  @Column({
    name: 'tasks',
    type: 'json',
    nullable: true,
  })
  tasks: Array<ITask>

  @CreateDateColumn({
    name: 'createdAat',
    type: 'timestamptz',
    nullable: true,
  })
  createdAt?: Date;

  @CreateDateColumn({
    name: 'updatedAt',
    type: 'timestamptz',
    nullable: true,
  })
  updatedAt?: Date;
}
