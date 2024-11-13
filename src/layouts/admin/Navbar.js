// src/components/Navbar.js
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">
          {/* <Link to="/" className="no-underline text-white">E-commerce</Link> */}
        </div>


        {/* Profile & Logout */}
        <div className="flex items-center space-x-4">
          <FaUserCircle className="text-2xl" />
          <button className="flex items-center hover:text-gray-300">
            <AiOutlineLogout className="mr-1" />
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
