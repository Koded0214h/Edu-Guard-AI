import React from 'react';
import { LuShieldCheck } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import { BsFillBarChartLineFill } from "react-icons/bs";
import { FaCircleUser } from "react-icons/fa6";

export default function FeaturesSection() {
  const features = [
    {
      icon: <LuShieldCheck size={24} className="text-[#1A2A3A]" />,
      title: 'AI-Powered Verification',
      description:
        'Advanced algorithms analyze educational content to detect misinformation, bias, and factual inaccuracies.',
    },
    {
      icon: <IoIosSearch size={24} className="text-[#1A2A3A]" />,
      title: 'Source Credibility Check',
      description:
        'Evaluate the reliability and authority of educational sources with our comprehensive database.',
    },
    {
      icon: <BsFillBarChartLineFill size={24} className="text-[#1A2A3A]" />,
      title: 'Real-time Analysis',
      description:
        'Get immediate feedback on content credibility while browsing educational resources online.',
    },
    {
      icon: <FaCircleUser size={24} className="text-[#1A2A3A]" />,
      title: 'Community Insights',
      description:
        'Access reviews and ratings from educators and fact-checkers within our trusted network.',
    },
  ];

  return (
    <section id="features" className="w-full py-16 md:py-24 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2A3A] mb-4">
            How EduGuard AI Protects You
          </h2>
          <p className="text-lg text-[#334455] max-w-3xl mx-auto">
            Our comprehensive suite of tools helps you navigate the complex
            landscape of educational information with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF] p-6 rounded-xl border border-[#E5E7EB] shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-[#3FBAC2] rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#1A2A3A] mb-2">
                {feature.title}
              </h3>
              <p className="text-[#334455]">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#E5E7EB] rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-[#1A2A3A] mb-4">
                Stay Ahead of Misinformation
              </h3>
              <p className="text-lg text-[#334455] mb-6">
                In today's digital age, misleading educational content can
                spread rapidly. EduGuard AI gives you the tools to identify and
                avoid unreliable sources before they impact learning outcomes.
              </p>
              <button className="bg-[#1A2A3A] hover:bg-[#334455] text-white px-6 py-3 rounded-md font-medium transition-colors">
                Learn About Our Technology
              </button>
            </div>
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="AI analyzing educational content"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
