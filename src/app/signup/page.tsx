'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showSalaryBreakdown, setShowSalaryBreakdown] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    currentCompany: '',
    currentRole: '',
    workExperienceYears: '',
    workExperienceMonths: '',
    currentSalary: '',
    fixedSalary: '',
    variablePay: '',
    stockOptions: '',
    currentLocation: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Will integrate with backend API
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Wide Glass Card Container - Full width */}
      <div className="bg-white/95 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl shadow-black/10 w-full max-w-7xl mx-4 overflow-hidden">
        <div className="flex">
          
          {/* Left Side - Signup Form (Wider) */}
          <div className="w-full lg:w-7/12 p-8 lg:p-12">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">Z</span>
                </div>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-3">
                Join <span className="text-black">Zemonk</span>
              </h1>
              <p className="text-gray-600 text-lg">30,000+ Product Jobs Await!</p>
            </div>

            {/* Signup Form - Two Column Layout */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              
              {/* ===== LEFT-RIGHT COMBINATION: Personal Information ===== */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Column: Name */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="firstName">
                      First Name *
                    </label>
                    <input
                      className="form-input w-full py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-gray-50/80"
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="John"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                      Email Address *
                    </label>
                    <input
                      className="form-input w-full py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-gray-50/80"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john.doe@example.com"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Right Column: Contact */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="lastName">
                      Last Name *
                    </label>
                    <input
                      className="form-input w-full py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-gray-50/80"
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Doe"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="phone">
                      Phone Number *
                    </label>
                    <div className="flex gap-2">
                      <select className="form-input w-1/4 py-3 px-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-gray-50/80">
                        <option value="+91">+91</option>
                        <option value="+1">+1</option>
                        <option value="+44">+44</option>
                        <option value="+61">+61</option>
                      </select>
                      <input
                        className="form-input flex-1 py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-gray-50/80"
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="9876543210"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* ===== FULL WIDTH: Password ===== */}
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
                  Password *
                </label>
                <div className="relative">
                  <input
                    className="form-input w-full py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-gray-50/80 pr-12"
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-black transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? '👁️' : '👁️‍🗨️'}
                  </button>
                </div>
              </div>

              {/* ===== LEFT-RIGHT COMBINATION: Professional Information ===== */}
              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Professional Information</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Left Column: Company & Role */}
                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="currentCompany">
                        Current Company
                      </label>
                      <input
                        className="form-input w-full py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-gray-50/80"
                        id="currentCompany"
                        name="currentCompany"
                        type="text"
                        placeholder="Tech Corp Inc."
                        value={formData.currentCompany}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 text-sm font-semibold mb-2">
                        Total Work Experience *
                      </label>
                      <div className="flex gap-2">
                        <input
                          className="form-input w-1/2 py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-gray-50/80"
                          name="workExperienceYears"
                          type="number"
                          placeholder="Years"
                          min="0"
                          max="50"
                          required
                          value={formData.workExperienceYears}
                          onChange={handleInputChange}
                        />
                        <input
                          className="form-input w-1/2 py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-gray-50/80"
                          name="workExperienceMonths"
                          type="number"
                          placeholder="Months"
                          min="0"
                          max="11"
                          required
                          value={formData.workExperienceMonths}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Role & Salary */}
                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="currentRole">
                        Current Role
                      </label>
                      <input
                        className="form-input w-full py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-gray-50/80"
                        id="currentRole"
                        name="currentRole"
                        type="text"
                        placeholder="Senior Developer"
                        value={formData.currentRole}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="currentSalary">
                        Current Annual Salary (₹)
                      </label>
                      <input
                        className="form-input w-full py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-gray-50/80"
                        id="currentSalary"
                        name="currentSalary"
                        type="number"
                        placeholder="e.g., 1500000"
                        value={formData.currentSalary}
                        onChange={handleInputChange}
                      />
                      <button
                        type="button"
                        className="text-sm text-blue-600 hover:text-blue-800 mt-1 font-medium"
                        onClick={() => setShowSalaryBreakdown(!showSalaryBreakdown)}
                      >
                        {showSalaryBreakdown ? '- Hide Breakdown' : '+ Add Salary Breakdown'}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Salary Breakdown - Full Width */}
                {showSalaryBreakdown && (
                  <div className="bg-gray-50/80 border border-gray-200 rounded-xl p-6 mt-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Salary Breakdown (₹)</h4>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">Fixed Salary</label>
                        <input
                          className="form-input w-full py-2 px-3 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                          name="fixedSalary"
                          type="number"
                          placeholder="Base salary"
                          value={formData.fixedSalary}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">Variable Pay</label>
                        <input
                          className="form-input w-full py-2 px-3 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                          name="variablePay"
                          type="number"
                          placeholder="Bonus, incentives"
                          value={formData.variablePay}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">Stock Options</label>
                        <input
                          className="form-input w-full py-2 px-3 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                          name="stockOptions"
                          type="number"
                          placeholder="ESOP, RSU value"
                          value={formData.stockOptions}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Current Location - Full Width */}
                <div className="mt-6">
                  <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="currentLocation">
                    Current Location *
                  </label>
                  <input
                    className="form-input w-full py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-gray-50/80"
                    id="currentLocation"
                    name="currentLocation"
                    type="text"
                    placeholder="e.g., Bangalore, India"
                    required
                    value={formData.currentLocation}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Sign Up Button - Full Width */}
              <button
                className="w-full py-4 px-6 bg-black text-white rounded-xl font-semibold text-lg uppercase tracking-wide hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                type="submit"
              >
                Signup Now
              </button>
            </form>

            {/* Divider and Social Login */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-4 bg-white text-gray-400 text-sm font-medium uppercase tracking-wide">
                  Or
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <button
                type="button"
                className="bg-white border border-gray-200 text-gray-700 font-semibold py-3 px-4 rounded-xl hover:bg-gray-50 transition-all duration-300 flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              >
                <span className="text-gray-600 group-hover:text-black mr-2 transition-colors">G</span>
                Google
              </button>
              <button
                type="button"
                className="bg-white border border-gray-200 text-gray-700 font-semibold py-3 px-4 rounded-xl hover:bg-gray-50 transition-all duration-300 flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              >
                <span className="text-gray-600 group-hover:text-black mr-2 transition-colors">in</span>
                LinkedIn
              </button>
            </div>

            <div className="text-center">
              <p className="text-gray-600">
                Already have an account?{' '}
                <Link href="/login" className="text-black font-semibold hover:text-gray-700 underline">
                  Sign In
                </Link>
              </p>
            </div>
          </div>

          {/* Right Side - Benefits Showcase */}
          <div className="w-full lg:w-5/12 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-12 flex flex-col justify-start pt-46">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-8">Why Join Zemonk Elite?</h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="bg-blue-500 p-2 rounded-lg mr-4">⚡</div>
                  <div className="text-left">
                    <h3 className="font-bold text-lg mb-2">Top 3% Talent Network</h3>
                    <p className="text-gray-300 text-sm">Join the exclusive community of verified tech experts</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-500 p-2 rounded-lg mr-4">💼</div>
                  <div className="text-left">
                    <h3 className="font-bold text-lg mb-2">Premium Opportunities</h3>
                    <p className="text-gray-300 text-sm">Access high-paying remote and onsite roles</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-500 p-2 rounded-lg mr-4">🌎</div>
                  <div className="text-left">
                    <h3 className="font-bold text-lg mb-2">Global Reach</h3>
                    <p className="text-gray-300 text-sm">Connect with top companies worldwide</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 p-6 rounded-2xl">
                <div className="text-2xl font-bold text-blue-400">48h</div>
                <div className="text-sm text-gray-300">Average time to get matched</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .form-input {
          background: rgba(248, 250, 252, 0.8);
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }
        .form-input:focus {
          border-color: #000000;
          box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
          background: white;
        }
      `}</style>
    </div>
  );
}