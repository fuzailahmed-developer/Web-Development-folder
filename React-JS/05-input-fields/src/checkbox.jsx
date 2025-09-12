import { use, useState } from "react"

function CheckBox (){

    let [checkBox,getCheckBoxVal] = useState([])

    function addVal(val){
        if (!checkBox.includes(val)) {
            getCheckBoxVal([...checkBox,val])
        } else {
            getCheckBoxVal(checkBox.filter((item) => item != val))
        }
    }

    return (
        <>

        <input type="checkbox" id="HTML" onChange={(e) => addVal(e.target.value)} value={"HTML"}/>
        <label htmlFor="HTML">HTML</label>
        <input type="checkbox" id="JS" onChange={(e) => addVal(e.target.value)} value={"JS"}/>
        <label htmlFor="JS">JS</label>
        <input type="checkbox" id="CSS" onChange={(e) => addVal(e.target.value)} value={"CSS"}/>
        <label htmlFor="CSS">CSS</label>
        <input type="checkbox" id="REACT" onChange={(e) => addVal(e.target.value)} value={"REACT"}/>
        <label htmlFor="REACT">REACT</label>

        <h1>{checkBox.toString()}</h1>
        </>
    )


}

export default CheckBox