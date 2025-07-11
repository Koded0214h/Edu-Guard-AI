import React, { useState } from 'react';
import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';

export default function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2b4c6e] via-black to-[#2b4c6e] px-4 py-8">
      <div className="w-full max-w-5xl bg-[#3FBAC2] text-white rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden relative transition-all duration-500">
        
        {/* Left Welcome Panel */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center px-6 py-10 md:py-12 z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
            {isLogin ? "WELCOME BACK!" : "HELLO SCHOLAR!"}
          </h2>
          <p className="text-sm md:text-base mb-5 md:mb-6">
            {isLogin
              ? "Login to access your EduGard account"
              : "Create an EduGard account to get started"}
          </p>
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="mt-2 px-5 py-2.5 bg-white text-[#1A2A3A] font-semibold rounded-md hover:bg-gray-100 transition"
          >
            {isLogin ? "Sign Up" : "Log In"}
          </button>
        </div>

        {/* Right Sliding Forms Panel */}
        <div className="w-full md:w-1/2 bg-[#1A2A3A] relative overflow-hidden">
          <div
            className={`w-[200%] h-full flex transition-transform duration-700 ease-in-out ${
              isLogin ? "translate-x-0" : "-translate-x-1/2"
            }`}
          >
            {/* Login Form */}
            <div className="w-1/2 px-6 py-10 md:px-8 md:py-12">
              <LoginForm switchToSignup={() => setIsLogin(false)} />
            </div>

            {/* Signup Form */}
            <div className="w-1/2 px-6 py-10 md:px-8 md:py-12">
              <SignupForm switchToLogin={() => setIsLogin(true)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
