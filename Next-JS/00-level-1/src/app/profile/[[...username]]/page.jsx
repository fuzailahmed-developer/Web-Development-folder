import Heading from '@/app/heading/Heading';
import React from 'react'

const User = async ({params}) => {
    const {username} = await params;
    console.log(username )
  return (
    <div>
        <ul>
          {
            username.map((user,idx) => (
              <li key={idx}>{user}</li>
            ))
          }
        </ul>
    </div>
  )
}

export default User