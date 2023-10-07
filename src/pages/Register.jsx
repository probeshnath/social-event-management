import React from 'react'
import SocialLogin from '../components/SocialLogin'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='bg-slate-300 text-center py-10 '>
    <h2 className='pb-5 font-bold text-3xl'>Register</h2>
    <form className='flex flex-col w-1/3 mx-auto gap-3'>
      <input className='py-3 outline-none rounded-md px-3 bg-slate-100' type="text" placeholder='Enter your First Name' name="firstName" id="" />
      <input className='py-3 outline-none rounded-md px-3 bg-slate-100' type="text" placeholder='Enter your Last Name' name="lastName" id="" />
      <input className='py-3 outline-none rounded-md px-3 bg-slate-100' type="email" placeholder='Enter your Email' name="email" id="" />
      <input className='py-3 outline-none rounded-md px-3 bg-slate-100' type="password" placeholder='Enter your Password' name="password" id="" />
      <input className='py-3 outline-none rounded-md px-3 bg-slate-100' type="text" placeholder='Enter Photo URL' name="photo" id="" />
      <button type="submit" className='bg-blue-500 py-2 text-white'>Register</button>
    </form>

    <SocialLogin />

    <p className='pt-5'>Already have an account? <Link to="/login"><span className='font-bold text-blue-700'>Login</span></Link> </p>
    
  </div>
  )
}

export default Register