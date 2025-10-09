import React from 'react'
import { Link, useParams } from 'react-router'

const ViewUser = () => {

    const {id} = useParams()

  return (
    <div>
        <h1>User ID : {id}</h1>
        <button className='bg-black text-white border border-white rounded-md px-3 py-1'><Link to={"/user"}>Back</Link></button>
    </div>
  )
}

export default ViewUser