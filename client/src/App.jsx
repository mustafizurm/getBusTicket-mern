import React from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'
import { Outlet } from 'react-router'

const App = () => {
  return (
    <>
      <Header />
       <Outlet />
      <Footer />
    </>
  )
}

export default App