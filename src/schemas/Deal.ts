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

  @Column('date')
  date: Date;

  @Column('decimal')
  total: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
export default Deal;
