import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Auth } from "../utils/firebase";
import { FaLeaf } from "react-icons/fa";
import Loader from "./Loader";


const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true)

    if (!email.trim() || !password.trim()) {
      setLoading(false)
      toast.error("Please Fill All Fields...!")
      return;
    }

    if (password.trim().length < 6) {
      setLoading(false)
      toast.error('Password should be at least 6 characters')
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(Auth, email, password);
      setLoading(false)
      toast.success("Login Successfully...!")
    } catch (error) {
      setLoading(false)
      switch (error.code) {
        case "auth/user-not-found":
          toast.error("No account found with this email.");
          break;

        case "auth/wrong-password":
          toast.error("Incorrect password. Try again.");
          break;

        case "auth/invalid-email":
          toast.error("Invalid email address.");
          break;

        case "auth/too-many-requests":
          toast.error("Too many failed attempts. Try again later.");
          break;

        default:
          toast.error("Login failed. Try again.");
          break;
      }
    }

  };

  return (


    <>
      {
        loading ? <div className='h-[80vh] flex justify-center items-center'><Loader /></div> :
          <div className="h-[calc(90vh-120px)] flex items-center justify-center  px-4">
            <div className="w-full max-w-md shadow-xl p-8 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl">

              <h2 className="text-3xl font-semibold text-center mb-6 text-primary-text ">
                Login
              </h2>

              <form onSubmit={handleLogin} className="space-y-5">

                {/* EMAIL */}
                <div>
                  <label className="block mb-1 text-primary-text font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* PASSWORD */}
                <div>
                  <label className="block mb-1 text-primary-text font-medium">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="••••••••"
                    required
                  />
                </div>

                {/* LOGIN BUTTON */}
                <Button text={'Login'} />

              </form>

              {/* REGISTER LINK */}
              <p className="text-center text-primary-text mt-6">
                Don’t have an account?{" "}
                <Link
                  to="/signup"
                  className="text-secondary-text font-medium hover:underline"
                >
                  Register
                </Link>
              </p>

            </div>
          </div>
      }
    </>



  );
};

export default LoginForm;
