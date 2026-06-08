import React from 'react'
import { Navigate, Outlet } from 'react-router'

const ProtectedRoutes = () => {
  const isAuthenticated = false

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}

export default ProtectedRoutes