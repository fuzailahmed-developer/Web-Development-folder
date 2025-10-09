import React from 'react'

const CommonBtn = ({text = "no text"}) => {
  return <button className='bg-linear-to-b from-orange-400 to-orange-500 text-white rounded-md py-2 px-5 hover:scale-105 transition duration-300 hover:to-orange-600 cursor-pointer'>{text}</button>

}

export default CommonBtn