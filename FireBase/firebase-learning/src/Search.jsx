import React, { useEffect, useState } from 'react'
import style from './search.module.css'
import loadingImg from './assets/fade-stagger-circles.svg'
import { collection, deleteDoc, doc, endAt, getDocs, orderBy, query, startAt, where } from 'firebase/firestore'
import { db } from './utils/firebase'
import { Link } from 'react-router-dom'
const Search = () => {

    const [input, setInput] = useState(null)
    const [filteredUsers, setFilteredUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const collectionRef = collection(db, "Users")

    const filtering = async () => {

        if (!input?.trim()) {
            setFilteredUsers([])
            return;
        }
        setLoading(true)

        // query
        const q = query(collectionRef,
            orderBy("name"),
            startAt(input),
            endAt(input + "\uf8ff"))


        // query syntax - 2
        // cost q = query(collectionRef,where('name','==','fuzail'))

        try {

            //fetch data
            const querySnapShot = await getDocs(q)
            const data = querySnapShot.docs.map((user) => (
                {
                    id: user.id,
                    ...user.data()
                }
            ))
            if (data) {
                setLoading(false)
                setFilteredUsers(data)
            }


        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async(id) => {
        setLoading(true)
        const collectionRef = doc(db,"Users",id)
        try {  
            await deleteDoc(collectionRef)
            setLoading(false)
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        const delay = setTimeout(filtering(), 300)
        clearTimeout(delay)
    }, [input])

    return (
        <div className={style.my_container}>
            <button className={style.btn}>
                <Link to={'/read'}>List</Link>
            </button>
            <div className={style.input_div}>
                <input type="text" onChange={(e) => setInput(e.target.value)} className={style.input} placeholder='Enter User Name' autoFocus={true} />
            </div>
            {
                loading ?
                    <div className={style.loading_img}>
                        <img src={loadingImg} alt="" width={200} height={100} /> :
                    </div> :

                    <div className={style.content_container}>

                        {
                            filteredUsers.length > 0 ?
                                filteredUsers?.map((user) => (
                                    <div className={style.content_div} key={user.id}>
                                        <div >
                                            <span>Name</span>
                                            <span>{user.name}</span>
                                        </div>
                                        <div>
                                            <span>Email</span>
                                            <span>{user.email}</span>
                                        </div>
                                        <div>
                                            <span>Password</span>
                                            <span>{user.password}</span>
                                        </div>
                                        <div>
                                            <button className={style.simple_btn} style={{width : '80%',marginInline : "auto"}} onClick={() => handleDelete(user.id)}>Delete</button>
                                        </div>
                                    </div>
                                )) : <div className={style.message_div}><h1>Inter Correct User Name...!</h1></div>
                        }

                    </div>
            }
        </div>
    )
}

export default Search