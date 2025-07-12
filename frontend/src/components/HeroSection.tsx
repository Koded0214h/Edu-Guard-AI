import React from 'react';
import { LuShieldCheck } from "react-icons/lu";
import { FiAlertTriangle } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-br from-[#FFFFFF] to-[#E5E7EB] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center bg-[#3FBAC2] text-[#1A2A3A] px-4 py-1 rounded-full text-sm font-medium">
              <LuShieldCheck size={16} className="mr-2" />
              Trusted by educators worldwide
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A2A3A] leading-tight">
              Protect Against Educational{' '}
              <span className="text-[#1A2A3A]">Misinformation</span>
            </h1>
            <p className="text-lg md:text-xl text-[#334455] max-w-2xl">
              EduGard AI helps students, educators, and institutions identify
              and combat fake educational news and information with advanced AI
              verification technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to='/login'>
              <button className="bg-[#1A2A3A] hover:bg-[#334455] text-white px-8 py-3 rounded-md font-medium text-lg transition-colors">
                Start Fact-Checking
              </button>
              </Link>
              <button className="bg-white hover:bg-[#E5E7EB] text-[#1A2A3A] border border-[#1A2A3A] px-8 py-3 rounded-md font-medium text-lg transition-colors">
               <a href="#how-it-works"> Learn More </a>
              </button>
            </div>
            <div className="flex items-center space-x-2 text-[#334455] pt-4">
              <FiAlertTriangle size={16} />
              <p className="text-sm">
                Join over 10,000 educators fighting misinformation
              </p>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-6 -left-6 w-full h-full rounded-xl bg-[#3FBAC2] transform -rotate-3"></div>
              <div className="absolute -bottom-6 -right-6 w-full h-full rounded-xl bg-[#22C55E] transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Students using EduGard AI"
                className="relative z-10 rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
