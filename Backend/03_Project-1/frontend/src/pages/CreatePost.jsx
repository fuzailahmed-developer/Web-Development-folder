import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const CreatePost = () => {
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  const [preview, setPreview] = useState(null)

  const handleImageChange = (e) => {
    const file = e.target.files[0]

    if (file) {
      setPreview(URL.createObjectURL(file))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)

    try {
      const formData = new FormData(e.target)

      const res = await fetch('http://localhost:3232/create-post', {
        method: 'POST',
        body: formData,
      })

      const data = await res.json()

      console.log(data)

      navigate('/feed')
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="min-h-screen bg-linear-to-br from-blue-100 via-white to-purple-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl p-8">
        
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Create Post
            </h1>
            <p className="text-gray-500 mt-2">
              Upload an image and share your thoughts
            </p>
          </div>

          <Link
            to="/feed"
            className="px-5 py-3 rounded-2xl bg-blue-600 text-white font-medium shadow-md hover:bg-blue-700 transition"
          >
            Feed
          </Link>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Image
            </label>

            <label className="flex flex-col items-center justify-center w-full min-h-55 border-2 border-dashed border-gray-300 rounded-3xl cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition overflow-hidden">
              
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-64 object-cover"
                />
              ) : (
                <div className="flex flex-col items-center py-10">
                  <span className="text-5xl mb-3">📷</span>
                  <p className="text-gray-700 font-medium">
                    Click to upload an image
                  </p>
                  <p className="text-sm text-gray-400 mt-2">
                    PNG, JPG, JPEG
                  </p>
                </div>
              )}

              <input
                type="file"
                name="image"
                accept="image/*"
                required
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Caption
            </label>

            <textarea
              name="caption"
              placeholder="Write something about your post..."
              rows="4"
              required
              className="w-full rounded-2xl border border-gray-300 px-4 py-3 text-gray-700 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-2xl font-semibold shadow-md transition duration-300 flex items-center justify-center gap-3 ${
              loading
                ? 'bg-blue-400 cursor-not-allowed text-white'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            {loading ? (
              <>
                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Uploading...
              </>
            ) : (
              'Submit Post'
            )}
          </button>
        </form>
      </div>
    </section>
  )
}

export default CreatePost