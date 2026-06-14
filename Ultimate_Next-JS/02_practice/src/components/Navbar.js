"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {

  const router = useRouter()

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600"
        >
          MyApp
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>

          <Link href="/about" className="hover:text-blue-600 transition">
            About
          </Link>

          <Link href="/services" className="hover:text-blue-600 transition">
            Services
          </Link>

          <Link href="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <button
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition"
            onClick={() => router.push('/about')}
          >
            Go to Google
          </button>

          <Link
            href="#"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;