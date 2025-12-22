import React, { useContext, useEffect, useState } from 'react'
import CommonBtn from './CommonBtn'
import { toast } from 'react-toastify';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { AuthContext } from '../context/AuthContext';
import { db } from '../utils/firebase';

const AddItemModel = ({ isOpen, setIsOpen, fetchUsers, task, setTask, editingId , setEditingId }) => {

  const Btns = ["HIGH", "MEDIUM", "LOW"];
  const [selected, setSelected] = useState(null)

  const { user } = useContext(AuthContext)

  const handleTask = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value })
  }

  const addTask = async () => {
    if (!task.title.trim() || !task.date.trim() || !task.priority.trim()) {
      toast.error("Please Fill All Fields...!", {
        position: 'top-center'
      })
      return;
    }

    // create data in database

    try {
      setIsOpen(!isOpen)
      await addDoc(collection(db, "Lists"), {
        ...task, addBy: user.uid
      })
      setTask({ title: "", date: "", priority: "" })
      toast.success('Task Added Successfully...!', {
        position: 'top-center'
      })
      fetchUsers()
    } catch (error) {
      console.log(error.message)
    }


  }

  // update task

  const updateTask = async () => {
    if (!task.title.trim() || !task.date.trim() || !task.priority.trim()) {
      toast.error("Please Fill All Fields...!");
      return;
    }

    try {
      const ref = doc(db, "Lists", editingId);
      await updateDoc(ref, task);

      toast.success("Task Updated Successfully!");
      setTask({ title: "", date: "", priority: "" });
      setIsOpen(false);
      setEditingId(null);
      fetchUsers();

    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    setTask(prev => ({
      ...prev,
      priority: selected || "HIGH"
    }));
  }, [selected]);


  return (

    <div
      className={`
        fixed inset-0 flex items-center justify-center z-50
        bg-black/50 backdrop-blur-sm
        transition-opacity duration-300 px-5
        ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      <div
        className={`
          max-w-xl w-full rounded-lg bg-white min-h-[350px] 
          pt-8 px-5 pb-5 flex flex-col
          transform transition-all duration-300 text-black
          ${isOpen ? "scale-100 opacity-100" : "scale-90 opacity-0"}
        `}
      >
        <h1 className="font-semibold text-3xl">{editingId ? "EDIT TASK" : 'ADD TASK'}</h1>

        <input
          type="text"
          placeholder="Enter TASK....!"
          className="h-10 rounded-lg pl-4 focus:ring-purple-300 border border-black/40 
          focus:ring-2 outline-none w-full mt-4"
          name='title'
          value={task.title}
          onChange={handleTask}
        />

        <div className="flex flex-wrap justify-between items-center gap-y-5 my-6">
          <input
            type="date"
            className="border border-black/30 rounded-lg p-2 h-12 max-w-[200px] w-full"
            name='date'
            value={task.date}
            onChange={handleTask}
          />
          <div className="gap-2 flex">
            {Btns.map((btn, idx) => (
              <CommonBtn key={idx} text={btn} selected={selected} setSelected={setSelected} setTask={setTask} task={task} />
            ))}
          </div>
        </div>

        <div className="*:py-3 *:rounded-xl flex flex-wrap gap-y-3 gap-x-3 *:grow lg:flex-row flex-col mt-auto h-full">
          <button className="bg-red-500 text-white font-semibold" onClick={() => {
            setIsOpen(false)
            setEditingId(null);
            setTask({ title: "", date: "", priority: "" });
            }}>
            Cancel
          </button>
          <button className="bg-green-500 text-white font-semibold" onClick={() => editingId ? updateTask() : addTask()}>{editingId ? 'Update' : "ADD"}</button>
        </div>
      </div>
    </div>
  );
};


export default AddItemModel