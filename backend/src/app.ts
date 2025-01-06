// src/app.ts
import express from 'express';
import cors from 'cors';
import customerRoutes from './routes/customerRoutes';
import categoryRoutes from './routes/categoryRoutes';
import inventoryRoutes from './routes/inventoryRoutes';
import productRoutes from './routes/productRoutes';


const app = express();

app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.path}`);
    next();
  });

// Middleware to parse JSON request bodies
app.use(cors());
app.use(express.json());  // Use express's built-in json parser

// Register routes for different resources
app.use('/api', categoryRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/products', productRoutes);
app.use('/api/inventory', inventoryRoutes);

app.listen(3001, () => {
    console.log('Server running on port 3000');
  });



export default app;
