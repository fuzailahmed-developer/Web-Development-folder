"use client";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/firebase/firebase.config"
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

interface FormStatesTypes {
  fullName: string,
  email: string,
  password: string
}

const SignupScreen: React.FC = () => {

  const [formStates, setFormStates] = useState<FormStatesTypes>({
    fullName: "",
    email: "",
    password: ""
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const { name, value } = e.target

    setFormStates({
      ...formStates, [name]: value
    })

  }

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const fullName = formStates.fullName.trim()
    const email = formStates.email.trim()
    const password = formStates.password.trim()

    if (!fullName || !email || !password) {
      return toast.error("All fields are required.")
    }

    setLoading(true)

    try {

      const userCredentials = await createUserWithEmailAndPassword(auth, email, password)

      const user = userCredentials.user

      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        fullName: fullName.trim(),
        email: email.trim(),
        createdAt: serverTimestamp(),
      })

      toast.success("Account created successfully!");

      setFormStates({
        fullName: "",
        email: "",
        password: "",
      });

    } catch (error: any) {
      switch (error.code) {
        case "auth/email-already-in-use":
          toast.error("Email already exists.");
          break;

        case "auth/invalid-email":
          toast.error("Invalid email.");
          break;

        case "auth/weak-password":
          toast.error("Password should be at least 6 characters.");
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
          Create Account
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-6">
          Join us by creating a new account.
        </p>

        <form className="space-y-5" onSubmit={handleSignup}>
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              autoComplete="off"
              name="fullName"
              value={formStates.fullName}
              onChange={handleChange}
            />
          </div>


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
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password <span className="text-red-500">*</span>
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              autoComplete="off"
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
              loading ? "Creating..." : "Create Account"
            }
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  )
};

export default SignupScreen;