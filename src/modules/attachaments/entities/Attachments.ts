import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";

import Product from "../../products/entities/Product";
import Category from "../../categories/entities/Category";

import { Expose } from "class-transformer";

@Entity("attachments")
class Attachaments {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  product_id: string;

  @ManyToOne(() => Product)
  @JoinColumn({ name: "product_id" })
  product: Product;

  @Column()
  category_id: string;

  @ManyToOne(() => Category)
  @JoinColumn({ name: "category_id" })
  category: Category;

  @Column()
  url: string;

  @Expose({ name: "url" })
  getAvatarUrl(): string {
    return this.url ? `${process.env.APP_STORAGE_URL}/files/${this.url}` : "";
  }

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Attachaments;
