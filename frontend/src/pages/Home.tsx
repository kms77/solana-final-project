import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            {/* Background Grid - Omitted as it's complex and potentially dynamic */}
            {/* <div className="absolute inset-0 opacity-20 pointer-events-none"> ... </div> */}

            {/* Hero Section - Replicated from HeroSection.html */}
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
                                src="/logo.png"
                            />
                        </div>
                        <h1 className="text-4xl font-bold text-cyan-600 tracking-tight bg-linear-to-r from-cyan-400 to-teal-400 bg-clip-text">TheCollaborators</h1>
                        <div className="w-full max-w-xs mt-8">
                            <Link 
                            to="/dashboard"
                            className="whitespace-nowrap rounded-md font-medium h-10 px-4 w-full bg-cyan-500 from-cyan-500 to-blue-5000 text-white hover:from-cyan-500 hover:to-teal-500 transition-all duration-300 py-6 text-lg flex items-center justify-center gap-2">
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
                <div className="absolute bottom-10 transform -translate-x-1/2 flex flex-col items-center cursor-pointer" style={{ opacity: 1 }}>
                    <p className="text-gray-400 mb-2 text-sm">Scroll to explore</p>
                    <div style={{ transform: 'translateY(4.09984px)' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down text-cyan-400 w-6 h-6">
                            <path d="m6 9 6 6 6-6"></path>
                        </svg>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 bg-zinc-900">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Why Choose TheCollaborators?</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Our platform brings together the best tools and features to make collaboration seamless and efficient.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div>
                            <div className="rounded-lg border text-card-foreground shadow-sm bg-zinc-800 border-zinc-700 hover:border-cyan-400/50 transition-all duration-300">
                                <div className="flex flex-col space-y-1.5 p-6">
                                    <div className="mb-4">
                                        {/* SVG omitted */}
                                    </div>
                                    <div className="text-2xl font-semibold leading-none tracking-tight">Code Together</div>
                                </div>
                                <div className="p-6 pt-0">
                                    <div className="text-sm text-gray-400">Real-time collaborative coding environment with syntax highlighting and version control.</div>
                                </div>
                            </div>
                        </div>
                        {/* Feature 2 */}
                        <div>
                            <div className="rounded-lg border text-card-foreground shadow-sm bg-zinc-800 border-zinc-700 hover:border-cyan-400/50 transition-all duration-300">
                                <div className="flex flex-col space-y-1.5 p-6">
                                    <div className="mb-4">
                                        {/* SVG omitted */}
                                    </div>
                                    <div className="text-2xl font-semibold leading-none tracking-tight">Team Management</div>
                                </div>
                                <div className="p-6 pt-0">
                                    <div className="text-sm text-gray-400">Organize your team, assign roles, and track progress all in one place.</div>
                                </div>
                            </div>
                        </div>
                        {/* Feature 3 */}
                        <div>
                            <div className="rounded-lg border text-card-foreground shadow-sm bg-zinc-800 border-zinc-700 hover:border-cyan-400/50 transition-all duration-300">
                                <div className="flex flex-col space-y-1.5 p-6">
                                    <div className="mb-4">
                                        {/* SVG omitted */}
                                    </div>
                                    <div className="text-2xl font-semibold leading-none tracking-tight">Instant Deployment</div>
                                </div>
                                <div className="p-6 pt-0">
                                    <div className="text-sm text-gray-400">Deploy your projects with a single click to any major cloud provider.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-20 bg-black">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Get started in minutes and transform how your team collaborates on projects.</p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        {/* Step 1 */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 flex items-center justify-center text-black font-bold mb-4">1</div>
                            <h3 className="text-xl font-bold mb-2">Sign In</h3>
                            <p className="text-gray-400">Connect with your GitHub account</p>
                        </div>
                        {/* Step 2 */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 flex items-center justify-center text-black font-bold mb-4">2</div>
                            <h3 className="text-xl font-bold mb-2">Create Team</h3>
                            <p className="text-gray-400">Invite your collaborators</p>
                        </div>
                        {/* Step 3 */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 flex items-center justify-center text-black font-bold mb-4">3</div>
                            <h3 className="text-xl font-bold mb-2">Start Project</h3>
                            <p className="text-gray-400">Initialize your workspace</p>
                        </div>
                        {/* Step 4 */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 flex items-center justify-center text-black font-bold mb-4">4</div>
                            <h3 className="text-xl font-bold mb-2">Collaborate</h3>
                            <p className="text-gray-400">Work together in real-time</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-zinc-900">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">What Developers Say</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Hear from developers who have transformed their workflow with TheCollaborators.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Testimonial 1 */}
                        <div>
                            <div className="rounded-lg border text-card-foreground shadow-sm bg-zinc-800 border-zinc-700">
                                <div className="flex flex-col space-y-1.5 p-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400/20 to-teal-400/20 flex items-center justify-center">
                                            <span className="font-bold text-cyan-400">A</span>
                                        </div>
                                        <div>
                                            <div className="font-semibold tracking-tight text-lg">Alex Johnson</div>
                                            <div className="text-sm text-gray-400">Senior Developer, TechCorp</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 pt-0">
                                    <p className="text-gray-300 italic">"TheCollaborators has completely transformed how our team works together. The real-time collaboration features are game-changing."</p>
                                </div>
                            </div>
                        </div>
                        {/* Testimonial 2 */}
                        <div>
                            <div className="rounded-lg border text-card-foreground shadow-sm bg-zinc-800 border-zinc-700">
                                <div className="flex flex-col space-y-1.5 p-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400/20 to-teal-400/20 flex items-center justify-center">
                                            <span className="font-bold text-cyan-400">S</span>
                                        </div>
                                        <div>
                                            <div className="font-semibold tracking-tight text-lg">Sarah Chen</div>
                                            <div className="text-sm text-gray-400">Tech Lead, InnovateLabs</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 pt-0">
                                    <p className="text-gray-300 italic">"We've cut our development time in half since adopting TheCollaborators. The seamless GitHub integration makes everything so much easier."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <section className="py-20 bg-black relative overflow-hidden">
                {/* Background Grid - Omitted */}
                <div className="container mx-auto px-4 z-10">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold mb-4">Ready to Collaborate?</h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8">Join thousands of developers building better software, faster.</p>
                        <button className="whitespace-nowrap rounded-md font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary hover:bg-primary/90 h-10 px-4 bg-gradient-to-r from-cyan-400 to-teal-400 text-black hover:from-cyan-500 hover:to-teal-500 transition-all duration-300 py-6 text-lg flex items-center justify-center gap-2 max-w-xs mx-auto">
                            {/* SVG omitted */}
                            Get Started with GitHub
                        </button>
                    </div>
                </div>
            </section>

            <footer className="py-8 bg-zinc-900 border-t border-zinc-800">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2024 TheCollaborators. All rights reserved.</p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Privacy Policy</a>
                        <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
