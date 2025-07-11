import React, { useState } from 'react';
import { CiCircleChevUp, CiCircleChevDown } from "react-icons/ci";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const faqs = [
    {
      question: 'How does EduGard AI detect fake educational content?',
      answer:
        'EduGard AI uses a combination of machine learning algorithms, natural language processing, and a comprehensive database of verified educational sources to analyze content. It checks for factual inconsistencies, citation validity, source credibility, and comparison against peer-reviewed research.',
    },
    {
      question: "Can EduGard AI be integrated into our school's learning management system?",
      answer:
        'Yes! EduGard AI offers API integration for popular learning management systems like Canvas, Blackboard, and Moodle. We also provide custom integration solutions for proprietary systems. Contact our integration team for specific requirements.',
    },
    {
      question: 'Is EduGard AI suitable for K-12 education or only higher education?',
      answer:
        'EduGard AI is designed for all educational levels. We offer specialized versions tailored to K-12, higher education, and professional development contexts, with age-appropriate interfaces and content analysis parameters.',
    },
    {
      question: "How accurate is EduGard AI's content verification?",
      answer:
        'Our system has demonstrated 94% accuracy in identifying educational misinformation in independent testing. We continuously improve our algorithms through machine learning and regular updates to our knowledge base with the latest verified educational research.',
    },
    {
      question: 'Does EduGard AI offer solutions for students with limited internet access?',
      answer:
        'Yes, we offer offline capabilities through our desktop application that can analyze downloaded content. We also provide educational institutions with options for on-premise deployment in environments with limited connectivity.',
    },
  ];

  return (
    <section id="faq" className="w-full py-16 md:py-24 bg-[#FFFFFF]">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2A3A] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-[#334455] max-w-3xl mx-auto">
            Find answers to common questions about EduGard AI and how it can
            help protect against educational misinformation.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-[#E5E7EB] overflow-hidden"
            >
              <button
                className="w-full text-left p-6 focus:outline-none flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <h3 className="font-semibold text-lg text-[#1A2A3A]">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <CiCircleChevUp size={20} className="text-[#1A2A3A]" />
                ) : (
                  <CiCircleChevDown size={20} className="text-[#1A2A3A]" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-[#334455]">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#334455] mb-4">Still have questions?</p>
          <button className="bg-[#1A2A3A] hover:bg-[#334455] text-white px-6 py-3 rounded-md font-medium transition-colors">
            Contact Our Support Team
          </button>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
