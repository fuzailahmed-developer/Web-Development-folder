'use client'
import React, { useEffect, useState } from 'react'
import type { UserType } from '../types/user'

type ApiResponse = {
  users: UserType[]
}

const useFetch = (url: string) => {
  const [error, setError] = useState<null | string>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<UserType[]>([])

  const getUsers = async (): Promise<void> => {
    setError(null)
    setLoading(true)
    try {
      const res = await fetch(url)
      console.log('res', res);

      if (!res.ok) {
        throw new Error(`HTTP Error: ${res.status}`)
      }

      const { users }: ApiResponse = await res.json()
      setData(users)
    }

    catch (error) {
      console.log(error);
      setError('Error while fetching data...!')
    }

    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getUsers()
  }, [url])

  return { error, loading, data }

}

export default useFetch