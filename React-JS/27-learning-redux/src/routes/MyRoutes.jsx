import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import CartPage from '../pages/CartPage'

const MyRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<CartPage />}/>
    </Routes>
  )
}

export default MyRoutes