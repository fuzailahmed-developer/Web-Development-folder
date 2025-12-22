import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import PrivateRoutes from '../utils/PrivateRoutes'
import PublicRoutes from '../utils/PublicRoutes'

const MyRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<PrivateRoutes><Home /></PrivateRoutes>}/>
        <Route path='/signup' element={<PublicRoutes><Signup /></PublicRoutes>}/>
        <Route path='/login' element={<PublicRoutes><Login /></PublicRoutes>}/>
        <Route path='*' element={<NotFound />}/>
    </Routes>
  )
}

export default MyRoutes