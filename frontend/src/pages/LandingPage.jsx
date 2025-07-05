import TestimonialsSection from "../components/TestimonialsSection";
import CTASection from "../components/CTASection";
import FAQSection from "../components/FAQSection";
import FeaturesSection from "../components/FeaturesSection";
import HeroSection from "../components/HeroSection";
import HowItWorksSection from "../components/HowItWorksSection";
import Footer from "../components/Footer";
import { Header } from "../components/Header";
import React from "react";

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <Header />
            <HeroSection />
            <CTASection />
            <FAQSection />
                    <FeaturesSection />
                    <HowItWorksSection />

            <TestimonialsSection />
            <Footer />
        </div>
    );
};

export default LandingPage;