import React, { useContext } from 'react'
import AuthContext from './AuthContext'
import { Navigate } from 'react-router-dom'

const PrivateRoutes = ({children}) => {
    const {loading,user} = useContext(AuthContext)
    if (loading) return <div>Loading...</div>
    if (user) return children
    return <Navigate to={'/login'} />
}

export default PrivateRoutes