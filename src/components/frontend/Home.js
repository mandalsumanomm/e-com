import React from 'react'
import Topbar from '../../layouts/frontend/Topbar'
import Navigationbar from '../../layouts/frontend/Navigationbar'
import Herosection from '../../layouts/frontend/Herosection'
import ProductGallery from '../../layouts/frontend/Productgallery'
import Footer from '../../layouts/frontend/Footer'


const Home = () => {
  return (
    <>
      <Topbar />
      <Navigationbar />
      <Herosection />
      <ProductGallery
        title="Flash Sales"
        subtitle="Today's"
        imageSrc="Rectangle 17.png"
      />
      <ProductGallery
        title="Browse By Category"
        subtitle="Category"
        imageSrc="Rectangle 17.png"
      />
      <ProductGallery
        title="Best Selling Products"
        subtitle="This Month"
        imageSrc="Rectangle 17.png"
      />
      <ProductGallery
        title="Explore Our Products"
        subtitle="Our Products"
        imageSrc="Rectangle 17.png"
      />
      <ProductGallery
        title="New Arrival"
        subtitle="Featured"
        imageSrc="Rectangle 17.png"
      />
      <Footer />
    </>
  )
}

export default Home