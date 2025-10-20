import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <nav>
        <ul style={{marginBottom : "15px",display : "flex", justifyContent : "space-around", listStyle : "none"}}>
            <li>
                <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
                <NavLink to={"/api"}>Api Page</NavLink>
            </li>
            <li>
                <NavLink to={"/user"}>Add User Page</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar