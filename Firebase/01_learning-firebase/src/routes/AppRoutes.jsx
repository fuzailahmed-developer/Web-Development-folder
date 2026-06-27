import React from 'react'
import { Route, Routes } from 'react-router'
import HomeScreen from '../pages/home'
import UsersScreen from '../pages/users/users'
import UserScreen from '../pages/users/user/user'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomeScreen />} />
      <Route path='/users' element={<UsersScreen />} />
      <Route path='/users/:id' element={<UserScreen />} />
    </Routes>
  )
}

export default AppRoutes