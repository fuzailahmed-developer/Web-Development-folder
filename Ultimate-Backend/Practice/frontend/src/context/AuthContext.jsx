import { createContext, useEffect, useState } from "react";

const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const getCurrentUser = async () => {
    setLoading(true)
    try {
      const API_URL = import.meta.env.VITE_API_URL

      const res = await fetch(API_URL + '/api/me', {
        credentials: 'include'
      })

      if (!res.ok) {
        setUser(null);
        setIsAuthenticated(false);
        return;
      }

      const data = await res.json()
      console.log(data);

      if (data.success) {
        setIsAuthenticated(true)
        setUser(data.user)
      }
      else {
        setIsAuthenticated(false)
        setUser(null)
      }

    }

    catch (error) {
      console.log(error);
      setUser(null);
      setIsAuthenticated(false);
    }

    finally {
      setLoading(false)
    }
  }

  useEffect(() => {

    getCurrentUser()

  }, [])

  return (
    <AuthContext.Provider value={{ user, loading, isAuthenticated, getCurrentUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext