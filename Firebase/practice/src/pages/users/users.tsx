import { useNavigate } from "react-router";
import useFetchUser from "../../hooks/useFetchUsers"
import useUserDelete from "../../hooks/useUserDelete";

const UsersScreen = () => {

  const navigate = useNavigate()

  const { data, loading, fetchAllUsers } = useFetchUser()

  const { handleDeleteUser, deleting, userId } = useUserDelete()

  const handleDelete = async (id: string): Promise<void> => {
    try {
      const success = await handleDeleteUser(id)
      if (success ) {
        await fetchAllUsers()
      }
    } catch (error) {
      console.log(error)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-lg font-medium text-gray-600 animate-pulse">
          Loading users...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Users</h1>
          <p className="text-gray-500 mt-2">
            Total Users: {data.length}
          </p>
        </div>

        {data.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-10 text-center">
            <h2 className="text-xl font-semibold text-gray-700">
              No Users Found
            </h2>
            <p className="text-gray-500 mt-2">
              There are no users in the database.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.map((user) => (
              <div
                key={user.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6"
              >
                <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mb-4">
                  {user.fullName.charAt(0).toUpperCase()}
                </div>

                <h2 className="text-xl font-semibold text-gray-800">
                  {user.fullName}
                </h2>

                <p className="text-gray-600 mt-2">
                  📧 {user.email}
                </p>

                <p className="text-gray-500 mt-4 text-sm">
                  Joined:
                </p>

                <p className="text-gray-700 text-sm">
                  {user.createdAt?.toDate().toLocaleString()}
                </p>

                <div className="flex gap-3 mt-6">
                  <button
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition duration-300"
                    onClick={() => navigate(`/users/${user.id}`)}
                  >
                    Edit
                  </button>

                  <button
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium py-2 rounded-lg transition duration-300"
                    onClick={() => handleDelete(user.id)}
                    disabled={deleting}
                  >
                    {
                      deleting && userId == user.id ? "Deleting..." : "Delete"
                    }
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default UsersScreen