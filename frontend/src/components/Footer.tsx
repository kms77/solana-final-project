export default function Footer() {
    return (
        <>
            <section className="py-20 bg-black relative overflow-hidden">
                {/* Background Grid - Omitted */}
                <div className="container mx-auto px-4 z-10">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold mb-4">
                            Ready to Collaborate?
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8">
                            Join thousands of developers building better
                            software, faster.
                        </p>
                        <button className="whitespace-nowrap rounded-md font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary hover:bg-primary/90 h-10 px-4 bg-gradient-to-r from-cyan-400 to-teal-400 text-black hover:from-cyan-500 hover:to-teal-500 transition-all duration-300 py-6 text-lg flex items-center justify-center gap-2 max-w-xs mx-auto">
                            {/* SVG omitted */}
                            Get Started with GitHub
                        </button>
                    </div>
                </div>
            </section>

            <footer className="py-8 bg-zinc-900 border-t border-zinc-800">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm mb-4 md:mb-0">
                        © 2024 TheCollaborators. All rights reserved.
                    </p>
                    <div className="flex space-x-4">
                        <a
                            href="#"
                            className="text-gray-400 hover:text-cyan-400 transition-colors"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-cyan-400 transition-colors"
                        >
                            Terms of Service
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}
