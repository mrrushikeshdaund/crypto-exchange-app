import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-6">
      <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-lg p-8">
        {/* Header */}
        <h1 className="text-3xl font-bold text-white text-center">
          Welcome Back 👋
        </h1>
        <p className="text-gray-400 text-center mt-2">
          Login to continue trading on{" "}
          <span className="text-yellow-400 font-semibold">CryptoX</span>
        </p>

        {/* Form */}
        <form className="mt-8 space-y-5">
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
              placeholder="you@example.com"
              className="mt-2 w-full px-4 py-3 rounded-xl bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>

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
              placeholder="********"
              className="mt-2 w-full px-4 py-3 rounded-xl bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>

          {/* Forgot Password */}
          <div className="flex justify-between items-center text-sm text-gray-400">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-yellow-400" /> Remember
              me
            </label>
            <Link
              to="/forgot-password"
              className="text-yellow-400 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-2 my-6">
          <div className="h-px flex-1 bg-gray-600"></div>
          <span className="text-gray-400 text-sm">OR</span>
          <div className="h-px flex-1 bg-gray-600"></div>
        </div>

        {/* Sign Up Link */}
        <p className="text-center text-gray-400 text-sm">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-yellow-400 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
