import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import api from '../api';

export default function LoginForm({ switchToSignup }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await api.post("/login/", { username, password });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", res.data.username);
      navigate("/dashboard");
    } catch (err) {
      setError(
        err.response?.data?.detail || err.response?.data?.error || "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full flex flex-col justify-center text-white">
      <h2 className="text-3xl font-bold mb-6">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <FaEnvelope className="absolute left-3 top-3 text-[#A0AEC0]" />
          <input
            type="text"
            placeholder="Username"
            className="w-full pl-10 pr-4 py-3 rounded-md bg-[#1A2A3A] text-white placeholder-[#A0AEC0] border border-[#2D3748] focus:outline-none focus:ring-2 focus:ring-[#3FBAC2]"
            required
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className="relative">
          <FaLock className="absolute left-3 top-3 text-[#A0AEC0]" />
          <input
            type="password"
            placeholder="Password"
            className="w-full pl-10 pr-4 py-3 rounded-md bg-[#1A2A3A] text-white placeholder-[#A0AEC0] border border-[#2D3748] focus:outline-none focus:ring-2 focus:ring-[#3FBAC2]"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        {error && <div className="text-red-400 text-sm text-center">{error}</div>}
        <button 
          type="submit" 
          className="w-full bg-[#3FBAC2] hover:bg-[#22C55E] text-white py-3 rounded-md font-semibold transition-colors"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
        <p className="text-sm text-[#A0AEC0] text-center mt-2">
          Don't have an account?{' '}
          <button 
            type="button"
            onClick={(e) => {
              e.preventDefault();
              switchToSignup();
            }}
            className="text-[#3FBAC2] hover:underline focus:outline-none"
          >
            Sign up
          </button>
        </p>
      </form>
    </div>
  );
}
