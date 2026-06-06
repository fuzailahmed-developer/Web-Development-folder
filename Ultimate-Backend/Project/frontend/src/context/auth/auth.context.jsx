import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const getCurrentUser = async () => {
    setLoading(true)
    try {

      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/getuserdata`, { credentials: 'include' })

      const data = await res.json()

      console.log(data);

      if (data.success) {
        setUser(data.data)
        setIsAuthenticated(true)
      }
      else {
        setUser(null)
        setIsAuthenticated(false)
      }

    }

    catch (error) {
      console.log(error.message);
      setUser(null)
      setIsAuthenticated(false)
    }

    finally {
      setLoading(false)
    }
  }

  useEffect(() => {

    getCurrentUser()

  }, [])

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated,
      loading,
      setLoading,
      getCurrentUser
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext


