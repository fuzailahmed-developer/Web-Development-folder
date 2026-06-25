import Navbar from '@/components/navbar/navbar'
import React from 'react'

const MainLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <>
        <Navbar />
        {children}
    </>
  )
}

export default MainLayout