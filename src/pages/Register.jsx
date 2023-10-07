import React, { useContext } from 'react'
import SocialLogin from '../components/SocialLogin'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Context/AuthProvider'

const Register = () => {

  const {register} = useContext(AuthContext)

  const handleRegister = (e) =>{
    e.preventDefault();
    // console.log("register")
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;
    const name = firstName + " " + lastName

    // console.log(email, password)

    register(email,password)
    .then((result)=>{
      console.log(result.user)
    })
    .catch((error) =>{
      console.log(error)
    })

    
  }

  return (
    <div className='bg-slate-300 text-center py-10 '>
    <h2 className='pb-5 font-bold text-3xl'>Register</h2>
    <form onSubmit={handleRegister} className='flex flex-col w-1/3 mx-auto gap-3'>
      <input className='py-3 outline-none rounded-md px-3 bg-slate-100' type="text" placeholder='Enter your First Name' name="firstName"  />
      <input className='py-3 outline-none rounded-md px-3 bg-slate-100' type="text" placeholder='Enter your Last Name' name="lastName" />
      <input className='py-3 outline-none rounded-md px-3 bg-slate-100' type="email" placeholder='Enter your Email' name="email" />
      <input className='py-3 outline-none rounded-md px-3 bg-slate-100' type="password" placeholder='Enter your Password' name="password" />
      <input className='py-3 outline-none rounded-md px-3 bg-slate-100' type="text" placeholder='Enter Photo URL' name="photo" />
      <button type="submit" className='bg-blue-500 py-2 text-white'>Register</button>
    </form>

    <SocialLogin />

    <p className='pt-5'>Already have an account? <Link to="/login"><span className='font-bold text-blue-700'>Login</span></Link> </p>
    
  </div>
  )
}

export default Register