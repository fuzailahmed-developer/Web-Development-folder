import React from 'react'
import ChildB from './ChildB'

const ChildA = () => {
  return (
    <>
        <h1 style={{backgroundColor : "pink", padding : 20}}>Child A</h1>
        <ChildB />
    </>
  )
}

export default ChildA