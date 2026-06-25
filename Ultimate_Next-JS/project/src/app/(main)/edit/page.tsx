'use client'

import { useUser } from '@/context/user.context'
import axios from 'axios'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function EditProfilePage() {
  const { user, status } = useUser()

  const [name, setName] = useState<string>('')
  const [image, setImage] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [backendImage, setBackendImage] = useState<Blob | null>(null)



  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0]

    if (!file) return

    setBackendImage(file)

    const imageUrl = URL.createObjectURL(file)
    setImage(imageUrl)
  }

  const handleSave = async (
    e: React.FormEvent
  ) => {
    e.preventDefault()

    setLoading(true)

    try {

      const formData = new FormData()
      formData.append('name', name)
      if (backendImage) {
        formData.append('image', backendImage)
      }

      const result = await axios.post('/api/edit', formData)
    }

    catch (error) {
      console.log(error)
    }

    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (user) {
      setName(user.name || '')
      setImage(user.image || null)
    }
  }, [user])

  if (status === "loading") {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-8">
          Edit Profile
        </h1>

        <form
          onSubmit={handleSave}
          className="space-y-6"
        >
          {/* Profile Image */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center">
              {image ? (
                <Image
                  src={image}
                  alt="Profile"
                  width={120}
                  height={120}
                  className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg"
                  priority
                />
              ) : (
                <div className="w-28 h-28 rounded-full bg-blue-600 flex items-center justify-center text-white text-4xl font-bold uppercase shadow-lg">
                  {name ? name[0] : 'N'}
                </div>
              )}
            </div>

            <label className="mt-4 cursor-pointer">
              <span className="bg-black text-white px-4 py-2 rounded-lg">
                Change Photo
              </span>

              <input
                type="file"
                accept=".jpg, .jpeg, .png, .webp"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>

          {/* Name */}
          <div>
            <label className="block mb-2 font-medium">
              Full Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Save Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading && (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            )}

            {loading
              ? 'Saving Changes...'
              : 'Save Changes'}
          </button>
        </form>
      </div>
    </div>
  )
}