import React, { useState } from 'react'

import Timer from "./components/Timer/Timer"
import Question from "./components/Question/Question"
import Result from './components/Result/Result'

const App = () => {

  const [isOver, setIsOver] = useState(false)
  const [result, setResult] = useState(0)
  const [timerCount, setTimerCount] = useState("10")

  return (
    <div className={"bg-zinc-300 h-screen flex justify-center items-center flex-col gap-y-4"}>
      {
        !isOver && <Timer isOver={setIsOver} />
      }
      {
        !isOver ? <Question isOver={setIsOver} setResult={setResult} /> : <Result score={result} />
      }
    </div>
  )
}

export default App