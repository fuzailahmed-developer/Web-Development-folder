import React, { useContext } from 'react'
import AuthContext from './AuthContext'
import { Navigate } from 'react-router-dom'

const PublicRoutes = ({children}) => {
    const {loading,user} = useContext(AuthContext)
    if (loading) return <div>Loading...</div>
    if (!user) return children
    return <Navigate to={'/'} />
}

export default PublicRoutes