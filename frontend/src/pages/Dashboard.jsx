import React from 'react';
import Sidebar from "../components/Sidebar";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoCloudUploadOutline } from "react-icons/io5";
import { LuTriangleAlert } from "react-icons/lu";
import { IoMdBook } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const featureCards = [
    {
      icon: <FaMagnifyingGlass className="text-green-500 text-4xl" />,
      title: "Quick Scam Check",
      description: "Paste suspicious text to scan",
      buttonText: "Scan Now",
      action: () => navigate('/scan-text'),
      bgColor: "bg-green-50"
    },
    {
      icon: <IoCloudUploadOutline className="text-green-500 text-4xl" />,
      title: "Upload Document",
      description: "Upload Files Docx, PDF, JPG, etc.",
      buttonText: "Upload Document",
      action: () => navigate('/upload-doc'),
      bgColor: "bg-blue-50"
    },
    {
      icon: <IoMdBook className="text-green-500 text-4xl" />,
      title: "Scam Education",
      description: "Learn how to avoid scams and risks",
      buttonText: "Learn Now",
      action: () => navigate('/educate'),
      bgColor: "bg-purple-50"
    },
    {
      icon: <LuTriangleAlert className="text-green-500 text-4xl" />,
      title: "Report Scam",
      description: "Report suspicious scholarship offers",
      buttonText: "Report Activity",
      action: () => navigate('/report'),
      bgColor: "bg-red-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      <Sidebar />
      <div className="hidden md:block w-px bg-gray-200"></div>

      <main className="flex-1 p-6 md:p-8">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 font-poppins leading-tight">
              YOUR ACADEMIC <br className="hidden md:block" />
              BODYGUARD AGAINST <br className="hidden md:block" />
              SCAMS
            </h1>
            <p className="text-gray-600 mt-3">
              Detect and avoid scholarship scams, fake offers and forged documents with AI
            </p>
          </div>
          
          <div className="flex items-center">
            <img
              alt="User profile"
              src='img/person.webp'
              className='w-12 h-12 rounded-full object-cover'
            />
            <h2 className="font-bold text-xl ml-3">Hello, Divine</h2>
          </div>
        </header>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureCards.map((card, index) => (
            <div 
              key={index}
              className={`${card.bgColor} border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow`}
            >
              <div className="flex items-start space-x-4 mb-5">
                {card.icon}
                <h3 className="text-xl font-bold text-gray-800">
                  {card.title.split(' ').map((word, i) => (
                    <React.Fragment key={i}>
                      {word}
                      <br />
                    </React.Fragment>
                  ))}
                </h3>
              </div>
              <p className="text-gray-500 mb-6">{card.description}</p>
              <button
                onClick={card.action}
                className="w-full py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors"
              >
                {card.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Stats Section (optional) */}
        <div className="mt-12 bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Your Security Stats</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-gray-500">Scans Completed</p>
              <p className="text-2xl font-bold text-green-600">24</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-gray-500">Potential Scams</p>
              <p className="text-2xl font-bold text-blue-600">3</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="text-gray-500">Documents Checked</p>
              <p className="text-2xl font-bold text-purple-600">15</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <p className="text-gray-500">Scams Reported</p>
              <p className="text-2xl font-bold text-red-600">2</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;