import { Button } from '@/components/ui/button'
import React from 'react'

const Home = () => {
  return (
    <div className='w-full h-screen bg-zinc-950 flex justify-center items-center'>
      <div className='home-div'>
        <h1 className='font-semibold text-3xl letter-spacing-add mb-3'>Welcome,ali!</h1>
        <p className='mb-3'>You are now logged in.</p>
        <Button variant={'secondary'} className='w-full'>
          Sign Out
        </Button>
        <div className='absolute top-3 right-6 cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil-line-icon lucide-pencil-line"><path d="M13 21h8"/><path d="m15 5 4 4"/><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/></svg>
        </div>
      </div>
    </div>
  )
}

export default Home