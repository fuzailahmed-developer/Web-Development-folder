"use client"
import { useRouter } from 'next/navigation'
import React, { useReducer } from 'react'

const userInfo = {
    email: "",
    password: ""
}

const reducer = (state, action) => {
    switch (action.type) {
        case "email":
            return { ...state, [action.type]: action.val }
        case "password":
            return { ...state, [action.type]: action.val }
        case "reset":
            return userInfo
        default : return  state
    }
}

const Signup = () => {
    const [state, dispatch] = useReducer(reducer, userInfo)
    
    const router = useRouter()
    let users;

    const handleSubmit = (e) => {
        e.preventDefault()
        if (state.email && state.password) {
            users = JSON.parse(localStorage.getItem("users")) || []
            users.push(state)
            localStorage.setItem("users", JSON.stringify(users))
            dispatch({ type: "reset" })
            router.push("/login")
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className='bg-white/10 backdrop-blur-sm p-6 rounded-lg w-[450px] absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] flex flex-col gap-y-4'
        >
            <h1 className='font-bold text-2xl text-center uppercase tracking-wider'>SignUp</h1>
            <div>
                <label htmlFor="email">Email:</label><br />
                <input
                    type="text"
                    id='email'
                    className='outline-none border rounded w-full mt-1 h-10 pl-3'
                    autoComplete='off'
                    value={state.email}
                    onChange={(e) => dispatch({ type: "email", val: e.target.value })}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label><br />
                <input
                    type="text"
                    id='password'
                    className='outline-none border rounded w-full mt-1 h-10 pl-3'
                    autoComplete='off'
                    value={state.password}
                    onChange={(e) => dispatch({ type: "password", val: e.target.value })}
                />
            </div>
            <button className='self-start mt-auto px-5 py-1.5 rounded bg-white text-zinc-700'>Submit</button>
        </form>
    )
}

export default Signup
