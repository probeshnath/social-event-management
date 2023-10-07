import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import React, { createContext } from 'react'
import auth from '../firebase.config';

// social provider
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

  const googleLogin = () =>{
    return signInWithPopup(auth,googleProvider)
  }

  const authInfo = {
    googleLogin
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider