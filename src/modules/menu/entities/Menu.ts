import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

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

  @UpdateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}

export default Menu;
