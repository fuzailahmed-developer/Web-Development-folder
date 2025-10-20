import React from 'react'
import ChildB from './ChildB'

const ChildA = () => {
  return (
    <>
    <h1>I Am Child Component A</h1>
      <ChildB />
    </>
  )
}

export default ChildA