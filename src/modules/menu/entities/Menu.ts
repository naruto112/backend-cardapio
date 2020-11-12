import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinTable,
  ManyToMany,
} from "typeorm";

import Product from "../../products/entities/Product";

@Entity("menu")
class Menu {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  owner: string;

  @Column()
  name: string;

  @Column()
  sequence: number;

  @Column()
  visible: number;

  @ManyToMany(() => Product)
  @JoinTable({
    name: "products",
    joinColumns: [{ name: "menu_id" }],
    inverseJoinColumns: [{ name: "id" }],
  })
  products: Product[];

  @UpdateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}

export default Menu;
