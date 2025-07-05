import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import api from "../api";

const ReportScam = () => {
  const [reporterType, setReporterType] = useState("student");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(localStorage.getItem("username") || "User");
  }, []);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected) setFile(selected);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");
    try {
      const formData = new FormData();
      formData.append("reporter_type", reporterType);
      formData.append("message", message);
      if (file) formData.append("image", file);
      const token = localStorage.getItem("token");
      await api.post("/reports/", formData, {
        headers: {
          ...(token && { Authorization: `Token ${token}` }),
        },
      });
      setSuccess("Scam report submitted successfully!");
      setMessage("");
      setFile(null);
    } catch (err) {
      setError(
        JSON.stringify(err.response?.data) || "Failed to submit scam report."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      <Sidebar />
      <div className="hidden md:block w-px bg-gray-200"></div>
      <main className="flex-1 p-6 md:p-8 max-w-2xl mx-auto w-full">
        <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Report a Scam</h1>
            <p className="text-gray-600 mt-2">Help us fight scams by reporting suspicious offers, messages, or documents.</p>
          </div>
          <div className="flex items-center mt-4 md:mt-0">
            <span className="font-medium text-gray-700 ml-3">Hello, {username}</span>
          </div>
        </header>
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-6 space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Reporter Type</label>
            <select
              className="border border-gray-300 rounded-md px-3 py-2 w-full md:w-48"
              value={reporterType}
              onChange={e => setReporterType(e.target.value)}
            >
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="anonymous">Anonymous</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              className="border border-gray-300 rounded-md px-3 py-2 w-full min-h-[100px]"
              placeholder="Describe the scam, include as much detail as possible."
              value={message}
              onChange={e => setMessage(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Attach Evidence (optional)</label>
            <input
              type="file"
              accept=".pdf,.docx,.jpg,.jpeg,.png"
              onChange={handleFileChange}
              className="block"
            />
            {file && <span className="text-sm text-gray-600 mt-1 block">Selected: {file.name}</span>}
          </div>
          <button
            type="submit"
            disabled={loading || !message.trim()}
            className={`w-full py-3 rounded-lg font-semibold ${loading || !message.trim() ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600 text-white'} transition-colors`}
          >
            {loading ? "Submitting..." : "Submit Scam Report"}
          </button>
          {success && <div className="text-green-600 font-medium mt-2">{success}</div>}
          {error && <div className="text-red-500 font-medium mt-2">{error}</div>}
        </form>
      </main>
    </div>
  );
};

export default ReportScam; 