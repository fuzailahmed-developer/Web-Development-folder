// 1.import redux and redux toolkit
// 2.configure store
/* 3.wrap your app component in to provider and import store
 <Provider store={store}> */



import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementByAmount } from './redux/features/counter/counterSlice'
import { useRef, useState } from 'react'

function App() {

  const [amount,setAmount] = useState(0)

  const count = useSelector((state) => state.counter.value)
  console.log(count)

  const dispatch = useDispatch()


  function handleIncrementClick() {

    dispatch(increment())

  }
  function handleDecrementClick() {

    dispatch(decrement())

  }

  function handleInputIncrement (){
    dispatch(incrementByAmount(amount))
  }

  return (
    <div className='container'>
      <button onClick={handleIncrementClick}> + </button>
      <p>Count: {count} </p>
      <button onClick={handleDecrementClick}> - </button>
      <div>
        <input type="number" onChange={(e) => setAmount(e.target.value)} value={amount}/>
        <button onClick={handleInputIncrement}>Increment</button>
      </div>
    </div>
  )
}

export default App
