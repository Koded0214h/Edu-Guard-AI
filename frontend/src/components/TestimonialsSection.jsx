import React from 'react';
import { TiStar } from "react-icons/ti";

export default function TestimonialsSection() {
  const testimonials = [
    {
      content: "EduGard AI has transformed how our university validates research materials. We've seen a 40% reduction in students citing unreliable sources in their papers.",
      author: 'Dr. Sarah Johnson',
      role: 'Professor of Education, Stanford University',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80'
    },
    {
      content: "As a high school teacher, I rely on EduGard AI daily to verify educational resources before sharing them with my students. It's become an essential tool for modern educators.",
      author: 'Michael Rodriguez',
      role: 'Science Teacher, Boston Public Schools',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80'
    },
    {
      content: "The browser extension is brilliant! It automatically flags questionable content while I'm researching online and suggests verified alternatives. Saves me hours of fact-checking.",
      author: 'Lisa Chen',
      role: 'Educational Content Creator',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80'
    }
  ];

  return (
    <section id="testimonials" className="w-full py-16 md:py-24 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2A3A] mb-4">
            Trusted by Educators Worldwide
          </h2>
          <p className="text-lg text-[#334455] max-w-3xl mx-auto">
            See how EduGard AI is helping educators and students combat misinformation and improve learning outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#F8FAFB] p-6 rounded-xl border border-[#E5E7EB]">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <TiStar key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-[#334455] mb-6">"{testimonial.content}"</p>
              <div className="flex items-center">
                <img src={testimonial.avatar} alt={testimonial.author} className="w-12 h-12 rounded-full mr-4 object-cover" />
                <div>
                  <h4 className="font-semibold text-[#1A2A3A]">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-[#556677]">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#1A2A3A] rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Join 500+ educational institutions using EduGard AI
          </h3>
          <p className="text-lg text-[#E1F3FF] mb-8 max-w-3xl mx-auto">
            From K-12 schools to universities, EduGard AI is helping educational institutions worldwide protect their students from misinformation.
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {["HARVARD", "MIT", "STANFORD", "OXFORD", "CAMBRIDGE"].map((name) => (
              <div key={name} className="bg-white/20 h-12 w-32 rounded flex items-center justify-center text-white font-bold">
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
