import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className="min-h-screen bg-linear-to-br from-blue-100 via-white to-purple-100 flex items-center justify-center px-4 py-10 overflow-hidden">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-10 items-center">
        
        <div>
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-5">
            Welcome to Social App
          </span>

          <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight">
            Share Your Moments With Everyone
          </h1>

          <p className="text-gray-600 text-lg mt-6 leading-relaxed max-w-xl">
            Upload your favorite pictures, write captions, and explore posts
            shared by other users in one beautiful social feed.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              to="/create-post"
              className="px-6 py-4 bg-blue-600 text-white rounded-2xl font-semibold shadow-lg hover:bg-blue-700 hover:scale-105 transition duration-300"
            >
              Create Post
            </Link>

            <Link
              to="/feed"
              className="px-6 py-4 bg-white text-gray-800 rounded-2xl font-semibold shadow-lg hover:bg-gray-100 hover:scale-105 transition duration-300"
            >
              Explore Feed
            </Link>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative w-full max-w-md">
            
            <div className="bg-white rounded-3xl shadow-2xl p-5 -rotate-6">
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
                alt="social"
                className="w-full h-72 object-cover rounded-2xl"
              />
            </div>

            <div className="absolute -bottom-8 -right-6 bg-white rounded-3xl shadow-xl p-4 w-52">
              <p className="text-sm text-gray-500">New Post</p>
              <h3 className="font-semibold text-gray-800 mt-1">
                Beautiful Sunset
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                Shared by a user just now
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Home