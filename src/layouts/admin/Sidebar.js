// src/components/Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaColumns, FaBookOpen, FaChartArea, FaTable, FaList } from 'react-icons/fa';
import { AiOutlineDown } from 'react-icons/ai';

const Sidebar = () => {
  const [isLayoutsOpen, setIsLayoutsOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);

  return (
    <nav className="w-64 bg-gray-800 text-white h-screen p-5">
      <div className="space-y-6">
        {/* <div className="text-gray-400 text-sm uppercase">E-commerce</div> */}
        <Link className="flex items-center space-x-2 py-2 no-underline text-white hover:text-gray-300" to="/admin/dashboard">
          <FaTachometerAlt />
          <span>Dashboard</span>
        </Link>
        <Link className="flex items-center space-x-2 py-2 no-underline text-white hover:text-gray-300" to="/admin/profile">
          <FaTachometerAlt />
          <span>Profile</span>
        </Link>
        {/* Add-Category
        <Link className="flex items-center space-x-2 py-2 no-underline text-white hover:text-gray-300" to="/admin/category">
          <FaList />
          <span>Add Category</span>
        </Link> */}
        {/*View-Category */}
        <Link className="flex items-center space-x-2 py-2 no-underline text-white hover:text-gray-300" to="/admin/view-category">
          <FaList />
          <span>Category</span>
        </Link>

        {/* <div className="text-gray-400 text-sm uppercase mt-4">Interface</div> */}
        {/* Layouts Section */}
        <button
          onClick={() => setIsLayoutsOpen(!isLayoutsOpen)}
          className="flex items-center justify-between w-full py-2 text-left hover:text-gray-300"
        >
          <div className="flex items-center space-x-2">
            <FaColumns />
            <span>Products</span>
          </div>
          <AiOutlineDown className={`transition-transform ${isLayoutsOpen ? 'rotate-180' : ''}`} />
        </button>
        {isLayoutsOpen && (
          <div className="ml-6 space-y-2">
            <Link className="block no-underline text-white  hover:text-gray-300" to="/admin/add-product">
              Add Product
            </Link>
            <Link className="block no-underline text-white hover:text-gray-300" to="/admin/view-product">
              View Product
            </Link>
          </div>
        )}

        {/* Pages Section */}
        <button
          onClick={() => setIsPagesOpen(!isPagesOpen)}
          className="flex items-center justify-between w-full py-2 text-left hover:text-gray-300"
        >
          <div className="flex items-center space-x-2">
            <FaBookOpen />
            <span>Pages</span>
          </div>
          <AiOutlineDown className={`transition-transform ${isPagesOpen ? 'rotate-180' : ''}`} />
        </button>
        {isPagesOpen && (
          <div className="ml-6 space-y-2">
            {/* <button
              onClick={() => setIsAuthOpen(!isAuthOpen)}
              className="flex justify-between w-full text-left hover:text-gray-300"
            >
              <span>Authentication</span>
              <AiOutlineDown className={`transition-transform ${isAuthOpen ? 'rotate-180' : ''}`} />
            </button> */}
            {isAuthOpen && (
              <div className="ml-6 space-y-2">
                <Link className="block hover:text-gray-300" to="/login">
                  Login
                </Link>
                <Link className="block hover:text-gray-300" to="/register">
                  Register
                </Link>
                <Link className="block hover:text-gray-300" to="/password">
                  Forgot Password
                </Link>
              </div>
            )}

            <button
              onClick={() => setIsErrorOpen(!isErrorOpen)}
              className="flex justify-between w-full text-left hover:text-gray-300"
            >
              <span>Error</span>
              <AiOutlineDown className={`transition-transform ${isErrorOpen ? 'rotate-180' : ''}`} />
            </button>
            {isErrorOpen && (
              <div className="ml-6 space-y-2">
                <Link className="block hover:text-gray-300" to="/401">
                  401 Page
                </Link>
                <Link className="block hover:text-gray-300" to="/404">
                  404 Page
                </Link>
                <Link className="block hover:text-gray-300" to="/500">
                  500 Page
                </Link>
              </div>
            )}
          </div>
        )}

        {/* <div className="text-gray-400 text-sm uppercase mt-4">Addons</div> */}
        <Link className="flex items-center space-x-2 py-2 no-underline text-white hover:text-gray-300" to="/charts">
          <FaChartArea />
          <span>Charts</span>
        </Link>
        <Link className="flex items-center space-x-2 py-2 no-underline text-white hover:text-gray-300" to="/tables">
          <FaTable />
          <span>Tables</span>
        </Link>
      </div>

      {/* Footer */}
      {/* <div className="mt-6 text-gray-500">
        <div className="small">Logged in as:</div>
        <div>Admin</div>
      </div> */}
    </nav>
  );
};

export default Sidebar;
