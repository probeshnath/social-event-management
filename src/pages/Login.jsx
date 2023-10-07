import React, { useContext } from 'react'
import SocialLogin from '../components/SocialLogin'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Context/AuthProvider'

const Login = () => {
  const {login,user} = useContext(AuthContext)

console.log(user)

  const handleLogin = (e) =>{
    e.preventDefault();
    
    const email = e.target.email.value;
    const password = e.target.password.value;
    login(email,password)
    .then((result) =>{
      console.log(result.user)
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  return (
    <div className='bg-slate-300 text-center py-10 '>
      <h2 className='pb-5 font-bold text-3xl'>Login</h2>
      <form onSubmit={handleLogin} className='flex flex-col w-1/3 mx-auto gap-3'>
        <input className='py-3 outline-none rounded-md px-3 bg-slate-100' type="email" placeholder='Enter your Email' name="email"  />
        <input className='py-3 outline-none rounded-md px-3 bg-slate-100' type="password" placeholder='Enter your Password' name="password"  />
        <p className='text-right text-gray-700 text-sm -pt-2'>Forget Password</p>
        <button type="submit" className='bg-blue-500 py-2 text-white'>Login</button>
      </form>

      <SocialLogin />

      <p className='pt-5'>Don't have an account? <Link to="/register"><span className='font-bold text-blue-700'>Register</span></Link> </p>
      
    </div>
  )
}

export default Login;