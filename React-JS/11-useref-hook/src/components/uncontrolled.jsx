import { useRef } from "react"

function UnControlled() {

    const input = document.getElementById("input")
    const h1 = document.querySelector("h1")

    function handleForm(e) {
        e.preventDefault()
        console.log(e.target.name.value)
        console.log(e.target.email.value)
        console.log(e.target.password.value)
        e.target.name.focus()
        e.target.name.value = ""
        e.target.email.value = ""
        e.target.password.value = ""
    }

    const inputNameRef = useRef(null)
    const inputPassRef = useRef(null)

    function handleWithRef(e) {
        e.preventDefault()
        console.log(inputNameRef.current.value)
        console.log(inputPassRef.current.value)
        
    }

    return (
        <div>
            <h1>UnControlled with DOM</h1>
            <form action="" onSubmit={handleForm}>
                <input type="text" id="name" name="name"/><br /><br />
                <input type="text" id="email" name="email"/><br /><br />
                <input type="text" id="password" name="password"/> <br /><br />
                <button>Submit</button>
            </form>
            <br />
            <form action="" onSubmit={handleWithRef}>
                <input type="text" placeholder="Enter Name" ref={inputNameRef}/><br /><br />
                <input type="text" placeholder="Enter Password" ref={inputPassRef}/><br /><br />
                <button>Submit</button>
            </form>
        </div>
    )
}
export default UnControlled