import React, { useEffect, useState } from 'react'
import styles from './userinfo.module.css'
import loadingImg from './assets/fade-stagger-circles.svg'
import { Link, useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore';
import { db } from './utils/firebase';
const UserInfo = () => {
    const { id } = useParams();
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(false)

    async function fetchUser() {
        setLoading(true)
        const docRef = doc(db, "Users", id);
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
            setUser(docSnap.data())
            setLoading(false)
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