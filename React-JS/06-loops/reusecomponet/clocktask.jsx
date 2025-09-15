import { useEffect, useState } from "react"

function Clock({ mBgColor }) {

    let [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000);
    }, [])


    return (

        <div>

            <div style={
                {
                    border: "1px solid black",
                    width: "200px",
                    borderRadius: "8px",
                    textAlign: "center",
                    padding: "5px 10px",
                    marginTop: "5px",
                    backgroundColor: mBgColor
                }
            }>
                <h1>{time}</h1>

            </div>



        </div>


    )
}

export default Clock