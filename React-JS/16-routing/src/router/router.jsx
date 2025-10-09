import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Contact from '../pages/Contact/Contact'
import NotFound from '../pages/NotFound/NotFound'
import Collage from '../components/Navbar/Collage/Collage'
import Students from '../components/Navbar/Collage/CollageDetails/Students'
import Department from '../components/Navbar/Collage/CollageDetails/Department'
import Batch from '../components/Navbar/Collage/CollageDetails/Batch'
import User from '../components/User'
import ViewUser from '../components/ViewUser'
import Login from '../components/Login'

const MyPages = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/user' element={<User />}/>
        <Route path='/user/:id' element={<ViewUser />}/>
        <Route path='/login' element={<Login />} />

        <Route path='/collage' element={<Collage />}>
            <Route  path='students' element={<Students />}/>
            <Route path='department' element={<Department />}/>
            <Route path='batch' element={<Batch />}/>
        </Route>

        <Route path='*' element={<NotFound />}/>
    </Routes>
  )
}

export default MyPages