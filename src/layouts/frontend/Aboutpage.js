import React from 'react'

const Aboutpage = () => {
  return (
    <>
      <div className="container flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-white">
        {/* Left Section - Text */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-poppins">Our Story</h2>
          <p className="text-gray-700 text-lg leading-relaxed font-poppins">
            Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh.
            Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands
            and serves 3 million customers across the region.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed font-poppins">
            Exclusive has more than 1 Million products to offer, growing at a very fast pace. Exclusive offers a diverse assortment
            in categories ranging from consumer goods and electronics to fashion and lifestyle products.
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8 flex justify-center">
          <img src='aboutimage.png' alt="About Exclusive" className="rounded-lg object-cover w-full h-full md:w-auto md:h-auto" />
        </div>
      </div>
    </>
  )
}

export default Aboutpage