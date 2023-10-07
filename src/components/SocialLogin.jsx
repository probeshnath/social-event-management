import React, { useContext } from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa'
import { AuthContext } from '../Context/AuthProvider';

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext)

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className='pt-3'>
      <div className='flex items-center'>
        <p className='w-full bg-slate-400 h-1'></p>
        <p className='w-[300px]'>Or SignIn with</p>
        <p className='w-full bg-slate-400 h-1'></p>
      </div>
      <div className="mx-auto flex gap-3 justify-center pt-5 text-center w-1/2">
        <button onClick={handleGoogleLogin} className='border flex items-center py-3 px-5 hover:bg-red-300 rounded-md gap-3'> <FaGoogle /> Google</button>
        <button className='border flex items-center py-3 px-5 hover:bg-red-300 rounded-md gap-3'> <FaFacebook /> Facebook</button>
        <button className='border flex items-center py-3 px-5 hover:bg-red-300 rounded-md gap-3'> <FaGithub /> Github</button>
      </div>
    </div>
  )
}

export default SocialLogin;