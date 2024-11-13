import React, { useState } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

const Category = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('home'); // Track active tab

  // Handle form input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  // Unified form submission handler with single API call
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/store-categories', formData);
      setMessage(`Success: ${response.data.message || 'Category created successfully.'}`);
      setError('');
    } catch (err) {
      setError(`Error: ${err.response?.data?.message || 'Failed to submit data.'}`);
      setMessage('');
    }
  };

  return (
    <>
      <ul className="flex border-b" role="tablist">
        <li className="mr-2" role="presentation">
          <button
            className={`px-4 py-2 text-sm font-medium border-b-2 ${activeTab === 'home' ? 'text-blue-600 border-blue-400' : 'text-gray-600 border-transparent hover:text-blue-800 hover:border-blue-400'} focus:outline-none`}
            onClick={() => setActiveTab('home')}
            type="button"
            role="tab"
            aria-controls="home-tab-pane"
            aria-selected={activeTab === 'home'}
          >
            Add Category
          </button>
        </li>
      </ul>

      <div className="tab-content">
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          {activeTab === 'home' && (
            <div id="home-tab-pane" role="tabpanel" tabIndex="0">
              <InputField id="name" label="Name" value={formData.name} handleChange={handleChange} />
              <TextAreaField id="description" label="Description" value={formData.description} handleChange={handleChange} rows="3" />
            </div>
          )}
          
          <div>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {message && <p className="text-center mt-4 text-sm text-green-700">{message}</p>}
      {error && <p className="text-center mt-4 text-sm text-red-700">{error}</p>}
    </>
  );
};

// Reusable Input component
const InputField = ({ id, label, value, handleChange }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      id={id}
      type="text"
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

export default Category;
