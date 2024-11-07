import React from 'react'
import Topbar from '../../layouts/frontend/Topbar'
import Navigationbar from '../../layouts/frontend/Navigationbar'
import Wishlistgalary from '../../layouts/frontend/Wishlistgalary'
import ProductGallery from '../../layouts/frontend/Productgallery'

const Wishlist = () => {
  return (
    <>
      <Topbar />
      <Navigationbar />
      <Wishlistgalary />
      <ProductGallery
        subtitle="Just For You"
        imageSrc="Rectangle 17.png"
      />
    </>
  )
}

export default Wishlist