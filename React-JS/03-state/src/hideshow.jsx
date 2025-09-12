
import { useState } from "react"

function Toggle() {

    const [display, setDisplay] = useState(true)
    const [text,setText] = useState("Hide")

    function hideShow() {
        if (display) {
            setText("Show")
            setDisplay(false)
        } else {
            setText("Hide")
            setDisplay(true) 
        }
    }


    return (
        <div>


        {display ? <h1>Toggle Functionality in React JS</h1> : null}

            <button onClick={hideShow}>{text}</button>


        </div>
    )


}

export default Toggle