import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
    return (
        <nav className='bg-purple-400 flex justify-between items-center px-20'>
            <h2 className='text-white font-bold text-2xl'><Link to={"/"}>LOGO</Link></h2>
            <ul className='[&>*]:text-white flex gap-x-10 [&>*]:px-3 [&>*]:py-4 [&>*]:font-semibold [&>*]:hover:text-zinc-600 [&>*]:transition [&>*]:duration-300'>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/contact"}>Contact</Link></li>
                <li><Link to={"/user"}>User</Link></li>
                <li><Link to={"/collage"}>Collage</Link></li>
                <li><Link to={"/login"}>Login</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar