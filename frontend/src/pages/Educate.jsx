import React, { useEffect, useState } from "react";
import api from "../api";
import Sidebar from "../components/Sidebar";

const categories = [
  "Fake Scholarship",
  "Forged Result",
  "Uncertain"
];

const Educate = () => {
  const [category, setCategory] = useState(categories[0]);
  const [tip, setTip] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");
    setTip("");
    api.get(`/scam-tactics/${encodeURIComponent(category)}/`)
      .then(res => {
        setTip(res.data.tip);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load tip");
        setLoading(false);
      });
  }, [category]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      <Sidebar />
      <div className="hidden md:block w-px bg-gray-200"></div>
      <div className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-lg mx-auto">
          <h1 className="text-3xl font-bold text-center text-green-700 mb-6">Scam Education</h1>
          <div className="mb-6 flex flex-col items-center">
            <label htmlFor="category" className="block text-gray-700 text-base font-semibold mb-2">Select Category:</label>
            <select
              id="category"
              value={category}
              onChange={e => setCategory(e.target.value)}
              className="w-full max-w-xs px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 bg-white text-gray-800"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 min-h-[120px] flex items-center justify-center">
            {loading && <div className="text-gray-500">Loading...</div>}
            {error && <div className="text-red-500">{error}</div>}
            {!loading && !error && (
              <div className="text-lg text-gray-700 text-center">
                <span className="font-semibold text-green-600">Tip:</span> {tip}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Educate; // ✅ This makes it the default export
