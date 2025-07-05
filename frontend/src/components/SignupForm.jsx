import React from 'react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

export default function SignupForm({ switchToLogin }) {
  return (
    <div className="h-full flex flex-col justify-center text-white">
      <h2 className="text-3xl font-bold mb-6">Sign Up</h2>
      <form className="space-y-4">
        <div className="relative">
          <FaUser className="absolute left-3 top-3 text-[#A0AEC0]" />
          <input
            type="text"
            placeholder="Username"
            className="w-full pl-10 pr-4 py-3 rounded-md bg-[#1A2A3A] text-white placeholder-[#A0AEC0] border border-[#2D3748] focus:outline-none focus:ring-2 focus:ring-[#3FBAC2]"
          />
        </div>
        <div className="relative">
          <FaEnvelope className="absolute left-3 top-3 text-[#A0AEC0]" />
          <input
            type="email"
            placeholder="Email"
            className="w-full pl-10 pr-4 py-3 rounded-md bg-[#1A2A3A] text-white placeholder-[#A0AEC0] border border-[#2D3748] focus:outline-none focus:ring-2 focus:ring-[#3FBAC2]"
          />
        </div>
        <div className="relative">
          <FaLock className="absolute left-3 top-3 text-[#A0AEC0]" />
          <input
            type="password"
            placeholder="Password"
            className="w-full pl-10 pr-4 py-3 rounded-md bg-[#1A2A3A] text-white placeholder-[#A0AEC0] border border-[#2D3748] focus:outline-none focus:ring-2 focus:ring-[#3FBAC2]"
          />
        </div>
         <div className="relative">
          <FaLock className="absolute left-3 top-3 text-[#A0AEC0]" />
          <input
            type="password"
            placeholder="Confirm password"
            className="w-full pl-10 pr-4 py-3 rounded-md bg-[#1A2A3A] text-white placeholder-[#A0AEC0] border border-[#2D3748] focus:outline-none focus:ring-2 focus:ring-[#3FBAC2]"
          />
        </div>
        <button className="w-full bg-[#3FBAC2] hover:bg-[#22C55E] text-white py-3 rounded-md font-semibold transition-colors">
          <a href='/dashboard'>Sign Up </a>
        </button>
        <p className="text-sm text-[#A0AEC0] text-center mt-2">
          Already have an account?{' '}
          <button
            type="button"
            onClick={switchToLogin}
            className="text-[#3FBAC2] hover:underline focus:outline-none"
          >
            Login
          </button>
        </p>
      </form>
    </div>
  );
}
