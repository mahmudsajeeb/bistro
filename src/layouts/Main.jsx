import React from 'react'
import Home from '../pages/Home/Home'
import { Outlet } from 'react-router-dom'
import Header from '../shared/Header'
import Footer from '../shared/Footer'

export default function Main() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    
    </div>
  )
}
