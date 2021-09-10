import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('products')
class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('decimal')
  price: number;

  @Column('decimal')
  quantity: number;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  update_at: Date;
}

export default Product;
