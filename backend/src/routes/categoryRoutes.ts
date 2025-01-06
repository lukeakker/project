import { Router } from 'express';
import { addCategory } from '../controllers/categoryController';

const categoryRoutes = Router();

categoryRoutes.post('/categories', addCategory);  // Make sure this matches the frontend URL

export default categoryRoutes;
