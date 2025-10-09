import React, { useEffect, useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import { IoBagHandleSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";
import { PiHamburger } from "react-icons/pi";

const Navbar = () => {

    const [displayMenu, setDisplayMenu] = useState(false)
    const [isScroll, setIsScroll] = useState(false)
    const handleMenu = () => {
        setDisplayMenu(!displayMenu)
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 10)
        }
        window.addEventListener("scroll",handleScroll)

        return () => {
            window.removeEventListener("scroll",handleScroll)
        }
    }, [])

    return (
        <header className={`fixed top-0 left-0 right-0 bg-white ${isScroll ? "shadow-lg" : "shadow-none"} transition duration-200`}>
            <nav className='flex justify-between max-w-[1400px] mx-auto lg:h-[14vh] h-[12vh] px-10 items-center'>
                {/* logo */}
                <div>
                    <a href="#" className='text-2xl font-semibold'>Gr<span className='uppercase text-orange-500'>o</span>cery</a>
                </div>
                {/* menu links */}
                <ul className='lg:flex items-center gap-x-15 [&>*]:font-semibold [&>*]:tracking-wider hidden'>
                    <li><a href="#" className='text-orange-500 hover:text-orange-600 transition duration-500'>Home</a></li>
                    <li><a href="#" className='text-zinc-800 hover:text-orange-500 transition duration-500'>About</a></li>
                    <li><a href="#" className='text-zinc-800 hover:text-orange-500 transition duration-500'>Process</a></li>
                    <li><a href="#" className='text-zinc-800 hover:text-orange-500 transition duration-500'>Contact Us</a></li>
                </ul>
                {/* nav searching action */}
                <div className='flex gap-10'>

                    <div className='lg:flex items-center border-2 border-orange-500 rounded-full p-1 hidden'>
                        <input type="text" placeholder='Searching...' autoComplete='off'
                            className='h-[5vh] px-3 outline-0 text-sm'
                        />
                        <button className='w-10 h-10 bg-linear-to-b from-orange-400 to-orange-600 text-white flex justify-center items-center rounded-full'>
                            <FaSearch />
                        </button>
                    </div>

                    <div className='flex items-center gap-x-5'>
                        <a href="#" className='text-zinc-800 text-2xl'>
                            <FaHeart />
                        </a>
                        <a href="#" className='text-zinc-800 text-2xl'>
                            <IoBagHandleSharp />
                        </a>
                        <a href="#" className='text-zinc-800 text-2xl inline-block lg:hidden' onClick={handleMenu}>
                            {
                                displayMenu ? <PiHamburger /> : <FaHamburger />
                            }
                        </a>
                    </div>
                </div>
                <ul className={`flex flex-col items-center gap-x-15 [&>*]:font-semibold [&>*]:tracking-wider lg:hidden absolute
                    bg-white/50 gap-y-12 p-10 top-30 ${displayMenu ? "left-1/2" : "-left-1/2"} transform -translate-x-1/2 backdrop-blur-xl border border-orange-300 rounded-2xl
                    transition-all duration-500
                `}>
                    <li><a href="#" className='text-orange-500 hover:text-orange-600 transition duration-500'>Home</a></li>
                    <li><a href="#" className='text-zinc-800 hover:text-orange-500 transition duration-500'>About</a></li>
                    <li><a href="#" className='text-zinc-800 hover:text-orange-500 transition duration-500'>Process</a></li>
                    <li><a href="#" className='text-zinc-800 hover:text-orange-500 transition duration-500'>Contact Us</a></li>
                    <li className='flex items-center border-2 border-orange-500 rounded-full p-1 lg:hidden'>
                        <input type="text" placeholder='Searching...' autoComplete='off'
                            className='h-[5vh] px-3 outline-0 text-sm'
                        />
                        <button className='w-10 h-10 bg-linear-to-b from-orange-400 to-orange-600 text-white flex justify-center items-center rounded-full'>
                            <FaSearch />
                        </button>
                    </li>
                </ul>
                {/* mobile menu */}
            </nav>
        </header>
    )
}

export default Navbar