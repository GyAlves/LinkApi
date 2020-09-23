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
  name: string;

  @Column('decimal')
  price: number;

  @Column('date')
  wonDate: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
export default Deal;
