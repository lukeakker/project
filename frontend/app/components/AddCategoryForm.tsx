// components/AddCategoryForm.tsx
'use client';

import React, { useState } from 'react';
import axios from 'axios';

const AddCategoryForm = () => {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form submitted"); // Check if form submission is working

    const categoryData = { name };
    console.log('Submitting category data:', name); // Check the data

    try {
      const response = await axios.post('http://localhost:3001/api/categories', categoryData, {
        
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      console.log('Response:', response.data); // Debug log
      
      setSuccess('Category added successfully!');
      setName('');
    } catch (error) {
      // Enhanced error logging
      console.error('Error details:', error);
      console.error('Response:', error.response);
      setError('Failed to add category. Please try again.');
      setSuccess('');
    
      
      setError(error.response?.data?.message || 'Failed to add category. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Add New Category</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter category name"
            className="w-full p-2 border rounded"
          />
        </div>
        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
        >
          {loading ? 'Adding...' : 'Add Category'}
        </button>
      </form>
      {success && <div className="mt-4 p-2 bg-green-100 text-green-700 rounded">{success}</div>}
      {error && <div className="mt-4 p-2 bg-red-100 text-red-700 rounded">{error}</div>}
    </div>
  );
};

export default AddCategoryForm;