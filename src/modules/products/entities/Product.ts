import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  ManyToMany,
  JoinColumn,
  JoinTable,
  OneToMany,
} from "typeorm";

import Menu from "../../menu/entities/Menu";
import Category from "../../categories/entities/Category";
import Aditional from "../../aditionals/entities/Aditional";
import Attachment from "../../attachaments/entities/Attachments";

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

  @ManyToMany(() => Aditional)
  @JoinTable({
    name: "products_aditionals_rel",
    joinColumns: [{ name: "product_id" }],
    inverseJoinColumns: [{ name: "aditional_id" }],
  })
  aditionals: Aditional[];

  @ManyToMany(() => Attachment)
  @JoinTable({
    name: "attachments",
    joinColumns: [{ name: "product_id" }],
    inverseJoinColumns: [{ name: "id" }],
  })
  attachment: Attachment;

  @UpdateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}

export default Products;
