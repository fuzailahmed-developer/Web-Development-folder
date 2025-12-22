import React, { useEffect, useState } from 'react'
import styles from './userinfo.module.css'
import loadingImg from './assets/fade-stagger-circles.svg'
import { Link, useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore';
import { db } from './utils/firebase';
import { get, ref } from 'firebase/database';
const UserInfo = () => {
    const { id } = useParams();
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(false)

    async function fetchUser() {
        setLoading(true)
        const userRef = ref(db,"Users/"+id)
        try {
            const snapShot = await get(userRef)
            if (snapShot.exists()) {
                setUser(snapShot.val())
                setLoading(false)
            } else {
                console.log("user doesn't exist")
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchUser()
    }, [])

    return (
        <>
            {
                loading ?
                    <div className={styles.imgDiv}>
                        <img src={loadingImg} alt="" width={200} height={100} />
                    </div> :

                    <div className={styles.container}>
                        <div className={styles.content}>
                            <div>
                                <span>Id :</span>
                                <span>{id}</span>
                            </div>
                            <div>
                                <span>Name :</span>
                                <span>{user.name}</span>
                            </div>
                            <div>
                                <span>Email :</span>
                                <span>{user.email}</span>
                            </div>
                            <div>
                                <span>Password :</span>
                                <span>{user.password}</span>
                            </div>
                        </div>
                    </div>
            }
            <button className={styles.btn}>
                <Link to={'/read'}>Back</Link>
            </button>
        </>
    )
}

export default UserInfo