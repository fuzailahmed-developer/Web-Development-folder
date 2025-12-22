import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Video from '../pages/Video'

const MyRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/video' element={<Video />}/>
    </Routes>
  )
}

export default MyRoutes