import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <header className='bg-zinc-600 text-white py-3 px-5'>
            <nav className='flex justify-between max-w-[1200px] items-center mx-auto'>
                <h1 className='text-3xl font-bold cursor-pointer'><Link href={'/'}>Logo</Link></h1>
                <ul className='flex gap-x-5'>
                    <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={'/about'}>About</Link></li>
                    <li><Link href={'/contact'}>Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar