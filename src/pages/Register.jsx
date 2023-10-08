import React, { useContext } from 'react'
import SocialLogin from '../components/SocialLogin'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthProvider'
import { updateProfile } from 'firebase/auth'
import {  toast } from 'react-toastify';

const Register = () => {
  const navigate = useNavigate()

  const {register} = useContext(AuthContext)

  const handleRegister = (e) =>{
    e.preventDefault();
    // console.log("register")
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const conPassword = e.target.conPassword.value;
    const photo = e.target.photo.value;
    const name = firstName + " " + lastName

    if(password !== conPassword){
      return toast.error("Password and Confirm Password are not match!!");
    }

    if(password.length < 6){
      return toast.error("Enter minimun 6 characters password");
    }else if(!/(?=.*[A-Z])/.test(password)){
      return toast.error("Minimun 1 characters will be Capital leter password");
    }else if(!/(?=.*?[#?!@$%^&*-])/.test(password)){
      return toast.error("Minimun 1 characters will be Special Character password");
    }

    // console.log(email, password)

    register(email,password)
    .then((result)=>{
      updateProfile(result.user,{
        displayName:name,
        photoURL: photo || "https://cdn.iconscout.com/icon/free/png-256/free-laptop-user-1-1179329.png?f=webp"
      })
      toast.success("Create Your account Successfully!");
      navigate("/")
    })
    .catch((error) =>{
      toast.error(error.message);
    })

    
  }

  return (
    <div className='my-10 mx-auto max-w-6xl'>
      
    <div className='bg-slate-300 text-center rounded-md py-10 '>
    <h2 className='pb-5 font-bold text-3xl'>Register</h2>
    <form onSubmit={handleRegister} className='flex flex-col w-2/3 mx-auto gap-3'>
      <div className='flex gap-3'>
      <input className='py-3 flex-1 outline-none rounded-md px-3 bg-slate-100' required type="text" placeholder='Enter your First Name' name="firstName"  />
      <input className='py-3 flex-1 outline-none rounded-md px-3 bg-slate-100' type="text" placeholder='Enter your Last Name' name="lastName" />
      </div>
      <input className='py-3 outline-none rounded-md px-3 bg-slate-100' type="email" required placeholder='Enter your Email' name="email" />
      <div className='flex gap-3'> 
      <input className='py-3 flex-1  outline-none rounded-md px-3 bg-slate-100' type="password" required placeholder='Enter your Password' name="password" />
      <input className='py-3  flex-1 outline-none rounded-md px-3 bg-slate-100' type="password" required placeholder='Confirm Password' name="conPassword" />
      </div>
      <input className='py-3 outline-none rounded-md px-3 bg-slate-100' type="text" placeholder='Enter Photo URL' name="photo" />
      <button type="submit" className='bg-blue-500 py-2 text-white hover:bg-black hover:text-white rounded-md'>Register</button>
    </form>

    <SocialLogin />

    <p className='pt-5'>Already have an account? <Link to="/login"><span className='font-bold text-blue-700'>Login</span></Link> </p>
    
  </div>
    </div>
  )
}

export default Register