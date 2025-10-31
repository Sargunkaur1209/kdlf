import React from 'react'
import Header from '../COMPONENTS/Header';
import Footer from '../COMPONENTS/Footer';
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="app-root">
      <Header />
      <main className="page-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
