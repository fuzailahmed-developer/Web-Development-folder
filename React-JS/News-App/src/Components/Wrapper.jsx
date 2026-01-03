import React from 'react'

const Wrapper = ({children}) => {
  return (
    <div className='max-w-350 mx-auto'>
        {children}
    </div>
  )
}

export default Wrapper