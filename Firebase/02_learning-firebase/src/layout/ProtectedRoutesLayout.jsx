import React, { useContext } from 'react'
import CreateAuthContext from '../context/auth/auth.context'
import { Navigate, Outlet } from 'react-router'

const ProtectedRoutesLayout = () => {

  const { user, loading } = useContext(CreateAuthContext)

  if (loading) {
    return <p>Loading...</p>
  }

  return user ? <Outlet /> : <Navigate to={'/login'} replace/>
  
}

export default ProtectedRoutesLayout