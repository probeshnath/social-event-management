import { GoogleAuthProvider,createUserWithEmailAndPassword,signInWithPopup } from "firebase/auth";
import React, { createContext } from 'react'
import auth from '../firebase.config';

// social provider
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

  // google login or signup
  const googleLogin = () =>{
    return signInWithPopup(auth,googleProvider)
  }

  // create user with email and password
  const register = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email,password)
  }

  const authInfo = {
    googleLogin,
    register
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider