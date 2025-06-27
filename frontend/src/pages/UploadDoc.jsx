import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { FiUpload } from "react-icons/fi";

const UploadDoc = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setFile(selected);
      setResult(null); // clear any previous result
    }
  };

  const handleScan = () => {
    if (!file) {
      alert("Please upload a document first.");
      return;
    }

    // Fake detection logic based on file name (you'll replace this with real API call later)
    const isFake = file.name.toLowerCase().includes("result") || file.name.toLowerCase().includes("letter");

    setResult({
      scam: isFake,
      message: isFake
        ? "This document has formatting or naming patterns often seen in forgeries. Please verify with the issuing institution."
        : "No forgery patterns detected. Document appears clean.",
    });
  };

  return (
    <div className="h-full flex items-start gap-2">
      <Sidebar />
      <div className="w-1 bg-black h-screen relative bottom-7 pb-4"></div>

      <div className="cover mt-8 ml-8">
        {/* Header */}
        <div className="scan flex items-center gap-2">
          <p className="text-3xl font-semibold mb-6 mt-6">DOCUMENT CHECKER</p>
          <img
            alt=""
            src="img/person.webp"
            className="w-12 h-12 rounded-full ml-[550px]"
          />
          <h1 className="font-bold text-2xl ml-3 mt-4">Hello, Divine</h1>
        </div>

        <p className="mb-6 text-gray-600">
          Upload and verify the authenticity of any scholarship <br /> or academic documents.
        </p>

        {/* Upload Box */}
        <div className="relative border-2 border-dashed border-gray-300 bg-white rounded-lg w-[700px] h-[300px] flex flex-col items-center justify-center text-gray-500">
          <FiUpload className="text-7xl mb-4" />
          <p className="text-lg">Upload your files here</p>
          <input
            type="file"
            accept=".pdf,.docx,.jpg,.jpeg,.png"
            onChange={handleFileChange}
            className="absolute w-full h-full opacity-0 cursor-pointer"
          />
        </div>

        {file && (
          <p className="mt-3 text-green-600 font-medium">
            📄 File selected: <span className="font-semibold">{file.name}</span>
          </p>
        )}

        <button
          onClick={handleScan}
          className="rounded-full bg-green-500 text-white px-6 py-2 mt-6 font-semibold"
        >
          Upload Document
        </button>

        {/* Result Message */}
        {result && (
          <div
            className={`p-4 rounded-md mt-6 max-w-xl border-l-4 ${
              result.scam
                ? "bg-red-100 border-red-600 text-red-700"
                : "bg-green-100 border-green-500 text-green-700"
            }`}
          >
            <h2 className="text-lg font-bold">
              {result.scam ? "⚠ Document May Be Forged" : "✅ Document Looks Authentic"}
            </h2>
            <p className="mt-2">{result.message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadDoc;