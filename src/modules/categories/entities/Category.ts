import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

import Attachment from "../../attachaments/entities/Attachments";

@Entity("categories")
class Category {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  owner: string;

  @Column()
  name: string;

  @ManyToMany(() => Attachment)
  @JoinTable({
    name: "attachments",
    joinColumns: [{ name: "category_id" }],
    inverseJoinColumns: [{ name: "id" }],
  })
  attachment: Attachment;

  @UpdateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}

export default Category;
