import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const MainRoute = () => {
  return (
    <div className='max-w-6xl mx-auto'>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default MainRoute