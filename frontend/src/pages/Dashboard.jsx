import React from 'react';
import Sidebar from "../components/Sidebar";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoCloudUploadOutline } from "react-icons/io5";
import { LuTriangleAlert } from "react-icons/lu";
import { IoMdBook } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
// import { BsBell } from 'react-icons/bs'; // might use later for notifications

const Dashboard = () => {
  const navigate = useNavigate();

  // Card info (can be made dynamic from backend later)
  const features = [
    {
      icon: <FaMagnifyingGlass className="text-green-500 text-3xl" />,
      title: "Quick Scam Check",
      desc: "Paste suspicious text to scan",
      btn: "Scan Now",
      action: () => navigate('/scan-text'),
      bg: "bg-green-50"
    },
    {
      icon: <IoCloudUploadOutline className="text-green-500 text-3xl" />,
      title: "Upload Document",
      desc: "Upload files like PDF, DOCX, etc.",
      btn: "Upload Document",
      action: () => navigate('/upload-doc'),
      bg: "bg-blue-50"
    },
    {
      icon: <IoMdBook className="text-green-500 text-3xl" />,
      title: "Scam Education",
      desc: "Tips to avoid scholarship scams",
      btn: "Learn Now",
      action: () => navigate('/educate'),
      bg: "bg-purple-50"
    },
    {
      icon: <LuTriangleAlert className="text-green-500 text-3xl" />,
      title: "Report Scam",
      desc: "Suspicious message? Let us know",
      btn: "Report Activity",
      action: () => navigate('/report'),
      bg: "bg-red-50"
    }
  ];

  // console.log("Dashboard mounted");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row pt-5">
      <Sidebar />
      <div className="hidden md:block w-px bg-gray-200"></div>

      <main className="flex-1 p-6 md:p-8">
        {/* Top header */}
        <header className="flex flex-col md:flex-row justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Your Academic<br /><span className='text-green-500'>Bodyguard </span>Against Scams
            </h1>
            <p className="text-gray-600">Detect fake offers with AI</p>
          </div>

          <div className="flex items-center mt-4 md:mt-0">
            <img
              alt="profile"
              src="/img/person.webp"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="ml-3 font-semibold text-gray-700">Hey Divine 👋</span>
          </div>
        </header>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 h-64">
          {features.map((card, i) => (
            <div
              key={i}
              className={`${card.bg} border rounded-xl p-5 hover:shadow-lg transition duration-200`}
            >
              <div className="flex items-center gap-3 mb-4 pt-8">
                {card.icon}
                <h3 className="text-lg font-bold text-gray-800">{card.title}</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">{card.desc}</p>
              <button
                onClick={card.action}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-2 text-sm rounded"
              >
                {card.btn}
              </button>
            </div>
          ))}
        </div>

        {/* TODO: Fetch stats from backend */}
        <section className="mt-12 bg-white rounded-xl p-6 shadow">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Stats Overview</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-green-50 p-4 rounded">
              <p className="text-gray-600 text-sm">Scans Completed</p>
              <h3 className="text-2xl font-bold text-green-600">24</h3>
            </div>
            <div className="bg-blue-50 p-4 rounded">
              <p className="text-gray-600 text-sm">Potential Scams</p>
              <h3 className="text-2xl font-bold text-blue-600">3</h3>
            </div>
            <div className="bg-purple-50 p-4 rounded">
              <p className="text-gray-600 text-sm">Docs Checked</p>
              <h3 className="text-2xl font-bold text-purple-600">15</h3>
            </div>
            <div className="bg-red-50 p-4 rounded">
              <p className="text-gray-600 text-sm">Reports Filed</p>
              <h3 className="text-2xl font-bold text-red-600">2</h3>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
