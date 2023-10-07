import { GoogleAuthProvider,createUserWithEmailAndPassword,signInWithPopup,FacebookAuthProvider, GithubAuthProvider, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react'
import auth from '../firebase.config';

// social provider
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading]= useState(true)

  // google login or signup
  const googleLogin = () =>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider);
  }

  // facebook login
  const facebookLogin = () =>{
    setLoading(true)
    return signInWithPopup(auth, facebookProvider);
  }

  // github login
  const githubLogin = () =>{
    setLoading(true)
    return signInWithPopup(auth, githubProvider);
  }

  // create user with email and password
  const register = (email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email,password)
  }

  // Login with email, password
  const login = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password);
  }

  // logout
  const logout = () =>{
    setLoading(true)
    return signOut(auth)
  }

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser);
      setLoading(false)
    })

    return ()=>{
      unSubscribe()
    }
  },[])

  const authInfo = {
    googleLogin,
    register,
    facebookLogin,
    githubLogin,
    login,user,
    logout,
    loading
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider