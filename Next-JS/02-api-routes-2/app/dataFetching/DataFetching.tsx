import React from 'react'

const DataFetching = async () => {

    //! ssr - her refresh per api call hugi

    // const res = await fetch('http://localhost:3000/api/user',
    //     {
    //         cache : 'no-cache'
    //     }
    // )
    // const data = await res.json()
    // console.log(data)

    //! ssg - default * her refresh per api call nahi hugi data cache ma store hu gaha ga
    
    // const res = await fetch('http://localhost:3000/api/user',
    //     {
    //         cache : 'force-cache'
    //     }
    // )
    // const data = await res.json()
    // console.log(data)

    //! isr - data store kara gata lakin kuch time bad ap api dubara call kr sakte hu 

    const res = await fetch('http://localhost:3000/api/user',
        {
            next : {revalidate : 10}
        }
    )
    const data = await res.json()
    console.log(data)

  return (
    <div>
        <ul>
            {
                data.map((user : any) => {
                    return <li key={user.id}>{user.name}</li>
                })
            }
        </ul>
    </div>
  )
}

export default DataFetching