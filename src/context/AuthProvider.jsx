/* eslint-disable react-refresh/only-export-components */
import{ createContext, useState, useEffect, useContext } from 'react'
import {auth} from '../Firebase'
import {  onAuthStateChanged } from 'firebase/auth'


export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null) // null represents the initial loading state
  const [loading, setLoading] = useState(false)


  useEffect(()=>{
  onAuthStateChanged(auth, user => {
  if (user) {
   
   setIsAuthenticated(true)
    // ...
  } else {
    // User is signed out
    // ...
  }
})

    },[])

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, loading, setLoading }}
    >
      {children}
    </AuthContext.Provider>
  )
}

const useAuthContext = () => useContext(AuthContext)

export {AuthProvider,useAuthContext}