import { doc, updateDoc } from "firebase/firestore"
import { useState } from "react"
import { database } from "../firebase/config"
import type { UserType } from '../types/user'

type UpdateResult = {
  message: string,
  success: boolean
}

const useUpdateUser = () => {

  const [loading, setLoading] = useState(false)

  const handleUpdateUser = async (id: string, data: UserType): Promise<UpdateResult> => {
    setLoading(true)
    try {

      if (
        !data.fullName.trim() ||
        !data.email.trim() ||
        !data.password.trim()
      ) {

        return {
          message: 'All fields are required.',
          success: false
        };
      }

      const docRef = doc(database, 'users', id)

      await updateDoc(docRef, {
        fullName: data.fullName,
        email: data.email,
        password: data.password,
      })

      return {
        message: 'Updated Successfully.',
        success: true
      }
    }
    catch (error) {
      console.log(error)
      return {
        message: 'Something went wrong.',
        success: false
      }
    }
    finally {
      setLoading(false)
    }
  }

  return { handleUpdateUser, loading }

}

export default useUpdateUser