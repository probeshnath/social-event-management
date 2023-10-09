import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import { AuthContext } from '../Context/AuthProvider'
import Loading from '../components/Loading'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainRoute = () => {

  const {loading}= useContext(AuthContext)

  if(loading){
    return <Loading />
  }

  return (
    <div className=''>
        <Navbar />
        <Outlet />
        <ToastContainer />
    </div>
  )
}

export default MainRoute