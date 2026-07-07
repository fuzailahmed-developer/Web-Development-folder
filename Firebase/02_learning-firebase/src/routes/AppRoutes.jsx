import React from 'react'
import { Route, Routes } from 'react-router'
import HomeScreen from '../pages/home/home'
import UsersScreen from '../pages/users/users'
import UserScreen from '../pages/users/user/user'
import SignupScreen from '../pages/signup/signup'
import LoginScreen from '../pages/login/login'
import MainLayout from '../layout/MainLayout'
import PublicRoutesLayout from '../layout/PublicRoutesLayout'
import ProtectedRoutesLayout from '../layout/ProtectedRoutesLayout'

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route element={<ProtectedRoutesLayout />}>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/users' element={<UsersScreen />} />
          <Route path='/users/:id' element={<UserScreen />} />
        </Route>
        <Route element={<PublicRoutesLayout />}>
          <Route path='/signup' element={<SignupScreen />} />
          <Route path='/login' element={<LoginScreen />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default AppRoutes