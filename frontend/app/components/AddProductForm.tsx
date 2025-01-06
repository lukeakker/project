// components/AddProductForm.tsx
'use client';

import React, { useState } from 'react';
import axios from 'axios';

const AddProductForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [category, setCategory] = useState('');
  const [imageid, setImageid] = useState('');
  const [inventory, setInventory] = useState([{ quantity_changed: '', reason: '' }]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const productData = { name, description, price, stock, category, inventory };

    try {
      const response = await axios.post('http://localhost:3000/admin/product', productData);
      console.log('Product added successfully:', response.data);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>
      <div>
        <label>Price:</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
      </div>
      <div>
        <label>Stock:</label>
        <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} required />
      </div>
      <div>
        <label>ImageID:</label>
        <input type="text" value={imageid} onChange={(e) => setImageid(e.target.value)} required />
      </div>
      <div>
        <label>Category ID:</label>
        <input type="number" value={category} onChange={(e) => setCategory(e.target.value)} required />
      </div>
      <div>
        <label>Inventory:</label>
        <textarea
          value={JSON.stringify(inventory)}
          onChange={(e) => setInventory(JSON.parse(e.target.value))}
        />
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
