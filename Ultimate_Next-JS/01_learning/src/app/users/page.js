"use client";

import useApi from "@/hooks/useApi";
import Link from "next/link";

const Users = () => {
  const { loading, data, err } = useApi(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[80vh]">
        <p className="text-xl font-semibold">Loading...</p>
      </div>
    );
  }

  if (err) {
    return (
      <div className="flex justify-center items-center min-h-[80vh]">
        <p className="text-red-500 font-semibold">
          Error while fetching API...
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-8">
        Users
      </h1>

      {data ? (
        <ul className="space-y-4">
          {data.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition"
            >
              <div>
                <h2 className="font-semibold text-lg">
                  {item.username}
                </h2>
                <p className="text-sm text-gray-500">
                  {item.email}
                </p>
              </div>

              <Link href={'/users/'+item.id}>
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
                >
                  More Details
                </button>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">
          No users available
        </p>
      )}
    </div>
  );
};

export default Users;