import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";

import Menu from "../../menu/entities/Menu";
import Category from "../../categories/entities/Category";
import Aditional from "../../aditionals/entities/Aditional";

@Entity("products")
class Products {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  owner: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  description: string;

  @Column()
  stock: number;

  @Column()
  visible: number;

  @Column()
  menu_id: string;

  @ManyToOne(() => Menu)
  @JoinColumn({ name: "menu_id" })
  menu: Menu;

  @Column()
  category_id: string;

  @ManyToOne(() => Category)
  @JoinColumn({ name: "category_id" })
  category: Category;

  @Column()
  aditional_id: string;

  @ManyToOne(() => Aditional)
  @JoinColumn({ name: "aditional_id" })
  aditional: Aditional;

  @UpdateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}

export default Products;
