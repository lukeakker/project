// src/routes/customerRoutes.ts
import express, { Router } from 'express';
import { addCustomer } from '../controllers/customerController';

const router = Router();

// Route is now just '/' since '/api/customers' prefix is added in app.ts
router.post('/', addCustomer);

export default router;
