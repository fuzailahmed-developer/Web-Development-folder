'use client'

import axios from 'axios'
import { useSession } from 'next-auth/react'
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

type UserType = {
  id: string
  name: string
  email: string
  image?: string
}

type UserContextType = {
  user: UserType | null
  setUser: React.Dispatch<
    React.SetStateAction<UserType | null>
  >
  status: string
}

const UserContext = createContext<UserContextType | null>(null)

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [user, setUser] = useState<UserType | null>(null)
  const session = useSession();

  useEffect(() => {
    const getUser = async () => {
      try {
        const result = await axios.get('/api/user')

        setUser(result.data.data)
      } catch (error) {
        console.log(error)
      }
    }

    getUser()
  }, [session])

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        status: session.status
      }
      }
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error(
      'useUser must be used within UserContextProvider'
    )
  }

  return context
}

export default UserContext