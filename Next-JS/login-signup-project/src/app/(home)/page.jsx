"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Home = () => {

  const router = useRouter()

  const handleLogout = () => {
    localStorage.setItem('userLogin',"")
    router.push("/login")
  }

  return (
    <div>
      <h1 className='font-bold text-5xl absolute top-[40%] left-1/2 -translate-1/2'>User DashBoard...!</h1>
      <button onClick={handleLogout} className='bg-white rounded px-5 py-1.5 text-black absolute top-1/2 left-1/2 -translate-1/2'>Logout</button>
    </div>
  )
}

export default Home