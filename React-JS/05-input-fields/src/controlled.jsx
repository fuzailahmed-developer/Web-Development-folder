import { useState } from "react"

function Controlled(){

    const [inputVal1,getVal1] = useState("")
    const [inputVal2,getVal2] = useState("")
    const [inputVal3,getVal3] = useState("")

    const clearFields = () => {
        getVal1("")
        getVal2("")
        getVal3("")
    }

    return (
        <div>
            <form action="">
                <input type="text" placeholder="Enter You Name" onChange={(e) => {getVal1(e.target.value)}} value={inputVal1}/><br /><br />
                <input type="text" placeholder="Enter You Email" onChange={(e) => {getVal2(e.target.value)}} value={inputVal2}/><br /><br />
                <input type="text" placeholder="Enter You Password" onChange={(e) => {getVal3(e.target.value)}} value={inputVal3}/><br /><br />
                <button>Submit</button>
            </form>
            <div>
                <h1>User Input Details</h1>
                {inputVal1 && <h2>UserName : {inputVal1}</h2>}
                {inputVal2 && <h2>UserEmail : {inputVal2}</h2>}
                {inputVal3 && <h2>UserPassword : {inputVal3}</h2>}
                <button onClick={clearFields}>Clear</button>
            </div>
        </div>
    )
}
export default Controlled