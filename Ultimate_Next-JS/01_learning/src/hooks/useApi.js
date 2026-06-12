'use client';
import React, { useEffect, useState } from 'react'

const useApi = (url) => {
  const [data, setData] = useState(null)
  const [err, setErr] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    try {
      setErr(null)
      setLoading(true)

      const res = await fetch(url)

      if (!res.ok) {
        throw new Error('Something went wrong')
      }

      const data = await res.json()
      setData(data)
    }

    catch (error) {
      if (!navigator.onLine) {
        setErr('No internet connection')
      }
      else {
        setErr(error.message)
      }
    }

    finally {
      setLoading(false)
    }
  }

  useEffect(() => {

    fetchData()

  }, [url])

  return { loading, err, data }

}

export default useApi