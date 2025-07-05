import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#1A2A3A] text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">
              EduGard<span className="text-[#3AB0FF]">AI</span>
            </h3>
            <p className="text-[#A0AEC0] mb-4">
              Protecting educational integrity through advanced AI verification
              technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#A0AEC0] hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675..."/>
                </svg>
              </a>
              <a href="#" className="text-[#A0AEC0] hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761..."/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              {['Features', 'Pricing', 'Case Studies', 'Reviews'].map(item => (
                <li key={item}>
                  <a href="#" className="text-[#A0AEC0] hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {['Blog', 'Documentation', 'Research', 'Webinars'].map(item => (
                <li key={item}>
                  <a href="#" className="text-[#A0AEC0] hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {['About Us', 'Careers', 'Contact', 'Media Kit'].map(item => (
                <li key={item}>
                  <a href="#" className="text-[#A0AEC0] hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#2D3748] flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#A0AEC0] text-sm">
            &copy; 2023 EduGard AI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(link => (
              <a key={link} href="#" className="text-[#A0AEC0] hover:text-white text-sm transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
