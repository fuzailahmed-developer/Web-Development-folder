import React, { useActionState } from 'react'

const Home = () => {


    const handleForm = async (prevData,formData) => {

        await new Promise ((res) => setTimeout(res,2000))


        const regEx = /^[A-Za-z0-9]+$/
        const name = formData.get("name")
        const password = formData.get("password")

        if (name.length < 3) {
            return {error : "Must Have 3 Character in Name!"}
        }
        else if (!regEx.test(password)){
            return {error : "only number and alphabets allows!"}
        }
        else return {Login : "Login Done"}
    }

    const [data,action,pending] = useActionState(handleForm)

    return (
        <>

        {
            data?.Login && <p style={{color : "green"}}>{data.Login}</p> 
        }
        {
            data?.error && <p style={{color : "red"}}>{data.error}</p> 
        }

            <form action={action}>
                <input type="text" name='name' placeholder='Enter Name'/><br /><br />
                <input type="text" name='password' placeholder='Enter Password'/><br /><br />
                <button>{pending ? "Submitting..." : "Submit"}</button>
            </form>
        </>
    )
}

export default Home