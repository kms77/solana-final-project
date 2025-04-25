export default function FeaturesSection() {
    return (
        <section id="features" className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">
                    Why Choose TheCollaborators?
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Our platform brings together the best tools and
                    features to make collaboration seamless and
                    efficient.
                </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {/* Feature 1 */}
                <div>
                    <div className="rounded-lg border text-card-foreground shadow-sm bg-zinc-800 border-zinc-700 hover:border-cyan-400/50 transition-all duration-300">
                        <div className="flex flex-col space-y-1.5 p-6">
                            <div className="mb-4">
                                {/* SVG omitted */}
                            </div>
                            <div className="text-2xl font-semibold leading-none tracking-tight">
                                Code Together
                            </div>
                        </div>
                        <div className="p-6 pt-0">
                            <div className="text-sm text-gray-400">
                                Real-time collaborative coding
                                environment with syntax highlighting and
                                version control.
                            </div>
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
                            <div className="text-2xl font-semibold leading-none tracking-tight">
                                Team Management
                            </div>
                        </div>
                        <div className="p-6 pt-0">
                            <div className="text-sm text-gray-400">
                                Organize your team, assign roles, and
                                track progress all in one place.
                            </div>
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
                            <div className="text-2xl font-semibold leading-none tracking-tight">
                                Instant Deployment
                            </div>
                        </div>
                        <div className="p-6 pt-0">
                            <div className="text-sm text-gray-400">
                                Deploy your projects with a single click
                                to any major cloud provider.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}