export default function TestimonialsSection() {
    return (
        <section className="py-20 bg-zinc-900">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">
                            What Developers Say
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Hear from developers who have transformed their
                            workflow with TheCollaborators.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Testimonial 1 */}
                        <div>
                            <div className="rounded-lg border text-card-foreground shadow-sm bg-zinc-800 border-zinc-700">
                                <div className="flex flex-col space-y-1.5 p-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400/20 to-teal-400/20 flex items-center justify-center">
                                            <span className="font-bold text-cyan-400">
                                                A
                                            </span>
                                        </div>
                                        <div>
                                            <div className="font-semibold tracking-tight text-lg">
                                                Alex Johnson
                                            </div>
                                            <div className="text-sm text-gray-400">
                                                Senior Developer, TechCorp
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 pt-0">
                                    <p className="text-gray-300 italic">
                                        "TheCollaborators has completely
                                        transformed how our team works together.
                                        The real-time collaboration features are
                                        game-changing."
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Testimonial 2 */}
                        <div>
                            <div className="rounded-lg border text-card-foreground shadow-sm bg-zinc-800 border-zinc-700">
                                <div className="flex flex-col space-y-1.5 p-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400/20 to-teal-400/20 flex items-center justify-center">
                                            <span className="font-bold text-cyan-400">
                                                S
                                            </span>
                                        </div>
                                        <div>
                                            <div className="font-semibold tracking-tight text-lg">
                                                Sarah Chen
                                            </div>
                                            <div className="text-sm text-gray-400">
                                                Tech Lead, InnovateLabs
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 pt-0">
                                    <p className="text-gray-300 italic">
                                        "We've cut our development time in half
                                        since adopting TheCollaborators. The
                                        seamless GitHub integration makes
                                        everything so much easier."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
}