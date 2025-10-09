import React from 'react'
import { Link, Outlet } from 'react-router'

const Collage = () => {
  return (
    <div>
        <h1 className='text-2xl font-bold text-center mt-4'>Collage Details</h1>
        <div className='mt-5 flex gap-x-5 justify-center'>
            <Link to={"students"}>Students</Link>
            <Link to={"department"}>Department</Link>
            <Link to={"batch"}>Batch</Link>
        </div>
        <div className='border border-amber-300 rounded-lg m-20 py-5 px-10'>
            <Outlet />
        </div>
    </div>
  )
}

export default Collage