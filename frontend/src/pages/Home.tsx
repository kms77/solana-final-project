import { useState } from "react";
import api from "../api/axios";
import HeroSection from '../components/HeroSection';
import FeaturesSection from "../components/FeaturesSection";
import HowItWorksSection from "../components/HowItWorksSection";
import TestimonialsSection from "../components/TestimonialsSection";
import Footer from "../components/Footer";

export default function Home() {
    const [responseMessage, setResponseMessage] = useState<string>("");

    const handleButtonClick = async () => {
        try {
            const response = await api.get("/test"); // Call the /test endpoint
            setResponseMessage(response.data.message); // Update state with the response message
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
