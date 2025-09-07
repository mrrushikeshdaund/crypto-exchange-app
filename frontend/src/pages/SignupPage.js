import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../services/UsersService";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [checkBoxChecked, setCheckBoxChecked] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    if (!checkBoxChecked) {
      alert("Please agree to the Terms & Conditions");
      return;
    }
    e.preventDefault();
    // Basic validation
    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    } else {
      // Simulate successful signup
      const response = await signup({
        username: name,
        email,
        password,
      });

      console.log("Response object ", response);

      alert(response.message);

      // Reset form
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      navigate("/login");
    }
  };

  const handleCheckBox = (e) => {
    setCheckBoxChecked(e.target.checked);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-6">
      <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-lg p-8">
        {/* Header */}
        <h1 className="text-3xl font-bold text-white text-center">
          Create Account 🚀
        </h1>
        <p className="text-gray-400 text-center mt-2">
          Join <span className="text-yellow-400 font-semibold">CryptoX</span>{" "}
          and start trading today
        </p>

        {/* Form */}
        <div className="mt-8 space-y-5">
          {/* Full Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="mt-2 w-full px-4 py-3 rounded-xl bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="mt-2 w-full px-4 py-3 rounded-xl bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="mt-2 w-full px-4 py-3 rounded-xl bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-300"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="********"
              className="mt-2 w-full px-4 py-3 rounded-xl bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>

          {/* Terms */}
          <div className="flex items-center text-sm text-gray-400">
            <input
              type="checkbox"
              className="accent-yellow-400 mr-2"
              onChange={handleCheckBox}
            />
            <span>
              I agree to the{" "}
              <Link to="/terms" className="text-yellow-400 hover:underline">
                Terms & Conditions
              </Link>
            </span>
          </div>

          {/* Signup Button */}
          <button
            type="button"
            onClick={handleSignup}
            className="w-full py-3 rounded-xl bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition"
          >
            Sign Up
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-2 my-6">
          <div className="h-px flex-1 bg-gray-600"></div>
          <span className="text-gray-400 text-sm">OR</span>
          <div className="h-px flex-1 bg-gray-600"></div>
        </div>

        {/* Login Redirect */}
        <p className="text-center text-gray-400 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-yellow-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
