"use client";

import { useUser } from "@/context/user.context";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const { user, status } = useUser()

  console.log(user);

  const router = useRouter()

  if (status === "loading") {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <div className="flex flex-col items-center gap-4">

          <div className="flex items-center justify-center">
            {user?.image ? (
              <Image
                src={user.image}
                alt="Profile"
                width={120}
                height={120}
                className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg"
                priority
              />
            ) : (
              <div className="w-28 h-28 rounded-full bg-blue-600 flex items-center justify-center text-white text-4xl font-bold uppercase shadow-lg">
                {user?.name
                  ? user.name[0]
                  : "N"}
              </div>
            )}
          </div>

          <h1 className="text-2xl font-bold">
            {user?.name || "Guest User"}
          </h1>

          <p className="text-gray-500">
            {user?.email || "No Email"}
          </p>

          <div className="flex gap-4 mt-4">
            <button
              className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              onClick={() => router.push('/edit')}
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}