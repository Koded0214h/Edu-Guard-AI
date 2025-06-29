import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";

const Report = () => {
  const { id } = useParams();
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    api.get(`/reports/${id}/`)
      .then(res => {
        setReport(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load report");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading report...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;
  if (!report) return <div>No report found.</div>;

  return (
    <div>
      <h1>Report Page</h1>
      <div><strong>Category:</strong> {report.category || 'Uncategorized'}</div>
      <div><strong>Message:</strong> {report.message}</div>
      <div><strong>Reporter Type:</strong> {report.reporter_type}</div>
      <div><strong>Timestamp:</strong> {report.timestamp}</div>
      {/* Add more fields as needed, but do not change UI/styling */}
    </div>
  );
};

export default Report;
