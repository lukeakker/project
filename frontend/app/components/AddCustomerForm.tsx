// components/AddCustomerForm.tsx
'use client';

import React, { useState } from 'react';
import axios from 'axios';

const AddCustomerForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    shipping_address: '',
    zip_code: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post('http://localhost:3000/admin/customer', formData);
      setSuccess('Customer added successfully!');
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        shipping_address: '',
        zip_code: ''
      });
    } catch (error) {
      setError('Failed to add customer. Please try again.');
      console.error('Error adding customer:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Add New Customer</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {Object.entries(formData).map(([key, value]) => (
          <div key={key}>
            <label className="block text-sm font-medium mb-1">
              {key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}:
            </label>
            <input
              type={key === 'email' ? 'email' : 'text'}
              name={key}
              value={value}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
        ))}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
        >
          {loading ? 'Adding...' : 'Add Customer'}
        </button>
      </form>
      {success && <div className="mt-4 p-2 bg-green-100 text-green-700 rounded">{success}</div>}
      {error && <div className="mt-4 p-2 bg-red-100 text-red-700 rounded">{error}</div>}
    </div>
  );
};

export default AddCustomerForm;