import { useContext } from "react";
import AuthContext from "../../context/auth/auth.context";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";


const Home = () => {
  const { user, getCurrentUser } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/api/logout`, {
        method: "POST",
        credentials: "include",
      });

      await getCurrentUser()

      toast.success("Logout Successful");

      navigate("/login");

    }

    catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">

        {/* Profile Image */}
        <div className="flex justify-center">
          {user?.profileImage ? (
            <img
              src={user.profileImage}
              alt="Profile"
              className="w-28 h-28 rounded-full object-cover border-4 border-purple-500"
            />
          ) : (
            <div className="w-28 h-28 rounded-full bg-purple-500 text-white flex items-center justify-center text-4xl font-bold">
              {user?.firstName?.charAt(0).toUpperCase()}
            </div>
          )}
        </div>

        {/* Heading */}
        <div className="text-center mt-4">
          <h1 className="text-2xl font-bold text-gray-800">
            Welcome, {user?.firstName} 👋
          </h1>
          <p className="text-gray-500">
            Logged in successfully
          </p>
        </div>

        {/* User Details */}
        <div className="mt-6 space-y-3">
          <div className="bg-slate-50 p-3 rounded-lg">
            <span className="font-semibold">First Name:</span>{" "}
            {user?.firstName}
          </div>

          <div className="bg-slate-50 p-3 rounded-lg">
            <span className="font-semibold">Last Name:</span>{" "}
            {user?.lastName}
          </div>

          <div className="bg-slate-50 p-3 rounded-lg">
            <span className="font-semibold">Username:</span>{" "}
            {user?.userName}
          </div>

          <div className="bg-slate-50 p-3 rounded-lg">
            <span className="font-semibold">Email:</span>{" "}
            {user?.email}
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="w-full mt-6 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;