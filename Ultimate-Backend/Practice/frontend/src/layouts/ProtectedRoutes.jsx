import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import AuthContext from '../context/AuthContext'
import Loading from '../components/Loading'

const ProtectedRoutes = () => {
  const { loading, isAuthenticated } = useContext(AuthContext)

  if (loading) return <Loading />

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}

export default ProtectedRoutes