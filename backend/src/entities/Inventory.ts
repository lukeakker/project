import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Product } from "./Product";

@Entity()
export class Inventory {
  @PrimaryGeneratedColumn()
  inventory_id!: number;

  @Column()
  product_id!: number;

  @Column({nullable: false })
  quantity_changed!: number;

  @Column()
  reason!: string;

  @ManyToOne(() => Product, (product) => product.inventory, {  onDelete: "CASCADE", onUpdate: "CASCADE" })
  product!: Product;

  
}