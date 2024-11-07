import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white font-poppins py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 px-4 md:px-0">
        
        {/* Subscription Section */}
        <div>
          <h2 className="font-semibold text-lg">Exclusive</h2>
          <p className="mt-2">Subscribe</p>
          <p className="text-gray-400">Get 10% off your first order</p>
          <div className="mt-4 flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 bg-transparent border border-gray-500 rounded-l-md focus:outline-none text-white placeholder-gray-400"
            />
            <button className="bg-white text-black p-2 rounded-r-md border border-white">
              &gt;
            </button>
          </div>
        </div>
        
        {/* Support Section */}
        <div>
          <h2 className="font-semibold text-lg">Support</h2>
          <p className="text-gray-400 mt-2">1, Desh Bandhu Sarani,Dum Dum, Kolkata 700028</p>
          <p className="text-gray-400">info@brandwisetech.com</p>
          <p className="text-gray-400">+91 79806 21185</p>
        </div>
        
        {/* Account Section */}
        <div>
          <h2 className="font-semibold text-lg">Account</h2>
          <ul className="mt-2 space-y-1"> 
            <li><Link to="/account" className="hover:underline">My Account</Link></li>
            <li><Link to="/login" className="hover:underline">Login / Register</Link></li>
            <li><Link to="/cart" className="hover:underline">Cart</Link></li>
            <li><Link to="/wishlist" className="hover:underline">Wishlist</Link></li>
            <li><Link to="/shop" className="hover:underline">Shop</Link></li>
          </ul>
        </div>
        
        {/* Quick Link Section */}
        <div>
          <h2 className="font-semibold text-lg">Quick Link</h2>
          <ul className="mt-2 space-y-1">
            <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link to="/terms-of-use" className="hover:underline">Terms Of Use</Link></li>
            <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
        
        {/* Download App Section */}
        <div>
          <h2 className="font-semibold text-lg">Download App</h2>
          <p className="text-gray-400 mt-2">Save $3 with App New User Only</p>
          {/* <div className="flex items-center mt-4">
            <img src="path/to/qr-code.png" alt="QR Code" className="w-16 h-16 mr-3" />
            <div className="space-y-2">
              <img src="path/to/google-play.png" alt="Google Play" className="w-20" />
              <img src="path/to/app-store.png" alt="App Store" className="w-20" />
            </div>
          </div>
          <div className="flex space-x-4 mt-4">
            <Link to="#" aria-label="Facebook" className="hover:text-gray-400">F</Link>
            <Link to="#" aria-label="Twitter" className="hover:text-gray-400">T</Link>
            <Link to="#" aria-label="Instagram" className="hover:text-gray-400">I</Link>
            <Link to="#" aria-label="LinkedIn" className="hover:text-gray-400">L</Link>
          </div> */}
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-400 text-sm">
      Copyright © 2024 | Designed by Brandwise Tech Private Limited
      </div>
    </footer>
  );
};

export default Footer;
