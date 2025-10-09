import React, { useState } from 'react'

const UpdateArr = () => {

  const [arr,setArr] = useState(["ali","raza","fuzail","ahmed","zohib"])

  function handleArr (e){
    arr[arr.length-1] = e.target.value
    setArr([...arr])
  }

  return (
    <div>

    <input type="text" onChange={handleArr}/>

        {
          arr.map((name,index) => (
            <h2 key={index}>{name}</h2>
          ))
        }
    </div>
  )
}

export default UpdateArr