import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

import { Exclude, Expose } from "class-transformer";

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

  @Expose({ name: "avatar_url" })
  getAvatarUrl(): string {
    return `${process.env.APP_STORAGE_URL}/files/${this.avatar_url}`;
  }
}

export default Users;
