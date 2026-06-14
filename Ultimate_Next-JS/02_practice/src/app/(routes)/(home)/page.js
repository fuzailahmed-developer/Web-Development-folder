import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <div>
      <h1>
        Home Page
      </h1>
      <Image
        src={'/fuzail.jpg'}
        width={300}
        height={300}
        alt='Profile image'
        className='w-auto h-auto'
        loading='eager'
      />
      <br />
      <br />
      <Image
        src={'https://hips.hearstapps.com/hmg-prod/images/2025-bmw-m5-115-671a7a8e94c11.jpg?crop=0.744xw:0.630xh;0.128xw,0.267xh&resize=2048:*'}
        width={300}
        height={300}
        alt='Car image'
        className='w-auto h-auto'
        loading='eager'
      />
    </div>
  )
}

export default Home