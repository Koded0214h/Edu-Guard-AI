import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#f9fafb" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#1a202c", marginBottom: 16 }}>Edu Guard AI</h1>
      <p style={{ maxWidth: 600, textAlign: "center", color: "#374151", fontSize: 18, marginBottom: 32 }}>
        Edu Guard AI is your academic bodyguard against scams. We use advanced AI to help students and educators detect and avoid scholarship scams, fake offers, and forged documents. Instantly scan suspicious messages, upload documents for authenticity checks, and learn how to protect yourself from academic fraud—all in one secure platform.
      </p>
      <ul style={{ textAlign: "left", marginBottom: 32, maxWidth: 500, color: "#374151" }}>
        <li>• Scan suspicious text or emails for scam patterns</li>
        <li>• Upload academic documents (PDF, DOCX, images) for AI-powered forgery detection</li>
        <li>• Report scams and help protect the academic community</li>
        <li>• Access up-to-date scam education and safety tips</li>
      </ul>
      <button
        onClick={() => navigate("/login")}
        style={{ padding: "12px 32px", background: "#22c55e", color: "white", border: "none", borderRadius: 8, fontWeight: "bold", fontSize: 18, cursor: "pointer" }}
      >
        Get Started
      </button>
    </div>
  );
};

export default Landing; 