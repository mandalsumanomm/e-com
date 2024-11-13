// src/components/admin/Product/AddProduct.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    sellingPrice: '',
    originalPrice: '',
    category: '',
    unit: '',
    size: '',
    color: '',
  });
  const [categories, setCategories] = useState([]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);

  // Fetch categories for dropdown
  useEffect(() => {
    axios.get('/api/categories') // Adjust this URL to your backend route
      .then(response => setCategories(response.data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  // Handle single product image upload
  const handleProductImageChange = (e) => {
    setProductImage(e.target.files[0]);
  };

  // Handle multiple gallery images upload
  const handleGalleryImagesChange = (e) => {
    setGalleryImages([...e.target.files]);
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });
    data.append('productImage', productImage);
    galleryImages.forEach((file, index) => {
      data.append(`galleryImages[${index}]`, file);
    });

    try {
      const response = await axios.post('/api/products', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(`Success: ${response.data.message || 'Product added successfully.'}`);
      setError('');
    } catch (err) {
      setError(`Error: ${err.response?.data?.message || 'Failed to submit data.'}`);
      setMessage('');
    }
  };

  return (
    <div className="container mx-auto my-8 p-6">
      <h1 className="text-2xl font-semibold mb-4">Add Product</h1>

      <form onSubmit={handleSubmit} className="space-y-6 mt-4">
        <InputField id="name" label="Product Name" value={formData.name} handleChange={handleChange} />
        <TextAreaField id="description" label="Product Description" value={formData.description} handleChange={handleChange} rows="3" />
        <InputField id="sellingPrice" label="Product Selling Price" value={formData.sellingPrice} handleChange={handleChange} type="number" />
        <InputField id="originalPrice" label="Product Original Price" value={formData.originalPrice} handleChange={handleChange} type="number" />

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
          <select
            id="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-1 block w-full border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 text-sm"
          >
            <option value="">Select Category</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <InputField id="unit" label="Unit" value={formData.unit} handleChange={handleChange} />
        <InputField id="size" label="Size" value={formData.size} handleChange={handleChange} />
        <InputField id="color" label="Colour" value={formData.color} handleChange={handleChange} />

        <div>
          <label htmlFor="productImage" className="block text-sm font-medium text-gray-700">Product Image</label>
          <input
            id="productImage"
            type="file"
            onChange={handleProductImageChange}
            className="mt-1 block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
          />
        </div>

        <div>
          <label htmlFor="galleryImages" className="block text-sm font-medium text-gray-700">Product Image Gallery</label>
          <input
            id="galleryImages"
            type="file"
            multiple
            onChange={handleGalleryImagesChange}
            className="mt-1 block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
          />
        </div>

        <div>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Product
          </button>
        </div>
      </form>

      {message && <p className="text-center mt-4 text-sm text-green-700">{message}</p>}
      {error && <p className="text-center mt-4 text-sm text-red-700">{error}</p>}
    </div>
  );
};

// Reusable Input component
const InputField = ({ id, label, value, handleChange, type = 'text' }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      id={id}
      type={type}
      value={value}
      onChange={handleChange}
      className="mt-1 block w-full border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 text-sm"
      placeholder={`Enter ${label.toLowerCase()}`}
    />
  </div>
);

// Reusable TextArea component
const TextAreaField = ({ id, label, value, handleChange, rows }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <textarea
      id={id}
      value={value}
      onChange={handleChange}
      className="mt-1 block w-full border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 text-sm"
      placeholder={`Enter ${label.toLowerCase()}`}
      rows={rows}
    />
  </div>
);

export default AddProduct;
