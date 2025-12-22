"use client"
import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'


const AddItems = () => {
    // states
    const [inputVal,setInputVal] = useState<string | null>(null)

    // form handler 
    const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(inputVal)
    }
  return (
    <form className='flex gap-x-3' onSubmit={handleForm}>
        <Input type='text' placeholder='Add Task..!' onChange={(e) => setInputVal(e.target.value)}/>
        <Button className='cursor-pointer'>
            Add
        </Button>
    </form>
  )
}

export default AddItems