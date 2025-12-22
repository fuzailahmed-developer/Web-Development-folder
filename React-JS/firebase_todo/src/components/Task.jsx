import React, { useState } from 'react'
import { FaPencilAlt } from "react-icons/fa";
import { IoTrashSharp } from "react-icons/io5";
import CommonBtn from './CommonBtn';
import { ref, remove } from 'firebase/database';
import { db } from '../utils/firebase';
import { deleteDoc, doc } from 'firebase/firestore';


const Task = ({ task, fetchUsers, setIsOpen, setTask, setEditingId }) => {


    // delete item

    const deleteTask = async (id) => {
        const listRef = doc(db, "Lists", id)
        await deleteDoc(listRef)
        fetchUsers()
    }

    // item item

    const editItem = async () => {
        setIsOpen(true)
        setEditingId(task.id)
        setTask({
            title: task.title,
            date: task.date,
            priority: task.priority
        })
    }


    return (

        <div className='flex justify-between items-end py-6 px-6 rounded-lg bg-white shadow-xl text-black lg:flex-row flex-col gap-y-4 '>
            <div className='flex gap-3 items-start lg:flex-row flex-col self-start'>
                <p className='text-lg font-semibold mr-1 tracking-wider max-w-[600px]'>{task.title}</p>
                <div className='flex gap-3 pt-1'>
                    <CommonBtn text={task.priority} />
                    <span className='whitespace-nowrap'>{task.date}</span>
                </div>
            </div>
            <div className='flex gap-4'>
                <button className='py-3 px-3 rounded-lg bg-lime-200 cursor-pointer hover:bg-lime-400 transition ' onClick={editItem}>
                    <FaPencilAlt size={25} />
                </button>
                <button className='py-3 px-3 rounded-lg bg-red-200 cursor-pointer hover:bg-red-400 transition ' onClick={() => deleteTask(task.id)}>
                    <IoTrashSharp size={25} />
                </button>
            </div>
        </div>
    )
}

export default Task