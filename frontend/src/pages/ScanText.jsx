import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { FaSearch, FaExclamationTriangle, FaCheckCircle } from "react-icons/fa";
import { MdContentPaste, MdClear } from "react-icons/md";
import api from "../api";
import ScanResultCard from "../components/ScanResultCard";

const ScanText = () => {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [scamPhrases] = useState([
    "congratulations", "you have won", "click here", "urgent", 
    "claim your prize", "payment required", "limited time",
    "account verification", "bank details", "password reset",
    "free money", "lottery winner", "scholarship fee"
  ]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(localStorage.getItem("username") || "User");
  }, []);

  const handleScan = async () => {
    if (!inputText.trim()) {
      alert("Please paste a message to scan.");
      return;
    }
    setIsLoading(true);
    setError("");
    setResult(null);
    try {
      const payload = {
        message: inputText,
        reporter_type: "anonymous"
      };
      const res = await api.post("/reports/", payload);
      setResult(res.data);
    } catch (err) {
      setError(
        err.response?.data?.detail || err.response?.data?.error || "Scan failed"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setInputText(text);
    } catch (err) {
      alert("Could not access clipboard. Please paste manually.");
    }
  };

  const clearInput = () => {
    setInputText("");
    setResult(null);
    setError("");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      <Sidebar />
      <div className="hidden md:block w-px bg-gray-200"></div>

      <main className="flex-1 p-6 md:p-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center">
              <FaSearch className="mr-3 text-green-500" />
              TEXT SCANNER
            </h1>
            <p className="text-gray-600 mt-2">
              Detect scam patterns in scholarship or admission messages
            </p>
          </div>
          <div className="flex items-center mt-4 md:mt-0">
            <span className="font-medium text-gray-700 ml-3">Hello, {username}</span>
          </div>
        </div>

        {/* Text Input Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-medium text-gray-700">Paste suspicious message</h2>
            <div className="flex space-x-2">
              <button
                onClick={handlePaste}
                className="flex items-center text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded"
              >
                <MdContentPaste className="mr-1" /> Paste
              </button>
              <button
                onClick={clearInput}
                className="flex items-center text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded"
              >
                <MdClear className="mr-1" /> Clear
              </button>
            </div>
          </div>
          
          <textarea
            rows={8}
            className="w-full border border-gray-300 p-4 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="e.g. Congratulations! You've been selected for a scholarship..."
          />

          <div className="mt-4 flex justify-end">
            <button
              onClick={handleScan}
              disabled={!inputText.trim() || isLoading}
              className={`px-6 py-2 rounded-lg font-semibold flex items-center ${
                !inputText.trim() || isLoading
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-green-500 hover:bg-green-600 text-white'
              }`}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Scanning...
                </>
              ) : (
                <>Scan Message</>
              )}
            </button>
          </div>
          {error && <div style={{ color: 'red', marginTop: 12 }}>{error}</div>}
        </div>

        {/* Results Section */}
        {result && (
          <ScanResultCard report={result} />
        )}
      </main>
    </div>
  );
};

export default ScanText;