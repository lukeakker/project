// src/entities/Product.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Category } from "./Category";
import { Inventory }  from "./Inventory";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column("text")
  description!: string;

  @Column("decimal")
  price!: number;

  @Column()
  stock!: number;

  @ManyToOne(() => Category, (category) => category.products, { onDelete: "CASCADE" })
  category!: Category;

  @OneToMany(() => Inventory, (inventory) => inventory.product, { cascade: true })
  inventory!: Inventory[];
}