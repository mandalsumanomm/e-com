//import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Topbar = () => {


  return (
    <div className="bg-gray-900 text-white py-2">
      <div className="container mx-auto flex justify-center items-center relative">
        <div className="text-sm">
          <span>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <Link to="/shop" className="text-white font-medium ml-2">Shop Now</Link>
          </span>
        </div>


      </div>
    </div>
  )
}

export default Topbar
