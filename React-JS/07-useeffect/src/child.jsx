import { useEffect } from "react"

function Child({ count }) {

    function propsUpdate() {
        console.log("PropsUpdate Called!")
    }

    function dataReceive() {
        console.log("Data Received!")
    }

    // mounting phase - run only one time

    useEffect(() => {
        dataReceive()
    }, [])

    // update phase - run only when update state or props

    useEffect(() => {
        propsUpdate()
    },[count])

    // unMounting phase - run when your  component hide 

    useEffect(() => {
        return () => console.log("unmounting phase!")
    },[])

    return (
        <div>
            <h1>count : {count}</h1>
        </div>
    )

}
export default Child