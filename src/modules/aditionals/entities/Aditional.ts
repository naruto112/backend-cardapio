import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";

import Product from "../../products/entities/Product";

@Entity("aditionals")
class Aditional {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  owner: string;

  @Column()
  name: string;

  @Column()
  quantity: number;

  @Column()
  price: number;

  @ManyToMany(() => Product)
  @JoinTable({
    name: "products_aditionals_rel",
    joinColumns: [{ name: "aditional_id" }],
    inverseJoinColumns: [{ name: "product_id" }],
  })
  @UpdateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}

export default Aditional;
