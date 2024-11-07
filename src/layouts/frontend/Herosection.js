import React from 'react';
import { Link } from 'react-router-dom';

const Herosection = () => {
  return (
    <div className="bg-white text-gray-900 font-poppins">
      <div className="container mx-auto py-0 flex items-center">
        
        {/* Left Side - Menu Links */}
        <div className="flex items-center">
          <div className="flex flex-col space-y-2 text-base leading-6 mt-1">
            <Link to="#women" className="hover:text-gray-600 no-underline text-black">Woman's Fashion</Link>
            <Link to="#men" className="hover:text-gray-600 no-underline text-black">Men's Fashion</Link>
            <Link to="#electronics" className="hover:text-gray-600 no-underline text-black">Electronics</Link>
            <Link to="#home-lifestyle" className="hover:text-gray-600 no-underline text-black">Home & Lifestyle</Link>
            <Link to="#medicine" className="hover:text-gray-600 no-underline text-black">Medicine</Link>
            <Link to="#sports" className="hover:text-gray-600 no-underline text-black">Sports & Outdoor</Link>
            <Link to="#toys" className="hover:text-gray-600 no-underline text-black">Baby's & Toys</Link>
            <Link to="#groceries" className="hover:text-gray-600 no-underline text-black">Groceries & Pets</Link>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block border-l border-gray-400 h-72 mx-8 ml-28"></div>
        </div>

        {/* Right Side - Banner Slider Image */}
        <div className="flex-shrink-0 mt-4">
          <img
            src="bannerimg.png"
            alt="Banner Slider"
            className="w-[1020px] h-[260px] object-contain bg-black"
          />
        </div>
      </div>
    </div>
  );
}

export default Herosection;
