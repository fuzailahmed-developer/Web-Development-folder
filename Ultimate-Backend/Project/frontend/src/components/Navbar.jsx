import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <h1 className="text-2xl font-bold">Logo</h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6">
            <li>
              <a href="/" className="hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-400">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-blue-400">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-400">
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden flex flex-col gap-4 py-4">
            <li>
              <a href="/" className="block hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="block hover:text-blue-400">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="block hover:text-blue-400">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="block hover:text-blue-400">
                Contact
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;