import React from 'react'

// const products = [
//   {
//     id: 1,
//     discount: '-40%',
//     image: 'path/to/controller-image.png',
//     name: 'HAVIT HV-G92 Gamepad',
//     price: 120,
//     originalPrice: 160,
//     rating: 4.5,
//     reviews: 88,
//   },
//   {
//     id: 2,
//     discount: '-85%',
//     image: 'path/to/keyboard-image.png',
//     name: 'AK-900 Wired Keyboard',
//     price: 60,
//     originalPrice: 960,
//     rating: 4.5,
//     reviews: 75,
//   },
//   // Add more products as needed
// ];

const Flashsales = () => {
  return (
    <>
      <div className="bg-white text-gray-900 font-poppins mt-5">
        <div className="container mx-auto flex ">
          <img src="Rectangle 17.png" alt="Wishlist Icon" className="w-3 h-6 mr-3" />
          <div className="text-sm font-poppins font-semibold text-bold text-red-600">Today's</div>
        </div>
        <div className="container mx-auto flex ">
          <div className="text-2xl font-poppins font-semibold text-bold mt-2">Flash Sales</div>
        </div>

      </div>
    </>
  )
}

export default Flashsales