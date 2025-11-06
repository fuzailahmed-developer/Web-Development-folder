import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <header className='py-3 bg-black px-10'>
            <nav className='max-w-[1250px] mx-auto flex justify-between items-center'>
                <h1 className='font-semibold text-2xl'>LOGO</h1>
                <ul className='flex gap-x-4'>
                    <li><Link href={"/login"}>Login</Link></li>
                    <li><Link href={"/signup"}>Signup</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar