import { onAuthStateChanged } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../../firebase/firebase.config'

const CreateAuthContext = createContext()

export const AuthContextProvider = ({ children }) => {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth,(currentUser) => {
      console.log('Current User:',currentUser)
      setUser(currentUser)
      setLoading(false)
    })

    return () => unsubscribe()
    
  }, [])
  
  return (
    <CreateAuthContext.Provider value={{ loading, user }}>
      {children}
    </CreateAuthContext.Provider>
  )
}

export default CreateAuthContext