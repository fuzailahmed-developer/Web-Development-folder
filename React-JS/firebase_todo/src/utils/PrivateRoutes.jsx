import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'
import Loader from '../components/Loader'
const PrivateRoutes = ({ children }) => {

    const { loading, user } = useContext(AuthContext)

    if (loading) return <div className='h-screen flex justify-center items-center'><Loader /></div>
    if (user) return children
    return <Navigate to={'/login'} />
}

export default PrivateRoutes