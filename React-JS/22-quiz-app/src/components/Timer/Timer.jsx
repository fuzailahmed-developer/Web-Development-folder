import React, { useEffect, useState } from 'react'

const Timer = ({isOver}) => {

    const [timerCount,setTimerCount] = useState("10")

    useEffect(() => {
        
        if (timerCount == 0) {
          isOver(true)
          return;
        };

        const id = setInterval(() => {
            setTimerCount(prev => prev -1)
        },1000)


        return () => clearInterval(id)

    },[timerCount])


  return (
    <h1>🕒Time Left: {timerCount.length == 2 ? `00:${timerCount}` : `00:0${timerCount}`}</h1>
  )
}

export default Timer