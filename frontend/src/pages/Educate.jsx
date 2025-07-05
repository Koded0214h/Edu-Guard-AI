import React from "react";
import { IoMdBook } from "react-icons/io";
import { FaGraduationCap } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { PiBagFill } from "react-icons/pi";
import { IoDocumentOutline } from "react-icons/io5";
import { CiReceipt } from "react-icons/ci";
import { IoMdPerson } from "react-icons/io";




import Sidebar from "../components/Sidebar";

// Could be moved to a separate data file
const tips = [
  {
    title: "Scholarship Scams",
    description:
      "Avoid scholarships that ask for payment upfront or promise guaranteed acceptance without verification.",
    icon: <FaGraduationCap />,
  },
  {
    title: "Job Offer Scams",
    description:
      "Be cautious of jobs asking for application fees, processing fees, or quick deposits before interviews.",
    icon: <PiBagFill />,
  },
  {
    title: "Admission Letter Scams",
    description:
      "Verify admission letters with the official institution. Scams often use poor grammar and generic greetings.",
    icon: <GoMail />,
  },
  {
    title: "Result Slip Forgeries",
    description:
      "Check fonts, logos, and signature placements carefully. Scammers often use blurred or mismatched designs.",
    icon: <IoDocumentOutline />,
  },
  {
    title: "Fake Payment Receipts",
    description:
    "Scammers often send fake bank or transfer receipts to claim they have paid school fees or application charges.",
    icon: <CiReceipt />,
  },
   {
    title: "Agent Admission Scams",
    description: 'Some individuals posing as "admission agents"  promise direct entry into universities for high fees',
    icon: <IoMdPerson />,
  }
];

function Educate({ userName = "Divine" }) {
  return (
    <div className="min-h-screen flex">
      <Sidebar />

      <main className="flex-1 p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold flex items-center gap-3">
            <IoMdBook className="text-green-500 font-extrabold" />

            SCAM EDUCATION</h1>
          <div className="flex items-center gap-3">
            <img
              alt="User profile"
              src="img/person.webp"
              className="w-12 h-12 rounded-full" />
            <span className="font-bold text-2xl">Hello, {userName}</span>
          </div>
        </header>

        {/* Intro */}
        <p className="text-gray-600 mb-8 max-w-3xl">
          Learn to identify and avoid common scams targeting students and job
          seekers.
        </p>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tips.map((tip, idx) => (
            <article
              key={idx}
              className="bg-white shadow-md border border-gray-200 rounded-lg p-6 hover:shadow-lg transition"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{tip.icon}</span>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-green-700">
                    {tip.title}
                  </h3>
                  <p className="text-gray-700">{tip.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Educate;