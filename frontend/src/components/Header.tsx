import React, { useState } from 'react';
import { IoIosMenu } from "react-icons/io";
import { IoExitOutline } from "react-icons/io5";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#FFFFFF] py-4 px-6 md:px-12 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-[#1A2A3A]">
            EduGard<span className="text-[#3FBAC2]">AI</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#features"
            className="text-[#334455] hover:text-[#1A2A3A] font-medium transition-colors"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-[#334455] hover:text-[#1A2A3A] font-medium transition-colors"
          >
            How It Works
          </a>
          <a
            href="#testimonials"
            className="text-[#334455] hover:text-[#1A2A3A] font-medium transition-colors"
          >
            Testimonials
          </a>
          <a
            href="#faq"
            className="text-[#334455] hover:text-[#1A2A3A] font-medium transition-colors"
          >
            FAQ
          </a>
          <button  className="bg-[#1A2A3A] hover:bg-[#334455] text-white px-6 py-2 rounded-md font-medium transition-colors">
           <a href="/login"> Get Started    </a>      </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#334455]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <IoExitOutline size={24} /> : <IoIosMenu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#FFFFFF] absolute top-16 left-0 right-0 shadow-md z-50">
          <div className="flex flex-col p-4 space-y-4">
            <a
              href="#features"
              className="text-[#334455] hover:text-[#1A2A3A] font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-[#334455] hover:text-[#1A2A3A] font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#testimonials"
              className="text-[#334455] hover:text-[#1A2A3A] font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#faq"
              className="text-[#334455] hover:text-[#1A2A3A] font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <button className="bg-[#1A2A3A] hover:bg-[#334455] text-white px-6 py-2 rounded-md font-medium transition-colors w-full">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
