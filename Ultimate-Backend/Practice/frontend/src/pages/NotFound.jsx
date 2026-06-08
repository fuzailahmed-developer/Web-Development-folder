import React from 'react'

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">

      <h1 className="text-9xl font-extrabold text-gray-300">
        404
      </h1>

      <h2 className="mt-4 text-2xl font-semibold text-gray-800">
        Page Not Found
      </h2>

      <p className="mt-2 text-gray-500 text-center max-w-md">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      <a
        href="/"
        className="mt-6 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition"
      >
        Go Home
      </a>
    </div>
  );
}

export default NotFound