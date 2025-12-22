import React, { useEffect, useState } from 'react'
import styles from './users.module.css'
import { db } from './utils/firebase'
import { collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'
import loadingImg from './assets/fade-stagger-circles.svg'
import { Link, useNavigate } from 'react-router-dom'
const Users = () => {

    const [loading, setLoading] = useState(false)
    const [userData, setUserData] = useState([])
    const navigate = useNavigate()

    // Read
    const fetchUsers = async () => {
        setLoading(true)
        const UserCollection = collection(db, "Users");
        try {
            const querySnapShot = await getDocs(UserCollection)
            const data = querySnapShot.docs.map((user) => (
                { id: user.id, ...user.data() }
            ))
            if (data) {
                setLoading(false)
                setUserData(data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    // Update
    const updatePassword = async (id) => {
        setLoading(true)
        const userCollectionRef = doc(db, "Users", id)
        try {
            await updateDoc(userCollectionRef, {
                password: 'fuzail23'
            })
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }

    // Delete
    const handleDelete = async (id) => {
        setLoading(true)
        const userCollectionRef = doc(db, "Users", id)
        await deleteDoc(userCollectionRef)
        window.location.reload()
    }


    // read by doc

    const fetchUser = async (id) => {
        navigate('/read/'+id)
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <div className={styles.my_container}>
            <button className={styles.btn}>
                <Link to={'/'}>Home</Link>
            </button>
            <button className={styles.btn2}>
                <Link to={'/search'}>Search</Link>
            </button>
            {
                loading ?
                    <div className={styles.img_container}><img src={loadingImg} alt="" width={200} height={100} /></div> :
                    userData.map((user) => (
                        <div className={styles.content_div} key={user.id}>
                            <div onClick={() => fetchUser(user.id)}>
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
                            <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap"}}>
                                <button className={styles.simple_btn} onClick={() => updatePassword(user.id)}>Update</button>
                                <button className={styles.simple_btn} onClick={() => handleDelete(user.id)}>Delete</button>
                            </div>
                        </div>
                    ))
            }
        </div>
    )
}

export default Users