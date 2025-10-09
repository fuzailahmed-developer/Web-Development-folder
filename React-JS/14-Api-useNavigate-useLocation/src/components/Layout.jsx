import React from 'react'
import { useLocation } from 'react-router'
import NavBar from './NavBar'

const Layout = () => {
    const { pathname } = useLocation()
    const showNav = pathname == "/" || pathname == "/about" || pathname.startsWith("/user/")
    return (
        <>
            {showNav && <NavBar />}
        </>
    )
}

export default Layout