import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { FaSearch, FaUserCircle, FaExclamationTriangle, FaCheckCircle } from "react-icons/fa";
import { MdContentPaste, MdClear } from "react-icons/md";

const ScanText = () => {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [scamPhrases] = useState([
    "congratulations", "you have won", "click here", "urgent", 
    "claim your prize", "payment required", "limited time",
    "account verification", "bank details", "password reset",
    "free money", "lottery winner", "scholarship fee"
  ]);

  const handleScan = () => {
    if (!inputText.trim()) {
      alert("Please paste a message to scan.");
      return;
    }

    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const lower = inputText.toLowerCase();
      const flagged = scamPhrases.filter(phrase => lower.includes(phrase));
      const isScam = flagged.length > 0;

      setResult({
        scam: isScam,
        flaggedPhrases: flagged,
        message: isScam
          ? `This message contains ${flagged.length} red flag${flagged.length > 1 ? 's' : ''}.`
          : "No scam signals found.",
        confidence: isScam ? Math.min(90 + (flagged.length * 5), 100) : Math.floor(Math.random() * 30)
      });
      setIsLoading(false);
    }, 1500);
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
            <FaUserCircle className="text-gray-400 text-3xl md:text-4xl" />
            <span className="font-medium text-gray-700 ml-3">Hello, Divine</span>
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
        </div>

        {/* Results Section */}
        {result && (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Scan Results</h2>
            
            <div className={`p-5 rounded-lg mb-6 ${
              result.scam 
                ? 'bg-red-50 border-l-4 border-red-500' 
                : 'bg-green-50 border-l-4 border-green-500'
            }`}>
              <div className="flex items-start">
                {result.scam ? (
                  <FaExclamationTriangle className="text-red-500 text-2xl mt-1 mr-3 flex-shrink-0" />
                ) : (
                  <FaCheckCircle className="text-green-500 text-2xl mt-1 mr-3 flex-shrink-0" />
                )}
                <div>
                  <h3 className={`font-bold ${
                    result.scam ? 'text-red-700' : 'text-green-700'
                  }`}>
                    {result.scam ? "Potential Scam Detected" : "No Scam Patterns Found"}
                  </h3>
                  <p className="text-gray-700 mt-1">{result.message}</p>
                  
                  {result.scam && (
                    <div className="mt-3">
                      <h4 className="text-sm font-medium text-gray-700 mb-1">
                        Detected red flags:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {result.flaggedPhrases.map((phrase, index) => (
                          <span key={index} className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
                            {phrase}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="mt-4">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className={`h-2.5 rounded-full ${
                          result.scam ? 'bg-red-500' : 'bg-green-500'
                        }`} 
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
              <h4 className="font-medium text-gray-700 mb-2">
                {result.scam ? "Recommended Actions" : "Safety Tips"}
              </h4>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                {result.scam ? (
                  <>
                    <li>Do not click any links in the message</li>
                    <li>Never share personal or financial information</li>
                    <li>Verify with the official institution directly</li>
                    <li>Report this message to authorities if suspicious</li>
                  </>
                ) : (
                  <>
                    <li>Still verify with official sources before acting</li>
                    <li>Be cautious of requests for payments or personal info</li>
                    <li>Check sender email addresses carefully</li>
                    <li>When in doubt, contact the institution directly</li>
                  </>
                )}
              </ul>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ScanText;