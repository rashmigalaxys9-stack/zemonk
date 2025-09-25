'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Glass Card Container */}
      <div className="bg-white/95 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl shadow-black/10 w-full max-w-6xl overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          
          {/* Left Side - Login Form */}
          <div className="w-full lg:w-1/2 p-8 lg:p-12">
            {/* Header */}
            <div className="text-center mb-10">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">Z</span>
                </div>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-3">
                Welcome to <span className="text-black">Zemonk</span>
              </h1>
              <p className="text-gray-600 text-lg">Access the elite tech talent platform</p>
            </div>

            {/* Login Form */}
            <form className="space-y-6">
              {/* Email Input */}
              <div>
                <label className="block text-gray-700 text-sm font-semibold uppercase tracking-wide mb-2">
                  📧 Email Address
                </label>
                <input
                  className="w-full py-3 px-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-gray-50/80"
                  type="email"
                  placeholder="your.email@domain.com"
                />
              </div>
              
              {/* Password Input */}
              <div>
                <label className="block text-gray-700 text-sm font-semibold uppercase tracking-wide mb-2">
                  🔒 Password
                </label>
                <div className="relative">
                  <input
                    className="w-full py-3 px-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-gray-50/80 pr-12"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-black"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? '👁️' : '👁️‍🗨️'}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center text-sm text-gray-600">
                  <input type="checkbox" className="h-4 w-4 text-black rounded border-gray-300 mr-2" />
                  Remember this device
                </label>
                <Link href="/forgot-password" className="text-sm text-black hover:text-gray-700 font-semibold">
                  Forgot password?
                </Link>
              </div>
              
              {/* Login Button */}
              <button
                className="w-full py-3 px-6 bg-black text-white rounded-xl font-semibold text-lg uppercase tracking-wide hover:bg-gray-800 transition-colors"
                type="button"
              >
                🚀 Login
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-4 bg-white text-gray-400 text-sm font-medium uppercase tracking-wide">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Social Login Buttons */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <button className="bg-white border border-gray-200 text-gray-700 font-semibold py-2.5 px-4 rounded-xl hover:bg-gray-50 transition-colors">
                Google
              </button>
              <button className="bg-white border border-gray-200 text-gray-700 font-semibold py-2.5 px-4 rounded-xl hover:bg-gray-50 transition-colors">
                LinkedIn
              </button>
            </div>

            {/* Signup Link */}
            <div className="text-center">
              <p className="text-gray-600 mb-2">Don't have an account yet?</p>
              <Link href="/signup" className="text-black font-bold hover:text-gray-700 underline">
                Signup →
              </Link>
            </div>
          </div>

          {/* Right Side - Premium Showcase */}
          <div className="w-full lg:w-1/2 bg-gradient-to-br from-gray-900 to-black text-white p-8 lg:p-12 flex flex-col justify-center">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-8">The Elite Tech Career Platform</h2>
              
              {/* Features */}
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="bg-blue-500 p-2 rounded-lg mr-4">⚡</div>
                  <div className="text-left">
                    <h3 className="font-bold text-lg mb-1">48-Hour Matching</h3>
                    <p className="text-gray-300 text-sm">Rapid connection with top companies</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-500 p-2 rounded-lg mr-4">👑</div>
                  <div className="text-left">
                    <h3 className="font-bold text-lg mb-1">Top 3% Talent</h3>
                    <p className="text-gray-300 text-sm">Exclusive community of experts</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-500 p-2 rounded-lg mr-4">🌎</div>
                  <div className="text-left">
                    <h3 className="font-bold text-lg mb-1">Global Reach</h3>
                    <p className="text-gray-300 text-sm">Worldwide opportunities</p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-white/10 p-3 rounded-xl">
                  <div className="text-xl font-bold">15K+</div>
                  <div className="text-xs text-gray-400">Hires</div>
                </div>
                <div className="bg-white/10 p-3 rounded-xl">
                  <div className="text-xl font-bold">98%</div>
                  <div className="text-xs text-gray-400">Success</div>
                </div>
                <div className="bg-white/10 p-3 rounded-xl">
                  <div className="text-xl font-bold">48h</div>
                  <div className="text-xs text-gray-400">Avg. Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}