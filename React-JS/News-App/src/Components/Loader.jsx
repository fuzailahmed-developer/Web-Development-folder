import React from 'react'
import loader from '../assets/ripples.svg'

const Loader = () => {
  return (
    <div className='absolute top-1/2 left-1/2 -translate-1/2'>
        <img src={loader} alt="" width={300} height={300}/>
    </div>
  )
}

export default Loader