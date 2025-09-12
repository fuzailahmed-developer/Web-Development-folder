import { useState } from "react"

function Select() {

    let [select, getSelectVal] = useState("Karachi")



    return (
        <div>
            <h1>{select}</h1>
            <select onChange={(e) => getSelectVal(e.target.value)}>
                <option value="Karachi">Karachi</option>
                <option value="Lahore">Lahore</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Peshawer">Peshawer</option>
            </select>
        </div>
    )
}

export default Select