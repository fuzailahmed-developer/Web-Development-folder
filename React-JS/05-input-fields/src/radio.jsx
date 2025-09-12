import { useState } from "react";

function Radio() {

    let [gender,setGender] = useState("female")

    function handleGender(e){
        setGender(e)
    }

    return (
        <div>

            <h1>Gender is : {gender}</h1>

            <input type="radio" id="male" value="male" name="gender" onChange={(e) => handleGender(e.target.value)}/>
            <label htmlFor="male">Male</label>
            <input type="radio" id="female" name="gender"  value="female" onChange={(e) => handleGender(e.target.value)}/>
            <label htmlFor="female">Female</label>
        </div>
    )

}
export default Radio