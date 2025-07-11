import React, { useEffect, useState } from 'react';
import Sidebar from "../components/Sidebar";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoCloudUploadOutline } from "react-icons/io5";
import { LuTriangleAlert } from "react-icons/lu";
import { IoMdBook } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import api from '../api';

const Dashboard = () => {
  const navigate = useNavigate();
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    api.get("/reports/")
      .then(res => {
        setReports(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError("Failed to load reports");
        setLoading(false);
      });
    setUsername(localStorage.getItem("username") || "User");
  }, []);

  const featureCards = [
    {
      icon: <FaMagnifyingGlass className="text-green-500 text-3xl md:text-4xl" />,
      title: "Quick Scam Check",
      description: "Paste suspicious text to scan",
      buttonText: "Scan Now",
      action: () => navigate('/scan-text'),
      bgColor: "bg-green-50"
    },
    {
      icon: <IoCloudUploadOutline className="text-green-500 text-3xl md:text-4xl" />,
      title: "Upload Document",
      description: "Upload Files Docx, PDF, JPG, etc.",
      buttonText: "Upload Document",
      action: () => navigate('/upload-doc'),
      bgColor: "bg-blue-50"
    },
    {
      icon: <IoMdBook className="text-green-500 text-3xl md:text-4xl" />,
      title: "Scam Education",
      description: "Learn how to avoid scams and risks",
      buttonText: "Learn Now",
      action: () => navigate('/educate'),
      bgColor: "bg-purple-50"
    },
    {
      icon: <LuTriangleAlert className="text-green-500 text-3xl md:text-4xl" />,
      title: "Report Scam",
      description: "Report suspicious scholarship offers",
      buttonText: "Report Activity",
      action: () => navigate('/report-scam'),
      bgColor: "bg-red-50"
    }
  ];

  // Compute stats from reports
  const scansCompleted = reports.length;
  const potentialScams = reports.filter(r => r.scam === true).length;
  const documentsChecked = reports.filter(r => r.type === "document").length;
  const scamsReported = reports.filter(r => (r.category || "").toLowerCase().includes("scam")).length;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      <Sidebar />
      <div className="hidden md:block w-px bg-gray-200"></div>

      <main className="flex-1 p-4 md:p-8 max-w-6xl mx-auto w-full">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 font-poppins leading-tight mb-2">
              Your Academic <span className="text-green-600">Bodyguard</span> <br className="hidden md:block" />
              Against Scams
            </h1>
            <p className="text-gray-600 mt-2 text-base md:text-lg">
              Detect and avoid scholarship scams, fake offers and forged documents with AI.
            </p>
          </div>
          <div className="flex items-center gap-3 bg-white rounded-lg shadow px-4 py-2">
            <div className="flex flex-col">
              <span className="font-bold text-lg text-gray-800">Hello, {username}</span>
              <span className="text-xs text-gray-500">Welcome back!</span>
            </div>
          </div>
        </header>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featureCards.map((card, index) => (
            <div 
              key={index}
              className={`${card.bgColor} border border-gray-200 rounded-2xl p-6 shadow hover:shadow-lg transition-shadow flex flex-col items-start h-full`}
            >
              <div className="flex items-center space-x-4 mb-4">
                {card.icon}
                <h3 className="text-lg md:text-xl font-bold text-gray-800">
                  {card.title}
                </h3>
              </div>
              <p className="text-gray-500 mb-6 text-sm flex-1">{card.description}</p>
              <button
                onClick={card.action}
                className="w-full py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors mt-auto"
              >
                {card.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Dynamic Reports Section */}
        <section className="bg-white rounded-2xl shadow p-6 mb-12">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Reports</h2>
          {loading && <div>Loading reports...</div>}
          {error && <div className="text-red-500">{error}</div>}
          {!loading && !error && (
            reports.length > 0 ? (
              <ul className="divide-y divide-gray-100">
                {reports.map((report) => (
                  <li key={report.id} className="py-3 flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <span className="font-semibold text-green-700 mr-2">{report.category || 'Uncategorized'}</span>
                      <span className="text-gray-700">{report.message}</span>
                    </div>
                    <span className="text-xs text-gray-400 mt-2 md:mt-0">{new Date(report.timestamp).toLocaleString()}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="w-full bg-gray-100 border-2 border-dashed border-green-300 rounded-xl flex items-center justify-center py-12 my-4">
                <span className="text-gray-500 text-lg font-semibold">Start by making a report</span>
              </div>
            )
          )}
        </section>

        {/* Stats Section */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-green-50 p-6 rounded-2xl flex flex-col items-center shadow">
            <p className="text-gray-500 mb-1">Scans Completed</p>
            <p className="text-2xl font-bold text-green-600">{scansCompleted}</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-2xl flex flex-col items-center shadow">
            <p className="text-gray-500 mb-1">Potential Scams</p>
            <p className="text-2xl font-bold text-blue-600">{potentialScams}</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-2xl flex flex-col items-center shadow">
            <p className="text-gray-500 mb-1">Documents Checked</p>
            <p className="text-2xl font-bold text-purple-600">{documentsChecked}</p>
          </div>
          <div className="bg-red-50 p-6 rounded-2xl flex flex-col items-center shadow">
            <p className="text-gray-500 mb-1">Scams Reported</p>
            <p className="text-2xl font-bold text-red-600">{scamsReported}</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;