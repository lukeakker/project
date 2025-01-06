// components/AddInventoryForm.tsx
'use client';

import React, { useState } from 'react';
import axios from 'axios';

const AddInventoryForm = () => {
  const [product_id, setProductId] = useState('');
  const [quantity_changed, setQuantityChanged] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const inventoryData = { product_id, quantity_changed, reason };

    try {
      const response = await axios.post('http://localhost:3000/admin/inventory', inventoryData);
      console.log('Inventory added successfully:', response.data);
    } catch (error) {
      console.error('Error adding inventory:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Product ID:</label>
        <input type="number" value={product_id} onChange={(e) => setProductId(e.target.value)} required />
      </div>
      <div>
        <label>Quantity Changed:</label>
        <input type="number" value={quantity_changed} onChange={(e) => setQuantityChanged(e.target.value)} required />
      </div>
      <div>
        <label>Reason:</label>
        <input type="text" value={reason} onChange={(e) => setReason(e.target.value)} required />
      </div>
      <button type="submit">Add Inventory</button>
    </form>
  );
};

export default AddInventoryForm;
