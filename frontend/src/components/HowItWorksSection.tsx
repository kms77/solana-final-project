export default function HowItWorksSection() {
    return (
        <section className="py-20 bg-black">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">
                            How It Works
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Get started in minutes and transform how your team
                            collaborates on projects.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        {/* Step 1 */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 flex items-center justify-center text-black font-bold mb-4">
                                1
                            </div>
                            <h3 className="text-xl font-bold mb-2">Sign In</h3>
                            <p className="text-gray-400">
                                Connect with your GitHub account
                            </p>
                        </div>
                        {/* Step 2 */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 flex items-center justify-center text-black font-bold mb-4">
                                2
                            </div>
                            <h3 className="text-xl font-bold mb-2">
                                Create Team
                            </h3>
                            <p className="text-gray-400">
                                Invite your collaborators
                            </p>
                        </div>
                        {/* Step 3 */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 flex items-center justify-center text-black font-bold mb-4">
                                3
                            </div>
                            <h3 className="text-xl font-bold mb-2">
                                Start Project
                            </h3>
                            <p className="text-gray-400">
                                Initialize your workspace
                            </p>
                        </div>
                        {/* Step 4 */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 flex items-center justify-center text-black font-bold mb-4">
                                4
                            </div>
                            <h3 className="text-xl font-bold mb-2">
                                Collaborate
                            </h3>
                            <p className="text-gray-400">
                                Work together in real-time
                            </p>
                        </div>
                    </div>
                </div>
            </section>
    );
}