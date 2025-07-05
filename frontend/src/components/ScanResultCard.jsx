import React from "react";

const ScanResultCard = ({ report }) => {
  if (!report) return null;

  return (
    <div className="bg-white shadow p-4 rounded-md space-y-2">
      <h2 className="text-xl font-bold text-red-600">🕵️ Scan Result</h2>
      <p><strong>Category:</strong> {report.category || "N/A"}</p>
      <p><strong>Summary:</strong> {report.short_summary || report.message || "N/A"}</p>
      <p><strong>Confidence:</strong> {report.confidence !== undefined ? ((report.confidence * 100).toFixed(1) + "%") : "N/A"}</p>
      <p><strong>Reason:</strong> {report.classification_reason || "N/A"}</p>
      <p><strong>Location:</strong> {report.location_name || "None detected"}</p>
      <p><strong>Keywords:</strong> {(report.highlighted_keywords || []).join(", ") || "None"}</p>
      <p className="text-sm text-gray-500">
        Submitted by: {report.reporter_username || "Unknown"} at {report.timestamp ? new Date(report.timestamp).toLocaleString() : "Unknown time"}
      </p>
    </div>
  );
};

export default ScanResultCard; 