import { Router } from 'express';
import { addCategory } from '../controllers/categoryController';

const router = Router();

router.post('/', addCategory); // Matches POST requests to '/api/categories'

export default router;