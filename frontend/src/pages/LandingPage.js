import React from "react";
import { ArrowRight, Shield, BarChart3, Wallet } from "lucide-react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 sm:px-10 lg:px-20 py-16 md:py-24 bg-gradient-to-b from-gray-900 to-black">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
          Trade Crypto with <span className="text-yellow-400">Confidence</span>
        </h1>
        <p className="mt-6 text-base sm:text-lg text-gray-400 max-w-xl md:max-w-2xl">
          The fastest, most secure crypto exchange platform. Buy, sell, and
          manage your digital assets with ease.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            to="/signup"
            className="px-6 py-3 rounded-xl bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition text-center"
          >
            Get Started
          </Link>
          <Link
            to="/markets"
            className="px-6 py-3 rounded-xl border border-yellow-400 hover:bg-yellow-400 hover:text-black transition text-center"
          >
            Explore Markets
          </Link>
        </div>

        {/* Background Glow */}
        <div className="absolute -z-10 top-0 left-1/2 transform -translate-x-1/2 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-yellow-400/20 rounded-full blur-3xl"></div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-20 py-16 md:py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 text-center">
        <div className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-yellow-400/20 transition">
          <BarChart3 className="mx-auto text-yellow-400" size={40} />
          <h3 className="mt-4 text-lg md:text-xl font-semibold">
            Real-Time Markets
          </h3>
          <p className="mt-2 text-gray-400 text-sm md:text-base">
            Stay ahead with live charts, analytics, and real-time market data.
          </p>
        </div>
        <div className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-yellow-400/20 transition">
          <Wallet className="mx-auto text-yellow-400" size={40} />
          <h3 className="mt-4 text-lg md:text-xl font-semibold">
            Secure Wallet
          </h3>
          <p className="mt-2 text-gray-400 text-sm md:text-base">
            Store and manage your assets safely in our multi-layered wallet.
          </p>
        </div>
        <div className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-yellow-400/20 transition">
          <Shield className="mx-auto text-yellow-400" size={40} />
          <h3 className="mt-4 text-lg md:text-xl font-semibold">
            Trusted Security
          </h3>
          <p className="mt-2 text-gray-400 text-sm md:text-base">
            Advanced encryption & 24/7 monitoring to protect your funds.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-800 py-12 md:py-16 text-center px-6 sm:px-10 lg:px-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Start Trading Today 🚀
        </h2>
        <p className="mt-4 text-gray-400 text-sm sm:text-base md:text-lg">
          Join thousands of traders already using{" "}
          <span className="text-yellow-400">CryptoX</span>.
        </p>
        <Link
          to="/signup"
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition text-sm sm:text-base"
        >
          Create Free Account <ArrowRight size={20} />
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-black py-6 text-center text-gray-500 text-xs sm:text-sm border-t border-gray-800">
        © {new Date().getFullYear()} CryptoX. All Rights Reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
