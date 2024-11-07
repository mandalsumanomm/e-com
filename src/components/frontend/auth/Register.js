import React, { useState, useEffect } from 'react';
import Navbar from '../../../layouts/frontend/Navbar';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;


const Register = () => {
  const navigate = useNavigate();
  const [registerInput, setRegister] = useState({
    name: '',
    email: '',
    password: '',
    error_list: {},
  });

  useEffect(() => {
    // Fetch CSRF token on component mount
    const fetchCsrfToken = async () => {
      await axios.get('/sanctum/csrf-cookie');
    };
    fetchCsrfToken();
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setRegister((prevState) => ({
      ...prevState,
      [name]: value,
      error_list: { ...prevState.error_list, [name]: null },
    }));
  };

  // Make sure the CSRF cookie is set first:
useEffect(() => {
  axios.get('/sanctum/csrf-cookie').then(response => {
    console.log("CSRF cookie set.");
  });
}, []);

const registerSubmit = async (e) => {
  e.preventDefault();

  // Retrieve the CSRF token from the cookie
  const token = document.cookie
    .split('; ')
    .find(row => row.startsWith('XSRF-TOKEN'))
    ?.split('=')[1];

  if (token) {
    // Set the CSRF token in the request header
    axios.defaults.headers.common['X-XSRF-TOKEN'] = token;
  }

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
      setRegister({ ...registerInput, error_list: res.data.errors });
    }
  } catch (error) {
    console.error("Error during registration:", error.response ? error.response.data : error);
    swal("Error", error.response?.data?.message || "An error occurred. Please try again.", "error");
  }
};


  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h1 className="text-center mb-4">Register</h1>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-body">
                <form onSubmit={registerSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      type="text"
                      name="name"
                      onChange={handleInput}
                      value={registerInput.name}
                      className="form-control"
                      id="name"
                      placeholder="Enter your name"
                      required
                    />
                    {registerInput.error_list.name && (
                      <span className="text-danger">{registerInput.error_list.name}</span>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      onChange={handleInput}
                      value={registerInput.email}
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                      required
                    />
                    {registerInput.error_list.email && (
                      <span className="text-danger">{registerInput.error_list.email}</span>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                      type="password"
                      name="password"
                      onChange={handleInput}
                      value={registerInput.password}
                      className="form-control"
                      id="password"
                      placeholder="Enter your password"
                      required
                    />
                    {registerInput.error_list.password && (
                      <span className="text-danger">{registerInput.error_list.password}</span>
                    )}
                  </div>
                  <button type="submit" className="btn btn-primary w-100">Register</button>
                </form>
                <p className="mt-3 text-center">
                  Already have an account? <a href="/login">Login here</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
