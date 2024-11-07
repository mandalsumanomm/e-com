import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

const Navigationbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Logout function
  const handleLogout = (e) => {
    e.preventDefault();
  
    // Fetch CSRF token
    axios.get('/sanctum/csrf-cookie').then(() => {
      const token = localStorage.getItem('auth_token');
  
      axios.post('/api/logout', {}, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        if (res.data.status === 200) {
          localStorage.removeItem('auth_token');
          localStorage.removeItem('auth_name');
          navigate('/signup');
        }
      })
      .catch(error => {
        console.error("Logout error:", error);
        alert("Failed to logout. Please try again.");
      });
    });
  };
  

  return (
    <>
      <div className="bg-white text-gray-900">
        <nav className="container mx-auto flex flex-col md:flex-row items-center justify-between py-4">
          <div className="text-2xl font-poppins font-bold">Exclusive</div>

          <div className="relative flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 text-center font-poppins text-base leading-6 no-underline">
            <Link to="/" className="relative text-black font-medium group no-underline">
              Home
              <span className="absolute left-0 right-0 h-[2px] bg-gray-400 transition-transform transform scale-x-0 group-hover:scale-x-100 bottom-[-4px] mx-auto" />
            </Link>
            <Link to="/contact" className="relative text-black font-medium group no-underline">
              Contact
              <span className="absolute left-0 right-0 h-[2px] bg-gray-400 transition-transform transform scale-x-0 group-hover:scale-x-100 bottom-[-4px] mx-auto" />
            </Link>
            <Link to="/about" className="relative text-black font-medium group no-underline">
              About
              <span className="absolute left-0 right-0 h-[2px] bg-gray-400 transition-transform transform scale-x-0 group-hover:scale-x-100 bottom-[-4px] mx-auto" />
            </Link>
            <Link to="/signup" className="relative text-black font-medium group no-underline">
              Sign Up
              <span className="absolute left-0 right-0 h-[2px] bg-gray-400 transition-transform transform scale-x-0 group-hover:scale-x-100 bottom-[-4px] mx-auto" />
            </Link>
          </div>

          <div className="relative flex items-center mt-4 md:mt-0">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-200 text-black placeholder-gray-500 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-poppins text-base leading-6 w-full md:w-80"
            />
            <Link to="/wishlist">
              <img src="Wishlist.png" alt="Wishlist Icon" className="ml-3 w-6 h-6" />
            </Link>
            <Link to="/cart">
              <img src="Cart1.png" alt="Cart Icon" className="ml-3 w-6 h-6" />
            </Link>
            <div className="relative">
              <button onClick={toggleDropdown}>
                <img src="user.png" alt="User Icon" className="ml-3 w-6 h-6 cursor-pointer" />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-slate-700 border border-black rounded-md shadow-lg z-10">
                  <ul className="text-white text-sm mt-2">
                    <li className="py-2 flex">
                      <img src="user (1).png" alt="Icon" className="w-6 h-6 mr-3" />
                      <Link to="/account" className="text-white no-underline">My Account</Link>
                    </li>
                    <li className="px-1 py-2 flex">
                      <img src="icon-mallbag.png" alt="Icon" className="w-6 h-6 mr-3" />
                      <Link to="/orders" className="text-white no-underline">My Orders</Link>
                    </li>
                    <li className="px-1 py-2 flex">
                      <img src="icon-cancel.png" alt="Icon" className="w-6 h-6 mr-3" />
                      <Link to="/cancellations" className="text-white no-underline">My Cancellations</Link>
                    </li>
                    <li className="px-1 py-2 flex">
                      <img src="Icon-Reviews.png" alt="Icon" className="w-6 h-6 mr-3" />
                      <Link to="/reviews" className="text-white no-underline">My Reviews</Link>
                    </li>
                    <li className="px-1 py-2 flex text-red-500 cursor-pointer" onClick={handleLogout}>
                      <img src="Icon-logout.png" alt="Icon" className="w-6 h-6 mr-3" />
                      <span className="text-white">Logout</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </nav>
        <div className="border-t border-gray-400 mx-auto"></div>
      </div>
    </>
  );
};

export default Navigationbar;
