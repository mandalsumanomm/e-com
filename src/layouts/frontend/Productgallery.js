import React from 'react';

const ProductGallery = ({ title, subtitle, imageSrc }) => {
  return (
    <div className="bg-white text-gray-900 font-poppins mt-5">
      <div className="container mx-auto flex items-center">
        <img src={imageSrc} alt="Icon" className="w-3 h-6 mr-3" />
        <div className="text-sm font-semibold text-red-600">{subtitle}</div>
      </div>
      <div className="container mx-auto flex">
        <div className="text-2xl font-semibold mt-2">{title}</div>
      </div>
    </div>
  );
};

export default ProductGallery;
