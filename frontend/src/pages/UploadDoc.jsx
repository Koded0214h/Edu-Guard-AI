import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { FiUpload, FiCheck, FiAlertTriangle } from "react-icons/fi";
import api from "../api";
import ScanResultCard from "../components/ScanResultCard";

const UploadDoc = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [reporterType, setReporterType] = useState("student");
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(localStorage.getItem("username") || "User");
  }, []);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setFile(selected);
      setResult(null);
      setError("");
    }
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const selected = e.dataTransfer.files[0];
    if (selected) {
      setFile(selected);
      setResult(null);
      setError("");
    }
  };

  const handleScan = async () => {
    if (!file) {
      alert("Please upload a document first.");
      return;
    }
    if (!message.trim()) {
      alert("Please enter a message describing the document.");
      return;
    }
    setLoading(true);
    setError("");
    setResult(null);
    try {
      const formData = new FormData();
      formData.append("image", file);
      formData.append("reporter_type", reporterType);
      formData.append("message", message);
      const token = localStorage.getItem("token");
      const res = await api.post("/reports/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          ...(token && { Authorization: `Token ${token}` }),
        },
      });
      setResult(res.data);
    } catch (err) {
      console.error("Upload error:", err.response?.data);
      setError(
        JSON.stringify(err.response?.data) || "Upload failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      <Sidebar />
      <div className="hidden md:block w-px bg-gray-200"></div>

      <div className="flex-1 p-6 md:p-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-3">
              <FiUpload className="text-green-500 font-bold"/>
              DOCUMENT CHECKER</h1>
            <p className="text-gray-600 mt-2">
              Upload and verify the authenticity of any scholarship or academic documents.
            </p>
          </div>
          <div className="flex items-center mt-4 md:mt-0">
            <span className="font-medium text-gray-700 ml-3">Hello, {username}</span>
          </div>
        </div>

        {/* New: Reporter Type and Message Inputs */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="mb-4 flex flex-col md:flex-row md:items-center gap-4">
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
            <div className="flex-1">
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <input
                type="text"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                placeholder="Describe the document or reason for upload"
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
            </div>
          </div>
          <div 
            className={`relative border-2 border-dashed ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'} rounded-lg w-full h-64 flex flex-col items-center justify-center transition-all duration-200`}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
          >
            {file ? (
              <div className="text-center p-4">
                <FiCheck className="text-green-500 text-5xl mx-auto mb-3" />
                <p className="text-gray-700 font-medium">{file.name}</p>
                <p className="text-gray-500 text-sm mt-1">
                  {(file.size / 1024).toFixed(1)} KB • {file.type.split('/')[1].toUpperCase()}
                </p>
                <button 
                  onClick={() => setFile(null)}
                  className="text-blue-500 hover:text-blue-700 text-sm font-medium mt-4"
                >
                  Change file
                </button>
              </div>
            ) : (
              <>
                <FiUpload className={`text-5xl mb-4 ${isDragging ? 'text-blue-500' : 'text-gray-400'}`} />
                <p className={`text-lg ${isDragging ? 'text-blue-600' : 'text-gray-500'} mb-2`}>
                  {isDragging ? 'Drop your file here' : 'Drag & drop your file here'}
                </p>
                <p className="text-gray-400 text-sm">or</p>
                <label className="mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md cursor-pointer transition-colors">
                  Browse files
                  <input
                    type="file"
                    accept=".pdf,.docx,.jpg,.jpeg,.png"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
                <p className="text-gray-400 text-xs mt-3">Supports: PDF, DOCX, JPG, PNG</p>
              </>
            )}
          </div>

          <div className="mt-6 flex justify-center">
            <button
              onClick={handleScan}
              disabled={!file || loading}
              className={`px-8 py-3 rounded-full font-semibold ${file ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'} transition-colors`}
            >
              {loading ? "Analyzing..." : "Analyze Document"}
            </button>
          </div>
          {error && <div style={{ color: 'red', marginTop: 12 }}>{error}</div>}
        </div>

        {/* Results Section */}
        {result && (
          <ScanResultCard report={result} />
        )}
      </div>
    </div>
  );
};

export default UploadDoc;