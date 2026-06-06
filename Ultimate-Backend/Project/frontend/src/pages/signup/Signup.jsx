import { useState } from "react";
import { Link } from "react-router";
import toast from "react-hot-toast";

const Signup = () => {

  const [profileImage, setProfileImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false)

  const [formInputs, setFormInputs] = useState({
    firstName: '',
    lastName: '',
    userName: '',
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

  const clearForm = () => {
    setFormInputs({
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      password: ''
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (isLoading) return

    setIsLoading(true)

    try {

      const API_URL = import.meta.env.VITE_API_URL

      const formData = new FormData()
      formData.append('firstName', formInputs.firstName)
      formData.append('lastName', formInputs.lastName)
      formData.append('userName', formInputs.userName)
      formData.append('email', formInputs.email)
      formData.append('password', formInputs.password)

      if (profileImage) {
        formData.append('profileImage', profileImage)
      }

      console.log(formData);

      const res = await fetch(`
        ${API_URL}/api/signup
      `, {
        method: 'POST',
        credentials: 'include',
        body: formData
      })

      const data = await res.json()

      if (!res.ok) {
        toast.error(data.message)
        console.log(data);
        return
      }

      toast.success(data.message)
      console.log(data);
      clearForm()
      setProfileImage(null)
    }

    catch (error) {
      console.log(error.message);
    }

    finally {
      setIsLoading(false)
    }


  }

  return (
    <div className="w-full min-h-screen bg-linear-to-br from-indigo-600 via-purple-600 to-pink-500 flex justify-center items-center p-4">
      <div className="w-full max-w-lg bg-white/10 min-h-60 backdrop-blur-lg border border-white/20 shadow-2xl rounded-3xl p-8">

        <h1 className="text-2xl sm:text-4xl font-bold text-white text-center mb-2">
          Create Account
        </h1>

        <p className="text-center text-gray-200 mb-8">
          Join us and start your journey
        </p>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Profile Image */}
          <div className="flex justify-center flex-col items-center">
            <label
              htmlFor="profile"
              className="cursor-pointer group"
            >
              <div
                className="w-28 h-28 rounded-full bg-white/20 hover:bg-white/40 transition duration-300 border-2 border-dashed border-white flex justify-center items-center overflow-hidden"
              >

                {
                  profileImage ?
                    (
                      <img
                        src={URL.createObjectURL(profileImage)}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    )
                    :
                    (
                      <span className="text-white text-sm text-center px-2">
                        Upload Profile
                      </span>
                    )
                }
              </div>
            </label>

            <input
              type="file"
              name="profileImage"
              id="profile"
              className="hidden"
              accept=".jpg,.jpeg,.png,.webp"
              onChange={(e) => {

                const file = e.target.files[0]

                if (!file) return

                setProfileImage(file)

              }}
            />

          </div>

          {/* Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-white/20 outline-none focus:ring-2 focus:ring-white"
              autoComplete={"off"}
              value={formInputs.firstName}
              onChange={handleInputChange}
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-white/20 outline-none focus:ring-2 focus:ring-white"
              autoComplete={"off"}
              value={formInputs.lastName}
              onChange={handleInputChange}
            />
          </div>

          {/* UserName */}
          <input
            type="text"
            name="userName"
            placeholder="Username"
            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-white/20 outline-none focus:ring-2 focus:ring-white"
            autoComplete={"off"}
            value={formInputs.userName}
            onChange={handleInputChange}
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-white/20 outline-none focus:ring-2 focus:ring-white"
            autoComplete={"off"}
            value={formInputs.email}
            onChange={handleInputChange}
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-white/20 outline-none focus:ring-2 focus:ring-white"
            autoComplete={"off"}
            value={formInputs.password}
            onChange={handleInputChange}
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-white text-purple-700 font-semibold rounded-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            disabled={isLoading}
          >
            {isLoading ? 'Creating Up...' : 'Create Account'}
          </button>

          {/* Login Link */}

          <p className="text-center text-gray-200">
            Already have an account?{" "}
            <span className="font-semibold text-white cursor-pointer hover:underline">
              <Link to={'/login'}>
                Login
              </Link>
            </span>
          </p>

        </form>

      </div>
    </div>
  )
}

export default Signup

