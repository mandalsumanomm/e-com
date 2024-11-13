import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ViewProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch products from API on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/view-products'); // Adjust this URL based on your backend route
        setProducts(response.data);
      } catch (err) {
        setError('Error fetching products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Delete a product
  const handleDelete = async (productId) => {
    try {
      await axios.delete(`/api/products/${productId}`);
      setProducts(products.filter((product) => product.id !== productId));
    } catch (err) {
      setError('Error deleting product');
    }
  };

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="container mx-auto my-8 p-6">
      <h1 className="text-2xl font-semibold mb-4">Products</h1>

      {/* Add Product button aligned to the right */}
      <div className="flex justify-end mb-4">
        <Link to="/admin/add-product">
          <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            Add Product
          </button>
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b">ID</th>
              <th className="px-6 py-3 border-b">Name</th>
              <th className="px-6 py-3 border-b">Category</th> {/* Added Category column */}
              <th className="px-6 py-3 border-b">Selling Price</th>
              <th className="px-6 py-3 border-b">Original Price</th>
              <th className="px-6 py-3 border-b">Image</th>
              <th className="px-6 py-3 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-100">
                <td className="px-6 py-4 border-b text-center">{product.id}</td>
                <td className="px-6 py-4 border-b">{product.name}</td>
                <td className="px-6 py-4 border-b">{product.category || 'N/A'}</td> {/* Display category name */}
                <td className="px-6 py-4 border-b text-center">${product.selling_price}</td>
                <td className="px-6 py-4 border-b text-center">${product.original_price}</td>
                <td className="px-6 py-4 border-b text-center">
                  {product.product_image_url ? (
                    <img
                      src={product.product_image_url}
                      alt={product.name}
                      className="w-16 h-16 object-cover mx-auto rounded"
                    />
                  ) : (
                    'No Image'
                  )}
                </td>
                <td className="px-6 py-4 border-b text-center">
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="px-4 py-1 text-white bg-red-600 rounded hover:bg-red-700 mr-2"
                  >
                    Delete
                  </button>
                  <button
                    className="px-4 py-1 text-white bg-blue-600 rounded hover:bg-blue-700"
                  // Add view or edit functionality if needed
                  >
                    <Link to={`/admin/edit-product/${product.id}`} className="px-4 py-1 no-underline text-white bg-blue-600 rounded hover:bg-blue-700">
                      Edit
                    </Link>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewProduct;
