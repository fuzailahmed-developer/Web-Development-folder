import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [fields, setFields] = useState({
    username: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const clearMessage = () => {
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:2000/register",
        fields
      );

      console.log(data);

      setMessage(data.message);

      setFields({
        username: "",
        password: "",
      });

      clearMessage();
    }
    catch (error) {
      const message =
        error.response?.data?.message ||
        error.message ||
        "Something went wrong";
      setMessage(message);
      clearMessage();
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      setError(null);

      try {
        const { data } = await axios.get("http://localhost:2000");
        setData(data);
      }
      catch (error) {
        if (!navigator.onLine) {
          setError("No Internet Connection");
        } else {
          setError(error.message);
        }
      }
      finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="w-14 h-14 border-4 border-white border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6">
        <div className="bg-red-500/20 border border-red-500 text-red-300 px-6 py-4 rounded-xl text-xl font-semibold">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center p-6">
      {message && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-6 py-3 rounded-xl shadow-xl font-medium z-50">
          {message}
        </div>
      )}

      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8">
        {/* User Info Card */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-white shadow-2xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">
              Welcome 👋
            </h1>

            <p className="text-slate-300">
              User information fetched from the server.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white/5 hover:bg-white/10 transition-all duration-300 p-5 rounded-2xl border border-white/10">
              <span className="text-blue-300 font-semibold">
                Name:
              </span>{" "}
              {data.name}
            </div>

            <div className="bg-white/5 hover:bg-white/10 transition-all duration-300 p-5 rounded-2xl border border-white/10">
              <span className="text-blue-300 font-semibold">
                Age:
              </span>{" "}
              {data.age}
            </div>
          </div>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl p-8 shadow-2xl"
        >
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-2">
            Create Account
          </h2>

          <p className="text-center text-slate-500 mb-8">
            Fill in your details below
          </p>

          <div className="mb-5">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-slate-700 mb-2"
            >
              Username
            </label>

            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={fields.username}
              onChange={handleInputChange}
              autoFocus
              className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl outline-none transition focus:ring-4 focus:ring-blue-100 focus:border-blue-500"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-700 mb-2"
            >
              Password
            </label>

            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={fields.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl outline-none transition focus:ring-4 focus:ring-blue-100 focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-semibold py-3 rounded-xl transition-all duration-200 shadow-lg"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;