import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import CreateAuthContext from '../context/auth/auth.context'

const PublicRoutesLayout = () => {

  const { user, loading } = useContext(CreateAuthContext)

  if (loading) {
    return <p>Loading...</p>
  }

  return !user ? <Outlet /> : <Navigate to={'/'} replace />

}

export default PublicRoutesLayout