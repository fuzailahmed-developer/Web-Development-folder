import { useEffect, useState } from "react"
import type { UserType } from '../types/user'
import { collection, getDocs, type Timestamp } from "firebase/firestore"
import { database } from "../firebase/config"


export type UserDataType = UserType & {
  id: string,
  createdAt: Timestamp
}

const useFetchUser = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<UserDataType[]>([])

  const fetchAllUsers = async (): Promise<void> => {
    try {
      setLoading(true)

      const collectionRef = collection(database, 'users')

      const snapshot = await getDocs(collectionRef)

      const users: UserDataType[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as UserDataType[];

      setData(users)
    }
    catch (error) {
      console.log(error)
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAllUsers()
  }, [])

  return { data, loading, fetchAllUsers }

}

export default useFetchUser