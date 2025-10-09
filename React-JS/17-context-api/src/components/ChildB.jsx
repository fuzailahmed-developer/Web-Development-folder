import React, { useContext, useEffect, useState } from 'react'
import ChildC from './ChildC'
import { userContext } from '../pages/Home/Home'

const ChildB = () => {

  return (
    <>
    <h1 style={{backgroundColor : "green", padding : 20}}>Child B</h1>
        <ChildC />
    </>
  )
}

export default ChildB