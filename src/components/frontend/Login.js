import React from 'react'
import Topbar from '../../layouts/frontend/Topbar'
import Navigationbar from '../../layouts/frontend/Navigationbar'
import LoginForm from '../../layouts/frontend/LoginForm'
import Footer from '../../layouts/frontend/Footer'

const Login = () => {
  return (
    <>
      <Topbar />
      <Navigationbar />
      <LoginForm />
      <Footer />
    </>
  )
}

export default Login