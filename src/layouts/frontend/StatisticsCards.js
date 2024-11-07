import React from 'react';

const StatisticsCards = () => {
  return (
    <div className="flex justify-center space-x-8 p-8">
      {/* Sellers Card */}
      <div className="bg-white shadow-lg rounded-md flex flex-col items-center justify-center w-72 h-48 p-4">
        <div className="text-4xl mb-2 text-gray-700">
          <i className="fas fa-store"></i>
        </div>
        <p className="text-xl font-bold">10.5k</p>
        <p className="text-gray-500 text-sm">Sellers active our site</p>
      </div>

      {/* Monthly Product Sale Card */}
      <div className="bg-red-500 text-white shadow-lg rounded-md flex flex-col items-center justify-center w-72 h-48 p-4">
        <div className="text-4xl mb-2 text-white">
          <i className="fas fa-dollar-sign"></i>
        </div>
        <p className="text-xl font-bold">33k</p>
        <p className="text-white text-sm">Monthly Product Sale</p>
      </div>

      {/* Customers Active Card */}
      <div className="bg-white shadow-lg rounded-md flex flex-col items-center justify-center w-72 h-48 p-4">
        <div className="text-4xl mb-2 text-gray-700">
          <i className="fas fa-gift"></i>
        </div>
        <p className="text-xl font-bold">45.5k</p>
        <p className="text-gray-500 text-sm">Customer active in our site</p>
      </div>

      {/* Annual Gross Sale Card */}
      <div className="bg-white shadow-lg rounded-md flex flex-col items-center justify-center w-72 h-48 p-4">
        <div className="text-4xl mb-2 text-gray-700">
          <i className="fas fa-money-bag"></i>
        </div>
        <p className="text-xl font-bold">25k</p>
        <p className="text-gray-500 text-sm">Annual gross sale in our site</p>
      </div>
    </div>
  );
};

export default StatisticsCards;
