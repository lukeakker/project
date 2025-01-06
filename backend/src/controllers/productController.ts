// src/controllers/productController.ts
import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Product } from "../entities/Product";
import { Inventory } from "../entities/Inventory";
import { Category } from "../entities/Category";

const productRepository = AppDataSource.getRepository(Product);
const inventoryRepository = AppDataSource.getRepository(Inventory);
const categoryRepository = AppDataSource.getRepository(Category);

export const addProduct = async (req: Request, res: Response) => {
  const { name, description, price, stock, category, inventory } = req.body;

  if (!name || !description || !price || !stock || !category || !category.id) {
    res.status(400).json({ message: "Missing required product data" });
    return;
  }

  try {
    const categoryEntity = await categoryRepository.findOneBy({ id: category.id });
    if (!categoryEntity) {
      res.status(400).json({ message: "Category not found" });
      return;
    }

    const product = productRepository.create({
      name,
      description,
      price,
      stock,
      category: categoryEntity,
    });

    const savedProduct = await productRepository.save(product);

    if (inventory && Array.isArray(inventory)) {
      for (const inv of inventory) {
        if (!inv.quantity_changed || !inv.reason) {
          console.warn("Skipping incomplete inventory item:", inv);
          continue; // Skip incomplete inventory items
        }

        const inventoryItem = inventoryRepository.create({
          product_id: savedProduct.id,
          quantity_changed: inv.quantity_changed,
          reason: inv.reason,
          product: savedProduct,
        });

        await inventoryRepository.save(inventoryItem);
      }
    }

    res.status(201).json(savedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create product", error });
  }
};
