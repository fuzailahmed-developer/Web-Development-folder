import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeUser } from './store/features/todoApp'

const App = () => {

  const [inputVal, setInputVal] = useState("")
  const select = useSelector(state => state.todo)
  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(addItem(inputVal))
    setInputVal('')
  }

  function handleRemove (id){
    dispatch(removeUser(id))
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='flex p-5'>
        <input type="text" onChange={(e) => setInputVal(e.target.value)} value={inputVal} className='border' />
        <button className=' px-3 py-1.5 bg-blue-500 text-white'>submit</button>
      </form>
      <ul>
        {
          select.map((item,idx) => <li key={idx}>{item} <span onClick={() => handleRemove(idx)} className='cursor-pointer'>X</span></li>)
        }
      </ul>
    </>
  )
}

export default App