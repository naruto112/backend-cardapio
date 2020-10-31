import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";

import { Exclude, Expose } from "class-transformer";

import Products from "../../products/entities/Product";
import Categories from "../../categories/entities/Category";

@Entity("users")
class Users {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  @Exclude()
  password: string;

  @Column()
  first_name: string;

  @Column()
  second_name: string;

  @Column()
  city: string;

  @Column()
  uf: string;

  @Column()
  cep: string;

  @Column()
  address: string;

  @Column()
  neighborhood: string;

  @Column()
  number: string;

  @Column()
  complement: string;

  @UpdateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  @Column()
  avatar_url: string;

  @Column()
  shop: string;

  @Column()
  fantasy_name: string;

  @Column()
  term: boolean;

  @Column()
  color: string;

  @ManyToMany(() => Products)
  @JoinTable({
    name: "products",
    joinColumns: [{ name: "owner" }],
    inverseJoinColumns: [{ name: "id" }],
  })
  products: Products;

  @ManyToMany(() => Categories)
  @JoinTable({
    name: "categories",
    joinColumns: [{ name: "owner" }],
    inverseJoinColumns: [{ name: "id" }],
  })
  categories: Categories;

  @Expose({ name: "avatar_url" })
  getAvatarUrl(): string {
    return this.avatar_url
      ? `${process.env.APP_STORAGE_URL}/files/${this.avatar_url}`
      : "";
  }
}

export default Users;
