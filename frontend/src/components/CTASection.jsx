import React from 'react';
import { FaCheck } from "react-icons/fa";
import {Link} from 'react-router-dom';

export function CTASection() {
  const benefits = [
    'Protect students from misinformation',
    'Improve research quality and academic integrity',
    'Save time verifying educational resources',
    'Build critical thinking skills',
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-br from-[#1A2A3A] to-[#334455] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Protecting Your Educational Environment Today
            </h2>
            <p className="text-lg text-[#E5E7EB] mb-8">
              Join thousands of educators worldwide who trust EduGard AI to
              safeguard their students against educational misinformation.
            </p>
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <div className="bg-[#3FBAC2] rounded-full p-1 mr-3">
                    <FaCheck size={16} className="text-white" />
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to='/login'>
              <button className="bg-white text-[#1A2A3A] hover:bg-[#E5E7EB] px-8 py-3 rounded-md font-medium text-lg transition-colors">
                Start Free Trial
              </button>
              </Link>
              <button className="bg-transparent hover:bg-[#3FBAC2] border border-white text-white px-8 py-3 rounded-md font-medium text-lg transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
          <div className="flex-1 bg-[#1A2A3A] p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">
              Sign up for EduGard AI
            </h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#E5E7EB] mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-md bg-[#334455] border border-[#3FBAC2] text-white placeholder-[#3FBAC2] focus:outline-none focus:ring-2 focus:ring-[#3FBAC2]"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#E5E7EB] mb-1">
                  Work Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-md bg-[#334455] border border-[#3FBAC2] text-white placeholder-[#3FBAC2] focus:outline-none focus:ring-2 focus:ring-[#3FBAC2]"
                  placeholder="your@organization.edu"
                />
              </div>
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-[#E5E7EB] mb-1">
                  Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  className="w-full px-4 py-3 rounded-md bg-[#334455] border border-[#3FBAC2] text-white placeholder-[#3FBAC2] focus:outline-none focus:ring-2 focus:ring-[#3FBAC2]"
                  placeholder="School or institution name"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white text-[#1A2A3A] hover:bg-[#E5E7EB] px-6 py-3 rounded-md font-medium transition-colors"
              >
                Get Started
              </button>
              <p className="text-sm text-[#E5E7EB] text-center">
                No credit card required. 14-day free trial.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
