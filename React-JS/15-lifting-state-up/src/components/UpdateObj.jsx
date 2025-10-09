import React, { useState } from 'react'

const UpdateObj = () => {

    const [data,setData] = useState({
        name : "fuzail",
        address : {
            city : "karachi"
        }
    })

    const handleObj = (e) => {
        data.address.city = e.target.value;
        setData(JSON.parse(JSON.stringify(data)))
    }

  return (
    <div>
        <input type="text" onChange={handleObj}/>
        <h1>
            Name : {data.name} <br />
            city : {data.address.city}
        </h1>

    <hr />

    </div>
  )
}

export default UpdateObj