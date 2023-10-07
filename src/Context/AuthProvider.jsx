import { GoogleAuthProvider,createUserWithEmailAndPassword,signInWithPopup,FacebookAuthProvider, GithubAuthProvider } from "firebase/auth";
import React, { createContext } from 'react'
import auth from '../firebase.config';

// social provider
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

  // google login or signup
  const googleLogin = () =>{
    return signInWithPopup(auth,googleProvider);
  }

  // facebook login
  const facebookLogin = () =>{
    return signInWithPopup(auth, facebookProvider);
  }

  // github login
  const githubLogin = () =>{
    return signInWithPopup(auth, githubProvider);
  }

  // create user with email and password
  const register = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email,password)
  }

  // Login with email, password

  const authInfo = {
    googleLogin,
    register,
    facebookLogin,
    githubLogin
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider