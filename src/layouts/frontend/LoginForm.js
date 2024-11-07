import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // const handleLogin = async (e) => {
  //   e.preventDefault();

  //   try {
  //     // Make a POST request to the login endpoint
  //     const response = await axios.post('http://localhost:8000/api/login', {
  //       email,
  //       password,
  //     }, { withCredentials: true });

  //     // Check if login was successful
  //     if (response.status === 200) {
  //       // Show success alert
  //       swal("Login Successful", "", "success");

  //       // Redirect to the dashboard after a short delay
  //       setTimeout(() => navigate('/'), 1500);
  //     }
  //   } catch (err) {
  //     // Handle errors
  //     let errorMessage = 'Network error. Please check your connection.';
  //     if (err.response) {
  //       errorMessage = err.response.data.message || 'Login failed. Please try again.';
  //     }

  //     setError(errorMessage);

  //     // Show error alert
  //     swal("Login Failed", errorMessage, "error");
  //   }
  // };
  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      // Make a POST request to the login endpoint
      const response = await axios.post('http://localhost:8000/api/login', {
        email,
        password,
      }, { withCredentials: true });
  
      // Check if login was successful
      if (response.status === 200) {
        // Save the token in localStorage
        localStorage.setItem('auth_token', response.data.token);  // Make sure `token` is returned in the API response
  
        // Show success alert
        swal("Login Successful", "", "success");
  
        // Redirect to the dashboard after a short delay
        setTimeout(() => navigate('/'), 1500);
      }
    } catch (err) {
      // Handle errors
      let errorMessage = 'Network error. Please check your connection.';
      if (err.response) {
        errorMessage = err.response.data.message || 'Login failed. Please try again.';
      }
  
      setError(errorMessage);
  
      // Show error alert
      swal("Login Failed", errorMessage, "error");
    }
  };
  
  return (
    <>
      <div className="flex items-center justify-center mt-20 mb-20">
        <div className="bg-white shadow-md rounded-lg flex w-3/4 max-w-4xl overflow-hidden">
          {/* Left Image Section */}
          <div className="hidden md:block w-1/2 bg-blue-50">
            <img
              src="Regimage.png"
              alt="Shopping"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Form Section */}
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-1">Log in to Exclusive</h2>
            <p className="text-gray-600 mb-6">Enter your details below</p>

            {/* Display error message */}
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            {/* Form Fields */}
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-500 focus:border-red-500"
                  placeholder="Email or Phone Number"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-500 focus:border-red-500"
                  placeholder="Password"
                  required
                />
              </div>

              {/* Log In Button */}
              <button
                type="submit"
                className="w-full bg-red-500 text-white py-2 rounded-md font-semibold hover:bg-red-600 transition duration-300"
              >
                Log In
              </button>
            </form>

            {/* Forgot Password Link */}
            <p className="mt-4 text-right text-sm text-red-500 font-semibold underline">
              <Link to="#">Forgot Password?</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
