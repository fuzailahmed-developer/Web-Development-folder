import React from 'react'
import { Link } from 'react-router'
const Navbar = () => {
  return (
    <>
    <nav>
        <ul>
            <li><Link to={"/"}>Form Submitting</Link></li>
            <li><Link to={"/transition"}>Transition</Link></li>
            <li><Link to={"/user"}>User</Link></li>
        </ul>
        
    </nav>
    </>
  )
}

export default Navbar