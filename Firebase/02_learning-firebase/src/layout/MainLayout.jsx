import React from 'react'
import Navbar from '../components/navbar/navbar'
import { Outlet, useLocation } from 'react-router'
import { notShowNavbarRoutes } from '../data/notShowNavbarRoutes'
import { auth } from '../firebase/firebase.config'

const MainLayout = () => {

  const { pathname } = useLocation()
  const user = auth.currentUser

  return (
    <>
      {user && !notShowNavbarRoutes.includes(pathname) && <Navbar />}
      <Outlet />
    </>
  )
}

export default MainLayout