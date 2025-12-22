import React, { useState } from 'react'
import Cart from './cart'
import { BiCross, BiMenu } from 'react-icons/bi'
import { useNavigate } from 'react-router'

const Header = () => {

    const [isOpen,setIsOpen] = useState(false)
    const navigate = useNavigate()

    return (
        <header className='bg-blue-700 text-white py-4 px-3 flex justify-around items-center fixed top-0 left-0 w-full z-10'>
            <h1 className='min-[540px]:text-5xl text-3xl font-bold cursor-pointer' onClick={() => navigate("/")}>
                PLAZA
            </h1>
            {/* desktop Menu */}
            <ul className='flex items-center gap-x-10 max-[540px]:hidden'>
                <li className='hover:text-white/80 transition-colors'>Home</li>
                <li className='hover:text-white/80 transition-colors'>About</li>
                <li className='hover:text-white/80 transition-colors'>Contact</li>
            </ul>
            <div className='max-[540px]:hidden'>
                <Cart />
            </div>
            {/* mobile menu */}
            <BiMenu size={25} className='min-[540px]:hidden' onClick={() => setIsOpen(!isOpen)}/>
            <div className={`h-screen w-full bg-blue-600 text-white z-10 absolute top-0 left-0 transition-all ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                <ul className='flex items-center flex-col gap-y-10 text-white h-full justify-center'>
                    <li className='hover:text-white/80 transition-colors cursor-pointer'>Home</li>
                    <li className='hover:text-white/80 transition-colors cursor-pointer'>About</li>
                    <li className='hover:text-white/80 transition-colors cursor-pointer'>Contact</li>
                </ul>
                <div className='absolute top-8 left-8'>
                    <Cart />
                </div>
                <div className='absolute top-8 right-8' onClick={() => setIsOpen(!isOpen)}>
                    <BiCross size={30} className={`${isOpen && 'rotate-45 transition duration-1000'}`}/>
                </div>
            </div>
        </header>
    )
}

export default Header