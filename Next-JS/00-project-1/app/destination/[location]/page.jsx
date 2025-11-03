"use client"
import { useParams } from 'next/navigation'
import React from 'react'

const Location = () => {

    const {location} = useParams()
    console.log(location)

  return (
    <div>This is Dynamic Route Page</div>
  )
}

export default Location