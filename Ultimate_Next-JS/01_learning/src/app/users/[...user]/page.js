'use client';
import useApi from '@/hooks/useApi'
import { useParams } from 'next/navigation';
import React from 'react'

const User = () => {

  const params = useParams()
  const id = params.user[0]

  const { data, err, loading } = useApi('https://jsonplaceholder.typicode.com/users/' + id)

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[80vh]">
        <p className="text-xl font-semibold">Loading...</p>
      </div>
    );
  }

  if (err) {
    return (
      <div className="flex justify-center items-center min-h-[80vh]">
        <p className="text-red-500 font-semibold">
          Error while fetching API...
        </p>
      </div>
    );
  }

  console.log(data);

  return (
    <div>
      <h1>User - {id}</h1>
    </div>
  )
}

export default User