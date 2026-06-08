import React from 'react'
import { Route, Routes } from 'react-router'
import PublicRoutes from '../layouts/PublicRoutes'
import Home from '../pages/Home'
import ProtectedRoutes from '../layouts/ProtectedRoutes'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'

const AppRoutes = () => {
  return (
    <Routes>
      {/* Protected Routes */}
      <Route element={<ProtectedRoutes />}>
        <Route path='/' element={<Home />} />
      </Route>

      {/* Public Routes */}
      <Route element={<PublicRoutes />}>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Route>

      {/* Not Found */}
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes