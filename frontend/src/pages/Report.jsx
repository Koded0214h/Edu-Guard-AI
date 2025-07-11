import React, { useState } from "react";
            import { LuTriangleAlert } from "react-icons/lu";

import Sidebar from "../components/Sidebar";

const Report = ({ userName = "Divine" }) => {
  const [reportType, setReportType] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!reportType || !description) {
      setError("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitted(true);
      resetForm();
    } catch (err) {
      setError("Failed to submit report. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setReportType("");
    setDescription("");
    setFile(null);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.size > 5 * 1024 * 1024) { // 5MB limit
      setError("File size must be less than 5MB");
      return;
    }
    setFile(selectedFile);
  };

  return (
    <div className="min-h-screen flex">
      <Sidebar />

      <main className="flex-1 p-8">
        {/* Header */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <h1 className="text-3xl font-semibold flex items-center gap-3">
            <LuTriangleAlert className="text-green-500 font-extrabold"/>
            REPORT SCAM</h1>
          <div className="flex items-center gap-3">
            <img
              alt={`${userName}'s profile`}
              src="img/person.webp"
              className="w-12 h-12 rounded-full"
            />
            <span className="font-bold text-2xl">Hello, {userName}</span>
          </div>
        </header>

        {/* Intro */}
        <p className="text-gray-600 mb-6 max-w-3xl">
          Report suspicious messages or forged documents to help EduGuard AI
          detect future scams.
        </p>

        {/* Messages */}
        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded mb-6 max-w-xl">
            ⚠️ {error}
          </div>
        )}

        {submitted && (
          <div 
            className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded mb-6 max-w-xl"
            aria-live="polite"
          >
            ✅ Thank you for your report. Our AI team will review it shortly.
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="max-w-xl space-y-6">
          <div>
            <label htmlFor="reportType" className="block font-semibold mb-2">
              Type of Scam *
            </label>
            <select
              id="reportType"
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            >
              <option value="">Select type</option>
              <option value="Scholarship Scam">Scholarship Scam</option>
              <option value="Job Offer Scam">Job Offer Scam</option>
              <option value="Admission Letter Forgery">
                Admission Letter Forgery
              </option>
              <option value="Result Slip Forgery">Result Slip Forgery</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="description" className="block font-semibold mb-2">
              Description *
              <span className="text-sm font-normal text-gray-500 ml-2">
                ({description.length}/500)
              </span>
            </label>
            <textarea
              id="description"
              rows={5}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              maxLength={500}
              placeholder="Describe the suspicious message or document..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          <div>
            <label htmlFor="fileUpload" className="block font-semibold mb-2">
              Upload File (optional)
              <span className="text-sm font-normal text-gray-500 ml-2">
                (Max 5MB, PNG, JPG, PDF)
              </span>
            </label>
            <div className="flex items-center gap-4">
              <label className="cursor-pointer bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg border border-gray-300 transition">
                📁 Choose File
                <input
                  id="fileUpload"
                  type="file"
                  onChange={handleFileChange}
                  accept=".png,.jpg,.jpeg,.pdf"
                  className="hidden"
                />
              </label>
              {file && (
                <p className="text-green-600 font-medium">
                  📄 {file.name} ({(file.size / 1024).toFixed(1)}KB)
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit Report"}
          </button>
        </form>
      </main>

    </div>
  );
}

export default Report;
