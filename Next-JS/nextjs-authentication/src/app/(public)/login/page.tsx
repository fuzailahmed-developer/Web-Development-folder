"use client";
import { auth } from "@/firebase/firebase.config";
import { setCookie } from "cookies-next";
import { signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

interface FormStatesTypes {
  email: string,
  password: string
}

const LoginScreen: React.FC = () => {

  const [formStates, setFormStates] = useState<FormStatesTypes>({
    email: "",
    password: ""
  })

  const router = useRouter()

  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const { name, value } = e.target

    setFormStates({
      ...formStates, [name]: value
    })

  }

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const email = formStates.email.trim()
    const password = formStates.password.trim()

    if (!email || !password) {
      return toast.error("Email and Password is required.")
    }

    setLoading(true)

    try {

      const userCredentials = await signInWithEmailAndPassword(auth, email, password)

      console.log('Login success:', userCredentials)

      const tokenVal = await userCredentials.user.getIdToken()

      setCookie('token', tokenVal, { maxAge: 60 * 60 * 3 })

      setFormStates({
        email: "",
        password: "",
      });

      toast.success("Login Successfully.")

    router.push('/')
     router.refresh()

    }
    catch (error: any) {
      switch (error.code) {
        case "auth/invalid-credential":
          toast.error("Invalid email or password.");
          break;

        case "auth/user-not-found":
          toast.error("User not found.");
          break;

        case "auth/wrong-password":
          toast.error("Incorrect password.");
          break;

        case "auth/too-many-requests":
          toast.error("Too many attempts. Please try again later.");
          break;

        default:
          toast.error(error.message);
      }
    }
    finally {
      setLoading(false)
    }

  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-6">
          Sign in to continue to your account.
        </p>

        <form className="space-y-5" onSubmit={handleLogin}>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              autoComplete="off"
              name="email"
              value={formStates.email}
              onChange={handleChange}
            />
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-sm font-medium text-gray-700">
                Password <span className="text-red-500">*</span>
              </label>

              <button
                type="button"
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            <input
              type="password"
              placeholder="Enter your password"
              autoComplete="off"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              name="password"
              value={formStates.password}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 text-white font-semibold transition hover:bg-blue-700"
            disabled={loading}
          >
            {
              loading ? "Logging..." : "Login"
            }
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="text-blue-600 font-semibold hover:underline"
          >
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;