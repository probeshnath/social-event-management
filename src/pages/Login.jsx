import React from 'react'
import SocialLogin from '../components/SocialLogin'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='bg-slate-300 text-center py-10 '>
      <h2 className='pb-5 font-bold text-3xl'>Login</h2>
      <form className='flex flex-col w-1/3 mx-auto gap-3'>
        <input className='py-3 outline-none rounded-md px-3 bg-slate-100' type="email" placeholder='Enter your Email' name="email" id="" />
        <input className='py-3 outline-none rounded-md px-3 bg-slate-100' type="password" placeholder='Enter your Password' name="password" id="" />
        <p className='text-right text-gray-700 text-sm -pt-2'>Forget Password</p>
        <button type="submit" className='bg-blue-500 py-2 text-white'>Login</button>
      </form>

      <SocialLogin />

      <p className='pt-5'>Don't have an account? <Link to="/register"><span className='font-bold text-blue-700'>Register</span></Link> </p>
      
    </div>
  )
}

export default Login;