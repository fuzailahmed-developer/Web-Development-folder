import { Bell, Rss, Search, TextAlignEnd, Video } from 'lucide-react'
import React from 'react'
import logo from '../../assets/youtube-logo.png'

const Navbar = () => {
    return (
        <header>

            <nav className='flex justify-between items-center max-w-370 mx-auto gap-4 px-4 lg:flex-row flex-col'>
                {/* logo */}
                <div className='flex lg:justify-start justify-between items-center gap-5 py-6 px-2 lg:w-auto w-full'>
                    <TextAlignEnd size={25} />
                    <div className='flex items-center gap-2'>
                        <img src={logo} alt="logo" className='w-10' />
                        <span className='font-semibold text-2xl'>Youtube</span>
                    </div>
                </div>

                {/* search  */}
                <label className='border flex max-w-100 w-full p-2 rounded-4xl text-black/70' htmlFor='input'>
                    <input type="text" className='w-full h-full outline-none pl-2' id='input'/>
                    <Search />
                </label>

                {/* icons */}
                <div className='flex items-center gap-8 *:hover:text-red-600 *:transition *:cursor-pointer '>
                    <Video size={20}/>
                    <Rss size={20}/>
                    <Bell size={20}/>
                    <img src="https://vidtube-sable.vercel.app/assets/jack-uszJkQao.png" alt="" className='w-10 rounded-full overflow-hidden'/>
                </div>
            </nav>

        </header>
    )
}

export default Navbar