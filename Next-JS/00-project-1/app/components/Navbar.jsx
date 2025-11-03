"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {

  const pathname = usePathname()

  return (
    <header className={`bg-zinc-900 py-3`}>
        <nav className='flex items-center justify-between py-3 max-w-[1200px] mx-auto'>
        <h3>
            🌍 Travel Guide
        </h3>
            <ul className='flex gap-x-10'>
                
                <Link href={"/"} className={`${pathname == "/" ? "text-blue-400" : "text-white"} cursor-pointer`}><li>Home</li></Link>
                <Link href={"/destination"} className={`${pathname == "/destination" ? "text-blue-400" : "text-white"} cursor-pointer`}><li>Destination</li></Link>
                <Link href={"/contact"} className={`${pathname == "/contact" ? "text-blue-400" : "text-white"} cursor-pointer`}><li>Contact</li></Link>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar