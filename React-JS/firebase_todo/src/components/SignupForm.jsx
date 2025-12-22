import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from './Button'
import { Auth } from "../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import Loader from "./Loader";


const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSignup = async (e) => {
    e.preventDefault();

    setLoading(true)

    if (!email.trim() || !password.trim()) {
      toast.error("Please fill all fields");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be 6+ characters");
      return;
    }

    try {
      const { user } = await createUserWithEmailAndPassword(
        Auth,
        email,
        password
      );

      Auth.signOut()
      navigate('/login')
      setLoading(false)

      toast.success("Account created successfully");
      console.log("User created:", user);

    } catch (error) {
      setLoading(false)
      toast.error(error.message);
      console.log(error.message);
    }
  };

  return (

    <>
      {
        loading ? <div className='h-[80vh] flex justify-center items-center'><Loader /></div> :

          <div className="h-[calc(90vh-120px)] flex items-center justify-center px-4">
            <div className="w-full max-w-md shadow-xl p-8 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl">

              <h2 className="text-3xl font-semibold text-center mb-6 text-primary-text">
                Signup
              </h2>

              <form onSubmit={handleSignup} className="space-y-5">

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

                {/* BUTTON */}
                <Button text="Signup" />

              </form>

              <p className="text-center text-primary-text mt-6">
                Already have an account?{" "}
                <Link to="/login" className="font-medium hover:underline text-secondary-text">
                  Login
                </Link>
              </p>

            </div>
          </div>
      }
    </>

  );
};

export default SignupForm;