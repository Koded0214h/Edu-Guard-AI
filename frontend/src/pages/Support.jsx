import React from "react";
import Sidebar from "../components/Sidebar";

export default function Support() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      <Sidebar />
      <div className="hidden md:block w-px bg-gray-200"></div>
      <main className="flex-1 flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl font-bold text-green-700 mb-4">Support &amp; Help</h1>
        <p className="text-gray-700 text-lg mb-6 text-center max-w-xl">
          Need help with EduGuard AI? Reach out to our support team or check our FAQ for answers to common questions.
        </p>
        <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-md">
          <h2 className="text-xl font-semibold mb-2">Contact Support</h2>
          <p className="text-gray-600 mb-4">Email: <a href="mailto:support@eduguard.ai" className="text-green-600 underline">support@eduguard.ai</a></p>
          <h2 className="text-xl font-semibold mb-2">FAQ</h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            <li>How do I scan a document?</li>
            <li>How do I report a scam?</li>
            <li>How does EduGuard AI detect scams?</li>
            <li>How do I reset my password?</li>
          </ul>
        </div>
      </main>
    </div>
  );
} 