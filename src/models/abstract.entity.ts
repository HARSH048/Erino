
import {
  PrimaryGeneratedColumn,
  DeleteDateColumn,
  Column,
  Unique,
  UpdateDateColumn,
} from 'typeorm';

@Unique(['id'])
export abstract class AbstractEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'createdAt', default: () => 'now()' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updatedAt' })
  updatedAt: Date;

  @Column({ nullable: true })
  createdBy?: string;

  @Column({ nullable: true })
  updatedBy?: string;

  @DeleteDateColumn()
  deletedAt?: Date;
}
