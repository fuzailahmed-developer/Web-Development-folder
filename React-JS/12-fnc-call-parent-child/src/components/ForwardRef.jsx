import React from 'react'

const ForwardRef = (props) => {
  return (
    <div>
        <input type="text" placeholder='enter your name' ref={props.ref} />
    </div>
  )
}

export default ForwardRef