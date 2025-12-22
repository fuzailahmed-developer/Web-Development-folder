import AddItems from '@/components/addItems/AddItems'
import { Button } from '@/components/ui/button'
import React from 'react'

const Home = () => {
  return (
   <main className='max-w-[500px] w-full mx-auto'>
      <h1>TODO NEXT + TYPESCRIPT</h1>
      <AddItems />
   </main>
  )
}

export default Home