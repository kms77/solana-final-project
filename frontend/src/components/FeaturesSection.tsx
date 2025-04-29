export default function FeaturesSection() {
    return (
     
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
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/>
                                        </svg>
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
                            <div className="rounded-lg border text-card-foreground shadow-sm bg-zinc-800 border-zinc-700 hover:border-teal-400/50 transition-all duration-300">
                                <div className="flex flex-col space-y-1.5 p-6">
                                    <div className="mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                                        </svg>
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
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"/><path d="M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1"/><path d="m11 7-3 5h4l-3 5"/><line x1="22" x2="22" y1="11" y2="13"/>
                                        </svg>
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
    );
}