import React from 'react';
import { CiCircleAlert } from "react-icons/ci";
import { FaFileAlt, FaCheckCircle } from "react-icons/fa";

export default function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Submit Content',
      description: 'Upload articles, research papers, or paste URLs of educational resources you want to verify.',
      icon: <FaFileAlt size={32} className="text-[#1A2A3A]" />
    },
    {
      number: '02',
      title: 'AI Analysis',
      description: 'Our advanced algorithms analyze the content for factual accuracy, bias, and reliability indicators.',
      icon: <CiCircleAlert size={32} className="text-[#1A2A3A]" />
    },
    {
      number: '03',
      title: 'Get Results',
      description: 'Receive a comprehensive report with credibility score, potential issues, and verified alternatives.',
      icon: <FaCheckCircle size={32} className="text-[#1A2A3A]" />
    }
  ];

  return (
    <section id="how-it-works" className="w-full py-16 md:py-24 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2A3A] mb-4">
            How EduGard AI Works
          </h2>
          <p className="text-lg text-[#334455] max-w-3xl mx-auto">
            Our simple three-step process helps you verify educational content quickly and efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm relative">
              <div className="absolute -top-4 left-8 bg-[#3FBAC2] text-[#1A2A3A] px-3 py-1 rounded-full font-bold">
                {step.number}
              </div>
              <div className="mb-4 mt-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-[#1A2A3A] mb-2">{step.title}</h3>
              <p className="text-[#334455]">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-[#1A2A3A] mb-4">
                See EduGard AI in Action
              </h3>
              <p className="text-lg text-[#334455] mb-6">
                Watch how our platform identifies misleading educational content and provides verified alternatives in real-time.
              </p>
              <button className="bg-[#1A2A3A] hover:bg-[#334455] text-white px-6 py-3 rounded-md font-medium transition-colors self-start">
                View Demo
              </button>
            </div>

            <div className="flex-1 bg-[#F3F4F6] min-h-[300px] flex items-center justify-center p-8">
              <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-lg text-[#1A2A3A]">Content Analysis</h4>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                    Analyzing
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="h-4 bg-[#E5E7EB] rounded-full w-full"></div>
                  <div className="h-4 bg-[#E5E7EB] rounded-full w-3/4"></div>
                  <div className="h-4 bg-[#E5E7EB] rounded-full w-5/6"></div>
                </div>
                <div className="mt-6 pt-6 border-t border-[#E5E7EB]">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                    <span className="text-sm text-[#334455]">
                      Potential misinformation detected
                    </span>
                  </div>
                  <div className="flex items-center mt-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm text-[#334455]">
                      Verified alternatives available
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
