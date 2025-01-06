// src/routes/productRoutes.ts
import express, { Router } from 'express';
import { addCustomer } from '../controllers/customerController';
import { addProduct } from '../controllers/productController';

const router = Router();

// Route is now just '/' since '/api/customers' prefix is added in app.ts
router.post('/', addProduct);

export default router;