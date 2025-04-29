import HeroSection from '../components/HeroSection';
import FeaturesSection from "../components/FeaturesSection";
import HowItWorksSection from "../components/HowItWorksSection";
import TestimonialsSection from "../components/TestimonialsSection";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";


export default function Home() {

    const navigate = useNavigate();

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
