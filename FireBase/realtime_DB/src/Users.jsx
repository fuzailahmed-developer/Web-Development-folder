import React, { useEffect, useState } from 'react'
import styles from './users.module.css'
import { db } from './utils/firebase'
import loadingImg from './assets/fade-stagger-circles.svg'
import { Link, useNavigate } from 'react-router-dom'
import { onValue, ref, remove, update } from 'firebase/database'
const Users = () => {

    const [loading, setLoading] = useState(false)
    const [userData, setUserData] = useState([])
    const navigate = useNavigate()

    // Read
    const fetchUsers = async () => {
        setLoading(true)
        const userRef = ref(db, "Users");

        onValue(userRef, ((snapShot) => {

            const data = snapShot.val();
            if (!data) {
                setLoading(false)
                return;
            }
            const userArray = Object.entries(data)?.map(([id, value]) => ({
                id, ...value
            }))
            setUserData(userArray)
            setLoading(false)
        }))
    }

    // Update
    const updateUser = async (id, newName) => {
        setLoading(true)
        const userRef = ref(db, 'Users/' + id)
        await update(userRef, {
            name: newName
        })
        setLoading(false)
    }

    // Delete
    const handleDelete = async (id) => {
        setLoading(true)
        const userRef = ref(db, "Users/" + id)
        await remove(userRef)
        setLoading(false)
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
                            <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
                                <button className={styles.simple_btn} onClick={() => updateUser(user.id, "Ali Raza")}>Update</button>
                                <button className={styles.simple_btn} onClick={() => handleDelete(user.id)}>Delete</button>
                            </div>
                        </div>
                    ))
            }
        </div>
    )
}

export default Users