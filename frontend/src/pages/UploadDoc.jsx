import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { FiUpload, FiCheck, FiAlertTriangle } from "react-icons/fi";

const UploadDoc = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setFile(selected);
      setResult(null);
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
    }
  };

  const handleScan = () => {
    if (!file) {
      alert("Please upload a document first.");
      return;
    }

    // Fake detection logic (replace with real API call)
    const isFake = file.name.toLowerCase().includes("result") || 
                  file.name.toLowerCase().includes("letter") ||
                  Math.random() < 0.3; // 30% chance of being fake for demo

    setResult({
      scam: isFake,
      message: isFake
        ? "This document has formatting or naming patterns often seen in forgeries. Please verify with the issuing institution."
        : "No forgery patterns detected. Document appears clean.",
      confidence: Math.floor(Math.random() * 50) + (isFake ? 50 : 0)
    });
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
            <img
              alt="User profile"
              src="img/person.webp"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full"
            />
            <span className="font-medium text-gray-700 ml-3">Hello, Divine</span>
          </div>
        </div>

        {/* Upload Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
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
              disabled={!file}
              className={`px-8 py-3 rounded-full font-semibold ${file ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'} transition-colors`}
            >
              Analyze Document
            </button>
          </div>
        </div>

        {/* Results Section */}
        {result && (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Analysis Results</h2>
            
            <div className={`p-5 rounded-lg ${result.scam ? 'bg-red-50 border-l-4 border-red-500' : 'bg-green-50 border-l-4 border-green-500'}`}>
              <div className="flex items-start">
                {result.scam ? (
                  <FiAlertTriangle className="text-red-500 text-2xl mt-1 mr-3 flex-shrink-0" />
                ) : (
                  <FiCheck className="text-green-500 text-2xl mt-1 mr-3 flex-shrink-0" />
                )}
                <div>
                  <h3 className={`font-bold ${result.scam ? 'text-red-700' : 'text-green-700'}`}>
                    {result.scam ? "Potential Forgery Detected" : "Document Appears Authentic"}
                  </h3>
                  <p className="text-gray-700 mt-1">{result.message}</p>
                  <div className="mt-3">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className={`h-2.5 rounded-full ${result.scam ? 'bg-red-500' : 'bg-green-500'}`} 
                        style={{ width: `${result.confidence}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Confidence: {result.confidence}%
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-medium text-gray-700 mb-2">Recommended Actions</h4>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                {result.scam ? (
                  <>
                    <li>Contact the issuing institution directly</li>
                    <li>Compare with known authentic documents</li>
                    <li>Check for watermarks or security features</li>
                  </>
                ) : (
                  <>
                    <li>Verify with secondary sources if important</li>
                    <li>Check document expiration date if applicable</li>
                    <li>Store a backup copy securely</li>
                  </>
                )}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadDoc;