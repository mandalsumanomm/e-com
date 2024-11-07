import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate, Link } from 'react-router-dom';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

const SignupForm = () => {
  const navigate = useNavigate();

  const [registerInput, setRegisterInput] = useState({
    name: '',
    email: '',
    password: '',
    error_list: {},
  });

  // Fetch CSRF token when the component mounts
  useEffect(() => {
    const fetchCsrfToken = async () => {
      await axios.get('/sanctum/csrf-cookie');
    };
    fetchCsrfToken();
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setRegisterInput({
      ...registerInput,
      [name]: value,
      error_list: { ...registerInput.error_list, [name]: null },
    });
  };

  const registerSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: registerInput.name,
      email: registerInput.email,
      password: registerInput.password,
    };

    try {
      const res = await axios.post('/api/register', data);
      if (res.data.status === 200) {
        localStorage.setItem('auth_token', res.data.token);
        localStorage.setItem('auth_name', res.data.username);
        swal("Success", res.data.message, "success");
        navigate('/');
      } else {
        setRegisterInput({ ...registerInput, error_list: res.data.errors });
      }
    } catch (error) {
      console.error("Error during registration:", error.response ? error.response.data : error);
      swal("Error", error.response?.data?.message || "An error occurred. Please try again.", "error");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center mt-20 mb-20">
        <div className="bg-white shadow-md rounded-lg flex w-3/4 max-w-4xl overflow-hidden">
          <div className="hidden md:block w-1/2 bg-blue-50">
            <img
              src="Regimage.png"
              alt="Shopping"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-1">Create an account</h2>
            <p className="text-gray-600 mb-6">Enter your details below</p>

            <form onSubmit={registerSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  onChange={handleInput}
                  value={registerInput.name}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-500 focus:border-red-500"
                  placeholder="Name"
                  required
                />
                {registerInput.error_list.name && (
                  <span className="text-red-500 text-sm">{registerInput.error_list.name}</span>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleInput}
                  value={registerInput.email}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-500 focus:border-red-500"
                  placeholder="Email or Phone Number"
                  required
                />
                {registerInput.error_list.email && (
                  <span className="text-red-500 text-sm">{registerInput.error_list.email}</span>
                )}
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={handleInput}
                  value={registerInput.password}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-500 focus:border-red-500"
                  placeholder="Password"
                  required
                />
                {registerInput.error_list.password && (
                  <span className="text-red-500 text-sm">{registerInput.error_list.password}</span>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-red-500 text-white py-2 rounded-md font-semibold hover:bg-red-600 transition duration-300"
              >
                Create Account
              </button>
            </form>

            <p className="mt-4 text-center text-sm text-gray-600">
              Already have an account? <Link to="/login" className="text-blue-500 font-semibold">Log in</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
