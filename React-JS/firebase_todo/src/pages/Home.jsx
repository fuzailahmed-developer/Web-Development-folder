import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import { IoAdd } from "react-icons/io5";
import Task from '../components/Task';
import CommonBtn from '../components/CommonBtn';
import AddItemModel from '../components/AddItemModel';
import { onValue, ref } from 'firebase/database';
import { db } from '../utils/firebase';
import { toast } from 'react-toastify';
import { collection, getDocs, query, where } from 'firebase/firestore';
import Loader from '../components/Loader'
import { AuthContext } from '../context/AuthContext';

const Home = () => {

  const Btns = ["HIGH", "MEDIUM", "LOW"]
  const [isOpen, setIsOpen] = useState(false)
  const [taskList, setTaskList] = useState([])
  const [loading, setLoading] = useState(false)
  const {user} = useContext(AuthContext)
  const [editingId, setEditingId] = useState(null)
  const [task, setTask] = useState({ title: "", date: "", priority: "" })

  // read data
  const fetchUsers = async() => {
    
    setLoading(true)

    const listRef = collection(db, "Lists")
    const q = query(listRef,where('addBy','==',user.uid))
    try {
      const querySnapShot = await getDocs(q)
      const data = querySnapShot.docs.map((doc) => ({
        id :doc.id,
        ...doc.data()
      }))
      setTaskList(data)
      setLoading(false)

    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <>
      {
        loading ? <div className='h-[80vh] flex justify-center items-center'><Loader /></div> :
          <section>
            <Header />
            <div className='container'>
              {/* btns */}
              <div className='flex justify-between items-center flex-wrap gap-y-4'>
                <button className='sm:py-4 sm:px-5 py-3 px-4 rounded-lg bg-white font-semibold shadow-lg flex gap-3 items-center text-black hover:bg-white/70 transition' onClick={() => setIsOpen(!isOpen)}>
                  ADD <IoAdd size={20} />
                </button>
                <div className='gap-4 py-1.5 px-4 rounded text-sm flex font-semibold flex-wrap'>
                  {
                    Btns.map((btn, idx) => (
                      <CommonBtn text={btn} key={idx} />
                    ))
                  }
                </div>
              </div>
              {/* TASK */}
              <div className='my-12 flex flex-col gap-6'>
                {
                  taskList?.map((task, idx) => (
                    <Task key={idx} task={task} fetchUsers={fetchUsers} setIsOpen={setIsOpen} setTask={setTask}  setEditingId={setEditingId}/>
                  ))
                }
              </div>
            </div>
            <AddItemModel setIsOpen={setIsOpen} isOpen={isOpen} taskList={taskList}  fetchUsers={fetchUsers} setTask={setTask} task={task}  editingId={editingId} setEditingId={setEditingId}/>
          </section>
      }
    </>
  )
}

export default Home