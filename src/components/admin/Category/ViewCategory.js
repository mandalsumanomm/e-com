// src/components/ViewCategory.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ViewCategory = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch categories on component mount
  useEffect(() => {
    axios.get('http://localhost:8000/api/categories') // Adjust URL to your backend
      .then(response => {
        setCategories(response.data); // Set the fetched data to state
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
        setLoading(false);
      });
  }, []);

  // Handle delete functionality
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      axios.delete(`http://localhost:8000/api/categories/${id}`)
        .then(() => {
          setCategories(categories.filter(category => category.id !== id)); // Remove the deleted category from the UI
        })
        .catch(error => {
          console.error('Error deleting category:', error);
        });
    }
  };

  return (
    <div className="container mx-auto my-8 p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">View Categories</h1>
        
        {/* Add Category Button */}
        <Link to="/admin/category">
          <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none">
            Add Category
          </button>
        </Link>
      </div>

      {loading ? (
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-500 border-solid"></div>
        </div>
      ) : categories.length === 0 ? (
        <p className="text-center text-gray-600">No categories found</p>
      ) : (
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="w-full bg-gray-100 text-left">
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Description</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id}>
                <td className="py-2 px-4 border-b">{category.id}</td>
                <td className="py-2 px-4 border-b">{category.name}</td>
                <td className="py-2 px-4 border-b">{category.description}</td>
                <td className="py-2 px-4 border-b">
                  <Link to={`/admin/edit-category/${category.id}`}>
                    <button className="text-blue-600 hover:underline">Edit</button>
                  </Link>
                  <button 
                    className="text-red-600 hover:underline ml-4"
                    onClick={() => handleDelete(category.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewCategory;
