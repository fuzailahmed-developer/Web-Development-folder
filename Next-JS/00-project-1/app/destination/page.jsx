"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Destination = () => {
  const router = useRouter()
  const btns = ["Paris","Tokyo","NewYork"] 


  return (
    <div className='h-[calc(100vh-72px)] flex flex-col justify-center text-center gap-y-6'>
      <h1 className='font-semibold text-4xl'>Choose Your Destination</h1>
        <div className='flex flex-col gap-y-4 items-center'>
          {
            btns.map((btn,idx) => (
              <button onClick={() => router.push(`/destination/${btn}`)} key={idx} className='py-6 w-[150px] rounded-lg bg-white text-black hover:bg-zinc-800 hover:text-white transition-all duration-300'>{btn}</button>
            ))
          }
        </div>
    </div>
  )
}

export default Destination