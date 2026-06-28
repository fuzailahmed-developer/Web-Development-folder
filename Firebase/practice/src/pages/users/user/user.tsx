import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import toast from "react-hot-toast";
import useFetchUser from "../../../hooks/useFetchUser";
import useUpdateUser from "../../../hooks/useUpdateUser";

const UserScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    inputs,
    loading,
    handleChange,
    handleFetchUser,
  } = useFetchUser();

  const { handleUpdateUser, loading: Updating } = useUpdateUser()


  const handleUpdate = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    if (!id) return

    const result = await handleUpdateUser(id, inputs)

    if (result.success) {
      toast.success(result.message)
    } else {
      toast.error(result.message)
    }

  };

  useEffect(() => {
    const fetchUser = async () => {
      if (!id) {
        navigate("/users");
        return;
      }

      const success = await handleFetchUser(id);

      if (!success) {
        toast.error("User not found.");
        navigate("/users");
      }
    };

    fetchUser();
  }, [id, handleFetchUser, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-lg font-medium text-gray-600 animate-pulse">
          Loading user...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-lg mx-auto">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-blue-600 px-8 py-6">
            <h1 className="text-3xl font-bold text-white">
              User Details
            </h1>
            <p className="text-blue-100 mt-2">
              Update the user's information below.
            </p>
          </div>

          <form onSubmit={handleUpdate} className="p-8 space-y-6">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Full Name
              </label>

              <input
                type="text"
                id="fullName"
                name="fullName"
                autoComplete="off"
                placeholder="Enter your full name"
                value={inputs.fullName}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Email Address
              </label>

              <input
                type="email"
                id="email"
                name="email"
                autoComplete="off"
                value={inputs.email}
                disabled
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 bg-gray-100 text-gray-500 cursor-not-allowed px-4 py-3 outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Password
              </label>

              <input
                type="text"
                id="password"
                name="password"
                autoComplete="off"
                placeholder="Enter your password"
                value={inputs.password}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex gap-4 pt-2">
              <button
                type="submit"
                disabled={Updating}
                className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 rounded-lg transition"
              >
                {Updating ? "Updating..." : "Update User"}
              </button>

              <button
                type="button"
                className="flex-1 border border-gray-300 hover:bg-gray-100 text-gray-700 font-semibold py-3 rounded-lg transition"
                onClick={() => navigate(-1)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserScreen;