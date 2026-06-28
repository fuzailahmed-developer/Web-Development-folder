import type { UserType } from "../../types/user"
import { useState } from "react";
import toast from "react-hot-toast";
import { validateUser } from "../../hooks/create_validation";
import useCreateUser from "../../hooks/useCreateUser";


const HomeScreen = () => {
  const [inputs, setInputs] = useState<UserType>({
    fullName: "",
    email: "",
    password: "",
  });

  const { loading, createUser } = useCreateUser()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleCreate = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const error = validateUser(inputs)

    if (error) {
      toast.error(error)
      return;
    }

    try {
      await createUser({
        fullName: inputs.fullName.trim(),
        email: inputs.email.trim(),
        password: inputs.password.trim()
      })
      setInputs({
        fullName: "",
        email: "",
        password: "",
      })
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Create User
        </h1>

        <form onSubmit={handleCreate} className="space-y-5">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              id="fullName"
              autoComplete="off"
              name="fullName"
              value={inputs.fullName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>

            <input
              type="text"
              placeholder="Enter your email"
              autoComplete="off"
              id="email"
              name="email"
              value={inputs.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>

            <input
              type="text"
              placeholder="Enter your password"
              autoComplete="off"
              id="password"
              name="password"
              value={inputs.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition duration-300"
            disabled={loading}
          >
            {
              loading ? "Creating..." : "Create"
            }
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomeScreen;