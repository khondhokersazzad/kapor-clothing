"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Logging in with:", { email, password });
  };

  return (
    <main className="flex min-h-screen bg-white">
      {/* --- Left Side: Brand Imagery (Hidden on Mobile) --- */}
      <div className="relative hidden w-1/2 lg:block">
        <Image
          src="/login-side.jpg"
          alt="Kapor Editorial"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-16 left-16 text-white max-w-md">
          <div className="mb-4">
            <span className="text-xs uppercase tracking-[0.3em] text-white/80 font-medium">
              Spring Collection 2024
            </span>
          </div>
          <h2 className="text-5xl font-light leading-[1.1] mb-4 font-serif">
            The Art of
            <span className="italic block">Dressing.</span>
          </h2>
          <p className="text-white/90 text-sm leading-relaxed tracking-wide">
            Discover timeless elegance in every piece. Crafted for those who
            appreciate the finer details.
          </p>
        </div>

        {/* Floating Logo */}
        <div className="absolute top-12 left-16">
          <Link
            href="/"
            className="text-2xl font-black tracking-tighter text-white"
          >
            KAPOR
          </Link>
        </div>
      </div>

      {/* --- Right Side: Enhanced Login Form --- */}
      <div className="flex w-full flex-col justify-center px-8 md:px-16 lg:w-1/2 xl:px-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="mx-auto w-full max-w-md">
          {/* Mobile Logo */}
          <div className="mb-12 text-center lg:hidden">
            <Link
              href="/"
              className="text-3xl font-black tracking-tighter text-gray-900"
            >
              KAPOR
            </Link>
          </div>

          {/* Welcome Section */}
          <div className="mb-12 text-center lg:text-left">
            <div className="mb-6">
              <span className="text-xs uppercase tracking-[0.25em] text-gray-400 font-semibold">
                Member Access
              </span>
            </div>
            <h1 className="text-4xl font-light text-gray-900 mb-4 tracking-tight">
              Welcome Back
            </h1>
            <p className="text-gray-600 leading-relaxed">
              Sign in to access your personal collection, saved items, and
              exclusive member benefits.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Email Field */}
            <div className="group">
              <label className="block text-xs uppercase tracking-[0.2em] font-semibold text-gray-500 mb-3">
                Email Address
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-0 border-b-2 border-gray-200 py-4 text-gray-900 placeholder-gray-400 focus:border-gray-900 focus:outline-none transition-all duration-300 text-lg"
                  placeholder="your.email@example.com"
                />
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gray-900 transition-all duration-300 group-focus-within:w-full"></div>
              </div>
            </div>

            {/* Password Field */}
            <div className="group">
              <div className="flex items-center justify-between mb-3">
                <label className="block text-xs uppercase tracking-[0.2em] font-semibold text-gray-500">
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-xs text-gray-500 hover:text-gray-900 transition-colors tracking-wide underline underline-offset-4"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-transparent border-0 border-b-2 border-gray-200 py-4 text-gray-900 placeholder-gray-400 focus:border-gray-900 focus:outline-none transition-all duration-300 text-lg"
                  placeholder="••••••••••••"
                />
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gray-900 transition-all duration-300 group-focus-within:w-full"></div>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between py-2">
              <label className="flex items-center cursor-pointer group">
                <input type="checkbox" className="sr-only" />
                <div className="relative">
                  <div className="w-5 h-5 border-2 border-gray-300 rounded transition-all duration-200 group-hover:border-gray-400"></div>
                  <div className="absolute inset-0 w-5 h-5 bg-gray-900 rounded opacity-0 transition-opacity duration-200 group-hover:opacity-10"></div>
                </div>
                <span className="ml-3 text-sm text-gray-600 tracking-wide">
                  Keep me signed in
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="group relative w-full bg-gray-900 py-5 text-white transition-all duration-300 hover:bg-gray-800 active:scale-[0.98] overflow-hidden"
            >
              <span className="relative z-10 text-sm font-semibold tracking-[0.15em] uppercase">
                Enter Your Account
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            {/* Divider */}
            <div className="relative my-10">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              
            </div>

            
          </form>

          {/* Sign Up Link */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-2">New to Kapor?</p>
            <Link
              href="/register"
              className="inline-block text-gray-900 font-semibold tracking-wide hover:underline underline-offset-4 transition-all duration-200"
            >
              Create Your Account →
            </Link>
          </div>

          {/* Back to Home - Mobile */}
          <div className="mt-8 text-center lg:hidden">
            <Link
              href="/"
              className="text-xs uppercase tracking-[0.2em] text-gray-400 hover:text-gray-600 transition-colors"
            >
              ← Back to Store
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
