import { useState } from "react";
import { Link } from "react-router";

const Login = () => {

  const [formInputs, setFormInputs] = useState({
    email: '',
    password: ''
  })

  const handleInputChange = (e) => {
    const { value, name } = e.target

    setFormInputs({
      ...formInputs,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {

      const API_URL = import.meta.env.VITE_API_URL

      const res = await fetch(`
        ${API_URL}/api/login
      `, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(formInputs)
      })

      const data = await res.json()

      console.log(data);

    } catch (error) {
      console.log(error.response.data.message || error.message);
    }
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-600 via-purple-600 to-pink-500 p-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl">
        <h1 className="text-4xl font-bold text-center text-white mb-2">
          Welcome Back
        </h1>

        <p className="text-center text-gray-200 mb-8">
          Login to your account
        </p>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Username or Email */}
          <div>
            <label className="block text-white mb-2">
              Username or Email
            </label>

            <input
              type="text"
              placeholder="Enter username or email"
              className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-white/20 outline-none focus:ring-2 focus:ring-white"
              name="email"
              value={formInputs.email}
              onChange={handleInputChange}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-white mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-white/20 outline-none focus:ring-2 focus:ring-white"
              name="password"
              value={formInputs.password}
              onChange={handleInputChange}
            />
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <Link
              to="/forgot-password"
              className="text-sm text-gray-200 hover:text-white"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 bg-white text-purple-700 font-semibold rounded-xl hover:scale-[1.02] transition-all duration-300"
          >
            Login
          </button>

          {/* Signup Link */}
          <p className="text-center text-gray-200">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-semibold text-white hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;