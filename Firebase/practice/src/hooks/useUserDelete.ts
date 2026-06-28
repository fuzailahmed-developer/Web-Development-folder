import { deleteDoc, doc, getDoc } from 'firebase/firestore'
import toast from 'react-hot-toast'
import { database } from '../firebase/config'
import { useState } from 'react'

const useUserDelete = () => {

  const [deleting, setDeleting] = useState(false)
  const [userId, setUserId] = useState<null | string>(null)

  const handleDeleteUser = async (id: string): Promise<boolean | void> => {
    setDeleting(true)
    setUserId(id)
    try {

      const docRef = doc(database, 'users', id)

      const snapshot = await getDoc(docRef);

      if (!snapshot.exists()) {
        toast.error("User not found.");
        return;
      }

      await deleteDoc(docRef)

      toast.success("User Deleted Successfully.")

      return true

    } catch (error) {
      console.log(error)
      toast.error("Something went wrong.")
      return false
    }
    finally {
      setDeleting(false)
      setUserId(null)
    }
  }

  return { handleDeleteUser, deleting, userId }

}

export default useUserDelete