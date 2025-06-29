import React, { useState, useEffect } from "react";
import { 
  FaHome, 
  FaRegListAlt, 
  FaTimes,
  FaBars,
  FaMoon,
  FaSun
} from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import { IoMdBook } from "react-icons/io";
import { LuTriangleAlert } from "react-icons/lu";
import { useNavigate, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [username, setUsername] = useState("");

  // Check screen size and handle dark mode
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setIsOpen(!mobile);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) setDarkMode(savedTheme === 'dark');

    // Get username from localStorage
    setUsername(localStorage.getItem('username') || "User");

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Apply dark mode class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const menuItems = [
    {
      icon: <FaHome className="text-lg" />,
      label: "Dashboard",
      path: "/dashboard",
      active: location.pathname === '/dashboard'
    },
    {
      icon: <FaRegListAlt className="text-lg" />,
      label: "Text Scanner",
      path: "/scan-text",
      active: location.pathname === '/scan-text'
    },
    {
      icon: <FiUpload className="text-lg" />,
      label: "Doc Checker",
      path: "/upload-doc",
      active: location.pathname === '/upload-doc'
    },
    {
      icon: <IoMdBook className="text-lg" />,
      label: "Education",
      path: "/educate",
      active: location.pathname === '/educate'
    },
    {
      icon: <LuTriangleAlert className="text-lg" />,
      label: "Support",
      path: "/support",
      active: location.pathname === '/support'
    }
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleNavigation = (path) => {
    navigate(path);
    if (isMobile) setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className={`fixed z-40 top-4 left-4 p-2 rounded-md bg-green-500 text-white shadow-lg transition-all
          ${isOpen ? 'ml-64' : ''} md:hidden`}
        aria-label="Toggle sidebar"
      >
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Sidebar Overlay */}
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 backdrop-blur-sm"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed z-40 h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col
          transition-all duration-300 ease-in-out shadow-lg
          ${isOpen ? 'left-0' : '-left-64'} 
          w-64 md:left-0`}
      >
        {/* Logo Section */}
        <div 
          className="logo flex items-center gap-3 p-6 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          onClick={() => handleNavigation('/dashboard')}
        >
          <h1 className="font-bold text-xl text-gray-800 dark:text-white">EduGuard AI</h1>
        </div>

        {/* Dynamic Greeting */}
        <div className="px-6 pb-2">
          <span className="block text-sm text-gray-500 dark:text-gray-400">Hello,</span>
          <span className="block font-bold text-lg text-gray-800 dark:text-white truncate">{username}</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 py-6 overflow-y-auto">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => handleNavigation(item.path)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all
                    ${item.active 
                      ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 font-medium' 
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
                    }`}
                >
                  <span className={`${item.active ? 'text-green-600 dark:text-green-300' : 'text-gray-500 dark:text-gray-400'}`}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Settings Section */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={toggleDarkMode}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            {darkMode ? (
              <>
                <FaSun className="text-yellow-400" />
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <FaMoon className="text-indigo-600" />
                <span>Dark Mode</span>
              </>
            )}
          </button>
        </div>

        {/* Footer Section */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700 mt-auto">
          <div className="text-xs text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} EduGuard AI
          </div>
        </div>
      </aside>

      {/* Main Content Margin Adjustment */}
      <div className={`transition-all duration-300 ${isOpen ? 'md:ml-64' : 'md:ml-0'}`} />
    </>
  );
}