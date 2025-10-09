import React from 'react'
import MyPages from './router/router'
import { Link, useLocation } from 'react-router'
import { myRoutes } from './utils/myroutes'
import Navbar from './components/Navbar/Navbar'

const App = () => {

  const { pathname } = useLocation()
  return (
    <>
      {
        myRoutes.includes(pathname) ? <Navbar /> : pathname.startsWith("/user") ? <Navbar /> : null
      }
      <MyPages />
    </>
  )
}

export default App