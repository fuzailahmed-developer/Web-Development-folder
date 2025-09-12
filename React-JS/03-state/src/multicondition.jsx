import { useState } from "react"

function MultiCondition() {

    let [count, setCount] = useState(0)

    return (
        <div>
            <h1>Multiple Condition React JS!</h1>
            {count == 0 ? <h1>Count is 0</h1> :
                count == 1 ? <h1>Count is 1</h1> :
                    count == 2 ? <h1>Count is 2</h1> :
                        count == 3 ? <h1>Count is 3</h1> :
                            count == 4 ? <h1>Count is 4</h1> :
                                count == 5 ? <h1>Count is 5</h1> : <h1>No Condition Match</h1>
            }
            <button onClick={() => setCount(count + 1)}>Change</button>
        </div>
    )


}

export default MultiCondition


export const MyCondition = () => {

    let [count, setCount] = useState(0)
    const [message, setMessage] = useState(`condition ${count}`)

     const checkCondition = () => {
        setCount(++count)
        if (count == 0) {
            setMessage(`condition ${count}`)
        }
        else if(count == 1){
            setMessage(`condition ${count}`)
        }
        else if(count == 2){
            setMessage(`condition ${count}`)
        }
        else {
            setMessage(`No-Condition Match`)
        }
    }

    return (
        <>
            <h1>{message}</h1>
            <button onClick={checkCondition}>Change Condition</button>
        </>
    )
}