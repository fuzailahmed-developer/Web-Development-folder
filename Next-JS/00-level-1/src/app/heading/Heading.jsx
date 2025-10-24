import React from 'react'

const Heading = ({text = "Heading"}) => {
  return (
    <h1 className='absolute top-1/2 left-1/2 transform -translate-1/2 text-white text-5xl font-bold'>{text}</h1>
  )
}

export default Heading