import React from 'react'
import { useFormStatus } from 'react-dom'

const FormSubmiting = () => {

    async function handleSubmit (){
        const output = await new Promise((resolve) => setTimeout(() => resolve("Submitted"),2000) )
        console.log(output)
    }
    
    const SubmitButton = () => {
        const {pending} = useFormStatus()
        return(
            <button disabled={pending}>{pending ? "Submitting" : "Submit"}</button>
        )
    }


    return(
        <>
            <form action={handleSubmit}>
                <input type="text" placeholder='enter your email'/> <br /> <br />
                <input type="text" placeholder='enter your password'/> <br /> <br />
                <SubmitButton />
            </form>
        </>
    )
}

export default FormSubmiting