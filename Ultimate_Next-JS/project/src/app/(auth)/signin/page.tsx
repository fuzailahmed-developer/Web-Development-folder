'use client'

import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'

interface FormData {
  email: string,
  password: string
}

export default function SigninPage() {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  })
  const [loading, setLoading] = useState<boolean>(false)

  const router = useRouter()

  const { status } = useSession()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSignin = async (
    e: React.FormEvent
  ): Promise<void> => {
    e.preventDefault()

    setLoading(true)

    try {
      const result = await signIn('credentials', {
        email: formData.email,
        password: formData.password,
        redirect: false,
      })

      if (result?.error) {
        console.log(result.error)
        return
      }

      setFormData({
        email: '',
        password: '',
      })

      router.push('/')
    } finally {
      setLoading(false)
    }
  }

  if (status === 'loading') {
    return (
      <div className="flex h-screen items-center justify-center">
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-6">
          Welcome Back
        </h1>

        <form onSubmit={handleSignin} className="space-y-4">
          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="john@gmail.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-black"
              required
              autoComplete='off'
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="********"
              value={formData.password}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-black"
              required
              autoComplete='off'
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-2 rounded-lg disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading && (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            )}

            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <div className="flex items-center my-5">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="px-3 text-gray-500 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        <button
          onClick={() => {
            signIn('google', {
              callbackUrl: '/'
            })
          }}
          className="w-full border py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition"
        >
          <FcGoogle
            width={20}
            height={20}
          />

          Continue with Google
        </button>

        <p className="text-center text-sm text-gray-600 mt-5">
          Don't have an account?{' '}
          <Link
            href="/signup"
            className="font-semibold text-black hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}