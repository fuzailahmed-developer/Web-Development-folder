import React from 'react'

const Heading = ({text,font}) => {
  return (
    <h1 className={`absolute top-1/2 left-1/2 -translate-1/2 font-bold ${font ? font : 'text-5xl'}`}>
        {text}
    </h1>
  )
}

export default Heading