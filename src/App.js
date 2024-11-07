import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MasterLayout from './layouts/admin/MasterLayout';
import Login from './components/frontend/Login';
import Register from './components/frontend/auth/Register';
import Signup from './components/frontend/Signup';
import Home from './components/frontend/Home';
import Wishlist from './components/frontend/Wishlist';
import axios from 'axios';
import Cart from './components/frontend/Cart';
import About from './components/frontend/About';

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;

// Add CSRF Token to the request headers
axios.interceptors.request.use(function(config){
  const token = localStorage.getItem('auth_token');
  const csrfToken = document.head.querySelector('meta[name="csrf-token"]');
  if (csrfToken) {
    config.headers['X-CSRF-TOKEN'] = csrfToken.content;
  }
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/*" element={<MasterLayout />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/wishlist" element={<Wishlist />} /> 
        <Route path="/cart" element={<Cart />} /> 
        <Route path="/about" element={<About />} /> 
      </Routes>
    </Router>
  );
}

export default App;
