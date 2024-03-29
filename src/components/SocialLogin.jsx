import React, { useContext } from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa'
import { AuthContext } from '../Context/AuthProvider';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
  const { googleLogin,facebookLogin,githubLogin } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        navigate("/")
        // console.log(result.user)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleFacebookLogin = () =>{
    facebookLogin()
    .then((result) => {
      navigate("/")
      // console.log(result.user)
    })
    .catch((error) => {
      console.log(error)
    })
  }
  
  const handleGithubLogin = () =>{
    githubLogin()
    .then((result) => {
      navigate("/")
      // console.log(result.user)
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
        <button onClick={handleFacebookLogin} className='border flex items-center py-3 px-5 hover:bg-red-300 rounded-md gap-3'> <FaFacebook /> Facebook</button>
        <button onClick={handleGithubLogin} className='border flex items-center py-3 px-5 hover:bg-red-300 rounded-md gap-3'> <FaGithub /> Github</button>
      </div>
    </div>
  )
}

export default SocialLogin;