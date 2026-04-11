import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Feed = () => {
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState([])

  const handleFetchPost = async () => {
    setLoading(true)

    try {
      const res = await fetch('http://localhost:3232/posts')
      const result = await res.json()

      console.log(result)

      if (result.data) {
        setPosts(result.data)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    handleFetchPost()
  }, [])

  return (
    <section className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Latest Posts
            </h1>
            <p className="text-gray-500 mt-2">
              Explore what people are sharing
            </p>
          </div>

          <div className="flex gap-3">
            <Link
              to="/"
              className="px-5 py-3 rounded-2xl bg-white text-gray-700 font-medium shadow-md hover:bg-gray-200 transition"
            >
              Home
            </Link>

            <Link
              to="/create-post"
              className="px-5 py-3 rounded-2xl bg-blue-600 text-white font-medium shadow-md hover:bg-blue-700 transition"
            >
              Create Post
            </Link>
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="h-12 w-12 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
          </div>
        ) : posts.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-md p-10 text-center">
            <h2 className="text-xl font-semibold text-gray-700">
              No Posts Found
            </h2>
            <p className="text-gray-500 mt-2">
              There are no posts available right now.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <div
                key={post._id}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
              >
                <div className="h-64 overflow-hidden bg-gray-200">
                  <img
                    src={post.image}
                    alt={post.caption}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-5">
                  <p className="text-gray-700 leading-relaxed">
                    {post.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Feed