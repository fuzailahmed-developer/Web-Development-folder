"use client"
import { DECREMENT, INCREMENT, INCREMENT_BY_AMOUNT, RESET } from '@/redux/store/reducers/counterSlice/counterSlice'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
  const [amount,setAmount] = useState(0)
  const state = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  function handleIncrement (){
      dispatch(INCREMENT())
    }
    function handleDecrement (){
    dispatch(DECREMENT())
    
  }
  function handleReset (){
    dispatch(RESET())
    
  }
  function IncrementByAmount (){
    dispatch(INCREMENT_BY_AMOUNT(amount))

  }

  return (
    <div className='absolute top-1/2 left-1/2 -translate-1/2 border rounded-lg  px-10 flex flex-col gap-y-4 pt-5 pb-9'>
      <h1 className='font-bold'>Count : {state}</h1>
      <div className='flex gap-x-3 my-4 *:flex-1'>
        <button className='py-1.5 px-3 text-sm rounded bg-white text-black' onClick={handleIncrement}>Increment</button>
        <button className='py-1.5 px-3 text-sm rounded bg-white text-black' onClick={handleDecrement}>Decrement</button>
        <button className='py-1.5 px-3 text-sm rounded bg-white text-black' onClick={handleReset}>Reset</button>
      </div>
      <div>
        <input type="number" className='border border-white rounded w-full h-8 pl-3 mb-3' onChange={(e) => setAmount(e.target.value)} value={amount} />
        <button className='py-1.5 px-3 text-sm rounded bg-white text-black w-full'onClick={IncrementByAmount} >Inc by Amount</button>
      </div>
    </div>
  )
}

export default Home