import { createContext, useContext, useEffect, useState } from 'react'
import React from 'react'
import {auth} from '../firebase/firebase'
import { onAuthStateChanged } from 'firebase/auth'

const AuthContext = createContext(null)

//custom hook 
export const useAuth = () => {
  const user = useContext(AuthContext)
  return user
}


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      await new Promise((resolve) => {
        onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser)
          resolve()
        })
      })
      setLoading(false)
    }
    fetchData()
  }, [user])


  return (
    <AuthContext.Provider value={{ user,loading }}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
