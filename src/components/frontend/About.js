import React from 'react'
import Topbar from '../../layouts/frontend/Topbar'
import Navigationbar from '../../layouts/frontend/Navigationbar'
import Aboutpage from '../../layouts/frontend/Aboutpage'
import StatisticsCards from '../../layouts/frontend/StatisticsCards'
import Teammember from '../../layouts/frontend/Teammember'
import FeaturesSection from '../../layouts/frontend/FeaturesSectionl'
import Footer from '../../layouts/frontend/Footer'

const About = () => {
  return (
    <>
      <Topbar />
      <Navigationbar />
      <Aboutpage />
      <StatisticsCards />
      <Teammember />
      <FeaturesSection />
      <Footer />
    </>
  )
}

export default About