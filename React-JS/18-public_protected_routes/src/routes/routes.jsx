import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router'
import Protected from './protected'
import Public from "./Public"
import { protectedRoutesList, publicRoutesList } from "../utils/RoutesList"

const MyRoutes = () => {
    const { pathname } = useLocation()
    const navigate = useNavigate()
    const [authStatus, setAuthStatus] = useState(false)

    useEffect(() => {
        if (!authStatus && protectedRoutesList.includes(pathname)) {
            navigate(publicRoutesList[0])
        }
    }, [authStatus])

    return (

        <>
            {
                (authStatus)
                    ?
                    (<Protected />)
                    :
                    (<Public />)
            }

        </>

    )
}

export default MyRoutes