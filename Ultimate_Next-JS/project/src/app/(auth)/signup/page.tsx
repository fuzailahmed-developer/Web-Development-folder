'use client'

import axios from 'axios'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'

interface FormData {
  name: string,
  email: string,
  password: string
}

export default function SignupPage() {

  const router = useRouter()

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
  })
  const [loading, setLoading] = useState<boolean>(false)

  const [err, setErr] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSignup = async (
    e: React.FormEvent
  ): Promise<void> => {
    e.preventDefault()

    setLoading(true)
    setErr('')

    try {
      await axios.post('/api/auth/register', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      })

      setFormData({
        name: '',
        email: '',
        password: '',
      })

      router.push('/signin')

    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message =
          error?.response?.data.message ||
          error.message

        setErr(message)
      } else {
        setErr('Signup: Internal server error')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-6">
          Create Account
        </h1>

        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block mb-2 font-medium">Name</label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-black"
              autoComplete='off'
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="john@gmail.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-black"
              autoComplete='off'
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Password</label>
            <input
              type="password"
              name="password"
              placeholder="********"
              value={formData.password}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-black"
              autoComplete='off'
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading && (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            )}

            {loading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>

        <div className="flex items-center my-5">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="px-3 text-gray-500 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>


        <button
          disabled={loading}
          onClick={() => {
            signIn('google', {
              callbackUrl: '/'
            })
          }}
          className="w-full border py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FcGoogle />

          Continue with Google
        </button>
        <p className="text-center text-sm text-gray-600 mt-5">
          have an account?{' '}
          <Link
            href="/signin"
            className="font-semibold text-black hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  )
}