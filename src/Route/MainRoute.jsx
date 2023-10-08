import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import { AuthContext } from '../Context/AuthProvider'
import Loading from '../components/Loading'

const MainRoute = () => {

  const {loading}= useContext(AuthContext)

  if(loading){
    return <Loading />
  }

  return (
    <div className=''>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default MainRoute