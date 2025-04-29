import HeroSection from '../components/HeroSection';
import FeaturesSection from "../components/FeaturesSection";
import HowItWorksSection from "../components/HowItWorksSection";
import TestimonialsSection from "../components/TestimonialsSection";
import Footer from "../components/Footer";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from '../api/axios';

export default function Home() {
    const [responseMessage, setResponseMessage] = useState<string>("");

    const navigate = useNavigate();

    const handleGithubSignIn = async () => {
        try {
            const response = await api.get('/auth/github');
            if (response.data.success && response.data.url) {
                window.location.href = response.data.url;
            }
        } catch (error) {
            console.error("Error calling /test endpoint:", error);
            setResponseMessage("Failed to fetch data.");
        }
    };

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            <HeroSection />

            {/* Features Section */}
            <FeaturesSection />

            {/* How It Works Section */}
            <HowItWorksSection />

            {/* Testimonials Section */}
            <TestimonialsSection />

            {/* Footer Section */}
            <Footer />

            
        </div>
    );
}
