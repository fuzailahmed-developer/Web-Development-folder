import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='min-h-screen flex justify-center items-center px-5 bg-linear-to-br from-purple-600 to-purple-300'>
      {/* container */}
      <div className='max-w-[1000px] w-full h-[85vh] mx-auto bg-white rounded-2xl p-2 flex *:grow *:basis-[50%] gap-x-2'>
        {/* left side */}
        <div className='h-full w-full flex items-center justify-center'>

          <div className='lg:w-[80%] w-[90%] flex flex-col gap-5'>
            <div className='bg-green-200 text-green-600 w-full rounded-lg py-2 text-center '>
              Signup in Successfully!
            </div>
            <div className='flex items-center gap-3'>
              <img src="/images/Logo.svg" alt="" width={30} height={40} />
              <span className='text-sm font-bold'>LOGO</span>
            </div>
            <div>
              <h1 className='text-2xl font-bold tracking-wide'>
                Welcome Back!👋
              </h1>
              <p className='text-black/40'>
                Log in to access your personalized
                dashboard
              </p>
            </div>
            <div className='space-y-3.5'>
              <label htmlFor='name' className='text-black/40'>
                    Name <br />
                    <input type="text" placeholder='your@gmail.com' className='w-full border-black/5 text-black/60 text-sm border outline-0 h-9 pl-2 rounded mb-2.5' id='name' autoComplete='off'/>
              </label>
              <label htmlFor='email' className='text-black/40'>
                    Email <br />
                    <input type="text" placeholder='********' id='email' className='w-full border-black/5 text-black/60 text-sm border outline-0 h-9 pl-2 rounded mb-2.5' autoComplete='off' />
              </label>
              <label htmlFor='password' className='text-black/40'>
                    Password <br />
                    <input type="text" placeholder='********' id='password' className='w-full border-black/5 text-black/60 text-sm border outline-0 h-9 pl-2 rounded mb-4' autoComplete='off'/>
              </label>
              <div>
                <button className='bg-purple-700 text-white rounded-lg py-3 font-bold w-full hover:bg-purple-700/80 transition cursor-pointer'>Signup</button>
              </div>
              <div>
                <p className='text-sm text-black/60 text-center'>You have an account? <span className='text-purple-700 font-semibold cursor-pointer ml-1 hover:text-black/90 transition'><Link to={'/login'}>Login</Link></span></p>
              </div>
              <div className='line'>
                <p >OR</p>
              </div>
              <div className='flex justify-center items-center gap-3'>
                <img src="/images/google-logo.svg" alt="" width={33} />
                <img src="/images/apple-logo.svg" alt="" width={33} />
                <img src="/images/facebook-logo.svg" alt=""  width={33}/>
              </div>
            </div>
          </div>

        </div>
        {/* right side */}
        <div className='h-full bg-purple-500 relative md:block hidden'>
          <img src="/images/form-banner.png" alt="" className='w-full h-full' />
          <div className='w-[90%] rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-6 shadow-lg absolute top-1/2 left-1/2 -translate-1/2 space-y-3'>
            <h1 className='text-2xl font-semibold text-white lg:text-3xl'>
              Welcome Back! We're
              Thrilled to See You Again
            </h1>
            <p className='text-white lg:text-lg'>
              Pick up right where you left off and discover
              what's new since your last visit. Your
              personalized dashboard is waiting.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup