import React, { useContext } from 'react'
import { HiClipboardList } from "react-icons/hi";
import Theme from '../utils/Theme'
import { AuthContext } from '../context/AuthContext';
import { CiLogout } from 'react-icons/ci';
import { signOut } from 'firebase/auth';
import { Auth } from '../utils/firebase';
import { toast } from 'react-toastify';

const Header = () => {

    const { user } = useContext(AuthContext)

    const logout = async () => {
        try {
            await signOut(Auth)
            toast.success("Logout Successfully...!")
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <header>
            <div className="container mx-auto flex justify-between px-3 py-6 sm:py-10 items-center">
                <div>
                    <h2 className='items-center  text-2xl m300:text-3xl sm:text-4xl font-semibold flex gap-3'><HiClipboardList size={40} /> TODO LIST</h2>
                </div>
                <div className='flex gap-3'>
                    <Theme />
                    {user &&
                        <button onClick={logout}><CiLogout className='rotate-180 font-black cursor-pointer' size={25} /></button>
                    }
                </div>
            </div>
        </header>
    )
}

export default Header