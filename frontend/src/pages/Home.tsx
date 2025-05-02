import HeroSection from '../components/HeroSection';
import FeaturesSection from "../components/FeaturesSection";
import HowItWorksSection from "../components/HowItWorksSection";
import TestimonialsSection from "../components/TestimonialsSection";
import Footer from "../components/Footer";


export default function Home() {


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
