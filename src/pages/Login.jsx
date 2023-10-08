import React, { useContext, useState } from 'react'
import SocialLogin from '../components/SocialLogin'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthProvider'
// import Swal from 'sweetalert2/dist/sweetalert2.js'
// import 'sweetalert2/src/sweetalert2.scss'
import {  toast } from 'react-toastify';

const Login = () => {
  const {login,user} = useContext(AuthContext)
  const [error,setError]=useState("")
  const navigate = useNavigate()

// console.log(user)

  const handleLogin = (e) =>{
    e.preventDefault();
    
    const email = e.target.email.value;
    const password = e.target.password.value;

   

    login(email,password)
    .then((result) =>{
      toast.success("Login Successfully!");
      navigate("/")
    })
    .catch((error)=>{
      toast.error(error.message);
      // return setError(error)
       console.log(error)
    })
  }
  return (
    <div className='mt-10'>
      <div className='bg-slate-300 max-w-6xl mx-auto rounded-xl  text-center py-10 '>
      <h2 className='pb-5 font-bold text-3xl text-green-600'>Login</h2>
      <form onSubmit={handleLogin} className='flex flex-col w-1/3 mx-auto gap-3'>
        <input className='py-3 outline-none rounded-md px-3 bg-slate-100' type="email" required placeholder='Enter your Email' name="email"  />
        <input className='py-3 outline-none rounded-md px-3 bg-slate-100' type="password" required placeholder='Enter your Password' name="password"  />
        <p className='text-right text-gray-700 text-sm -pt-2'>Forget Password</p>

        { 
          error &&  <p className='text-red-600 py-2'>{error}</p>
        }
        <button type="submit" className='bg-blue-500 py-2 text-white hover:bg-black hover:text-white rounded-md'>Login</button>
      </form>

      <SocialLogin />

      <p className='pt-5'>Don't have an account? <Link to="/register"><span className='font-bold text-blue-700'>Register</span></Link> </p>
      
    </div>
    </div>
  )
}

export default Login;