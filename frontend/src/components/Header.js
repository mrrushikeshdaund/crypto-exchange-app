import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Markets", path: "/markets" },
    { name: "Trade", path: "/trade" },
    { name: "Wallet", path: "/wallet" },
    { name: "Support", path: "/support" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-gray-900/95 backdrop-blur-md border-b border-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-wide text-yellow-400"
        >
          CryptoX
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative font-medium transition duration-300 ${
                location.pathname === link.path
                  ? "text-yellow-400"
                  : "text-gray-300 hover:text-yellow-400"
              }`}
            >
              {link.name}
              {/* Animated underline */}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-yellow-400 transition-all duration-300 ${
                  location.pathname === link.path
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/login"
            className="px-4 py-2 rounded-xl border border-yellow-400 text-sm font-medium hover:bg-yellow-400 hover:text-black transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 rounded-xl bg-yellow-400 text-black font-semibold text-sm hover:bg-yellow-300 transition"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 px-4 py-4 space-y-4 shadow-md">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block font-medium ${
                location.pathname === link.path
                  ? "text-yellow-400"
                  : "text-gray-300 hover:text-yellow-400"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <div className="flex flex-col space-y-3 pt-3 border-t border-gray-700">
            <Link
              to="/login"
              className="px-4 py-2 rounded-lg border border-yellow-400 text-center hover:bg-yellow-400 hover:text-black transition"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 rounded-lg bg-yellow-400 text-black text-center font-semibold hover:bg-yellow-300 transition"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
