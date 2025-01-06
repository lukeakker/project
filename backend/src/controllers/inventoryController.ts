// src/controllers/inventoryController.ts
import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Inventory } from "../entities/Inventory";
import { Product } from "../entities/Product";

const inventoryRepository = AppDataSource.getRepository(Inventory);
const productRepository = AppDataSource.getRepository(Product);

export const addInventory = async (req: Request, res: Response) => {
  const { product_id, quantity_changed, reason } = req.body;

  if (!product_id || !quantity_changed || !reason) {
    res.status(400).json({ message: "Missing required inventory data" });
    return;
  }

  try {
    const product = await productRepository.findOneBy({ id: product_id });
    if (!product) {
      res.status(400).json({ message: "Product not found" });
      return;
    }

    const inventory = inventoryRepository.create({
      product_id,
      quantity_changed,
      reason,
      product,
    });

    const savedInventory = await inventoryRepository.save(inventory);
    res.status(201).json(savedInventory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create inventory", error });
  }
};
