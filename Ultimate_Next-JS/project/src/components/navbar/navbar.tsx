'use client'

import { signOut } from 'next-auth/react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold"
        >
          Logo
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-gray-600 hover:text-black transition"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-gray-600 hover:text-black transition"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="text-gray-600 hover:text-black transition"
          >
            Contact
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => signOut()}
            className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Sign Out
          </button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar