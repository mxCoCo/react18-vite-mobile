import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import './index.less'

const Layout = () => {
  return (
    <div className="layout-container">
      <Header />
      <div className="main-container">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
