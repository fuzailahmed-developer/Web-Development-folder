import { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-blue-600"
          >
            MyApp
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Home
            </Link>

            <Link
              to="/users"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Users
            </Link>

            <Link
              to="/services"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Services
            </Link>

            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Contact
            </Link>

            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
              Login
            </button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t">

            <Link
              to="/"
              className="block text-gray-700 hover:text-blue-600"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="block text-gray-700 hover:text-blue-600"
            >
              About
            </Link>

            <Link
              to="/services"
              className="block text-gray-700 hover:text-blue-600"
            >
              Services
            </Link>

            <Link
              to="/contact"
              className="block text-gray-700 hover:text-blue-600"
            >
              Contact
            </Link>

            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Login
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;