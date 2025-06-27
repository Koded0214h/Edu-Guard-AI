import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

const ScanText = () => {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState(null);

  const handleScan = () => {
    if (!inputText.trim()) {
      alert("Please paste a message to scan.");
      return;
    }

    // 🔍 Basic fake scam detection logic
    const lower = inputText.toLowerCase();
    const scamPhrases = ["congratulations", "you have won", "click here", "urgent", "claim your prize"];
    const flagged = scamPhrases.filter(phrase => lower.includes(phrase));

    const isScam = flagged.length > 0;

    setResult({
      scam: isScam,
      message: isScam
        ? `This message contains red flags: ${flagged.join(", ")}. It may be a scam. Do not click any suspicious links.`
        : "No scam signals found. Still, be cautious and verify before acting.",
    });
  };

  return (
    <div className="h-full flex items-start gap-2">
      <Sidebar />
      <div className="w-1 bg-black h-screen relative bottom-7 pb-4"></div>

      <div className="cover mt-8 ml-8">
        {/* Header */}
        <div className="scan flex items-center gap-2">
          <p className="text-3xl font-semibold mb-6">TEXT SCANNER</p>
          <img
            alt=""
            src="img/person.webp"
            className="w-12 h-12 rounded-full ml-[650px]"
          />
          <h1 className="font-bold text-2xl ml-3">Hello, Divine</h1>
        </div>

        {/* Instruction */}
        <p className="text-gray-600 mb-3">
          Paste suspicious scholarship or admission messages below:
        </p>

        {/* Textarea */}
        <textarea
          rows={8}
          cols={70}
          className="border border-gray-300 p-4 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="e.g. Congratulations! You have been selected for a scholarship worth ₦500,000..."
        />

        {/* Scan Button */}
        <div className="mt-4">
          <button
            onClick={handleScan}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg"
          >
            Scan Now
          </button>
        </div>

        {/* Scam Detection Result */}
        {result && (
          <div
            className={`p-4 rounded-md mt-6 max-w-xl border-l-4 ${
              result.scam
                ? "bg-red-100 border-red-600 text-red-700"
                : "bg-green-100 border-green-500 text-green-700"
            }`}
          >
            <h2 className="text-lg font-bold">
              {result.scam
                ? "⚠ High Scam Risk Detected"
                : "✅ Looks Safe"}
            </h2>
            <p className="mt-2">{result.message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScanText;