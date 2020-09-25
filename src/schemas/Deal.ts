import {
  ObjectID,
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ObjectIdColumn,
} from 'typeorm';

@Entity('deals')
class Deal {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  date: string;

  @Column('decimal')
  total: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
export default Deal;
