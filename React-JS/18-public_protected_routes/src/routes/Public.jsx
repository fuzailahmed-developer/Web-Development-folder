import React from 'react'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import { Routes , Route } from 'react-router'

const Public = () => {
    return (
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
    )
}

export default Public