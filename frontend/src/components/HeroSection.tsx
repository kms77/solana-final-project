import { Link } from "react-router-dom";
import ChevronDownIcon from "./svgs/ChevronDownIcon";
import GithubIcon from "./svgs/GithubIcon";
// Assuming Button component is created as shown above
// import Button from './Button'; // Import if using Button component directly

export default function HeroSection() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center relative">
                <div className="absolute top-10 left-10 w-16 h-16 border-t-2 border-l-2 border-cyan-400 rounded-tl-xl" style={{ opacity: 1, transform: 'none' }}></div>
                <div className="absolute top-10 right-10 w-16 h-16 border-t-2 border-r-2 border-teal-400 rounded-tr-xl" style={{ opacity: 1, transform: 'none' }}></div>
                <div className="absolute bottom-10 left-10 w-16 h-16 border-b-2 border-l-2 border-teal-400 rounded-bl-xl" style={{ opacity: 1, transform: 'none' }}></div>
                <div className="absolute bottom-10 right-10 w-16 h-16 border-b-2 border-r-2 border-cyan-400 rounded-br-xl" style={{ opacity: 1, transform: 'none' }}></div>
                <div className="container max-w-md px-4 z-10">
                    <div className="flex flex-col items-center space-y-8" style={{ opacity: 1, transform: 'none' }}>
                        <div className="relative w-40 h-40" style={{ transform: 'translateY(-1.0619px) scale(1)' }}>
                            <img
                                alt="TheCollaborators Logo"
                                decoding="async"
                                data-nimg="fill"
                                className="object-contain"
                                style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0 }}
                                // Corrected path to logo in public folder
                                src="/IMG_6498.png"
                            />
                        </div>
                        <h1 className="text-4xl font-bold text-cyan-600 tracking-tight bg-linear-to-r from-cyan-400 to-teal-400 bg-clip-text">TheCollaborators</h1>
                        <div className="w-full max-w-xs mt-8">
                            <Link 
                            to="/dashboard"
                            className="whitespace-nowrap rounded-md font-medium h-10 px-4 w-full bg-cyan-500 from-cyan-500 to-blue-5000 text-black hover:from-cyan-500 hover:to-teal-500 transition-all duration-300 py-6 text-lg flex items-center justify-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github w-5 h-5">
                                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                </svg>
                                Sign in with GitHub
                            </Link>
                        </div>
                        
                        <p className="text-gray-400 text-center mt-4" style={{ opacity: 1 }}>Collaborate seamlessly. Build together.</p>
                    </div>
                </div>
                {/* Updated scroll indicator container */}
                <div className="absolute bottom-10  transform -translate-x-1/2 flex flex-col items-center cursor-pointer" style={{ opacity: 1 }}>
                    <p className="text-gray-400 mb-2 text-sm">Scroll to explore</p>
                    <div style={{ transform: 'translateY(4.09984px)' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down text-cyan-400 w-6 h-6">
                            <path d="m6 9 6 6 6-6"></path>
                        </svg>
                    </div>
                </div>
            </section>
        
    );
}
