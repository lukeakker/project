// src/routes/inventoryRoutes.ts
import express, { Router } from 'express';
import { addInventory } from '../controllers/inventoryController'; // Adjust the path as needed

const router = Router();

// Route is now just '/' since '/api/categories' prefix is added in app.ts
router.post('/', addInventory);

export default router;
