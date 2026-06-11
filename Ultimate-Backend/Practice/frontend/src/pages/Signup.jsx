import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router"

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
  });

  const [profileImage, setProfileImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const userFormData = new FormData();

    userFormData.append("firstName", formData.firstName);
    userFormData.append("lastName", formData.lastName);
    userFormData.append("userName", formData.userName);
    userFormData.append("email", formData.email);
    userFormData.append("password", formData.password);

    if (profileImage) {
      userFormData.append("profileImage", profileImage);
    }

    handleSignup(userFormData)

  };

  const handleSignup = async (userFormData) => {
    if (loading) return

    setLoading(true)

    try {
      const API_URL = import.meta.env.VITE_API_URL

      const res = await fetch(
        `${API_URL}/api/signup`, {
        method: "POST",
        credentials: 'include',
        body: userFormData
      }
      )

      const data = await res.json()

      if (!res.ok) {
        toast.error(data?.message)
        return
      }

      toast.success(data?.message)
      navigate('/login')
    }

    catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }

    finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6">

        <h2 className="text-2xl font-bold text-center mb-6">
          Create Account
        </h2>

        {/* Profile Image */}
        <div className="flex flex-col items-center mb-6">
          <label className="cursor-pointer">
            <input
              type="file"
              accept=".jpg,.jpeg,.png,.webp"
              className="hidden"
              onChange={handleImageChange}
            />

            <div className="w-24 h-24 rounded-full border-2 border-dashed flex items-center justify-center overflow-hidden">
              {preview ? (
                <img
                  src={preview}
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-sm text-gray-400">
                  Upload
                </span>
              )}
            </div>
          </label>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">

          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <input
            type="text"
            name="userName"
            placeholder="Username"
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
          >
            {
              loading ? 'Sign up...' : 'Signup'
            }
          </button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-5">
          have an account?{" "}
          <Link to={'/login'}>
            <span className="font-medium text-black cursor-pointer hover:underline">
              Login
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}