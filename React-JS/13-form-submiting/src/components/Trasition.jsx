import React, { useState, useTransition } from 'react'

const Transition = () => {

    const [pending,startTransition] = useTransition()
    console.log(pending)

    function handleButton () {
        startTransition(async () => {
            await new Promise((resolve) => setTimeout(() => resolve("Submit"),2000))
        })
    }
    return (
        <div>
            <h1>Transition</h1>
            <button disabled={pending} onClick={handleButton}>{pending ? "Submitting" : "Submit"}</button>
        </div>
    )

}

export default Transition