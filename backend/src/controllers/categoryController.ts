// src/controllers/categoryController.ts
import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Category } from '../entities/Category';

export const addCategory = async (req: Request, res: Response): Promise<void> => {
  console.log("Request 100000000000000000 received"); // Check if backend is receiving the request
  const { name } = req.body;

  if (!name) {
    res.status(400).json({ message: 'Name is required' });
    return;
  }

  try {
    const category = new Category();
    category.name = name;

    const categoryRepository = AppDataSource.getRepository(Category);
    await categoryRepository.save(category);

    res.status(201).json({ message: 'Category added successfully!' });
  } catch (error) {
    console.error('Error adding category:', error);
    res.status(500).json({ message: 'Failed to add category. Please try again.' });
  }
};