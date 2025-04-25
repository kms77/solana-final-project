import { Link } from "react-router-dom";
import ChevronDownIcon from "./svgs/ChevronDownIcon";
import GithubIcon from "./svgs/GithubIcon";

export default function HeroSection() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center relative">
            <div className="absolute top-10 left-10 w-16 h-16 border-t-2 border-l-2 border-cyan-400 rounded-tl-xl" />
            <div className="absolute top-10 right-10 w-16 h-16 border-t-2 border-r-2 border-teal-400 rounded-tr-xl" />
            <div className="absolute bottom-10 left-10 w-16 h-16 border-b-2 border-l-2 border-teal-400 rounded-bl-xl" />
            <div className="absolute bottom-10 right-10 w-16 h-16 border-b-2 border-r-2 border-cyan-400 rounded-br-xl" />
            <div className="container max-w-md px-4 z-10">
                <div className="flex flex-col items-center space-y-8">
                    <div className="relative w-40 h-40">
                        <img
                            alt="TheCollaborators Logo"
                            className="object-contain"
                            src="/logo.png"
                        />
                    </div>
                    <h1 className="text-4xl font-bold text-cyan-600 tracking-tight">
                        TheCollaborators
                    </h1>
                    <div className="w-full max-w-xs mt-8">
                        <Link
                            to="/dashboard"
                            className="whitespace-nowrap rounded-md font-medium h-10 px-4 w-full bg-cyan-500 text-white hover:from-cyan-500 hover:to-teal-500 transition-all duration-300 py-6 text-lg flex items-center justify-center gap-2"
                        >
                            <GithubIcon className="w-6 h-6" />
                            Sign in with GitHub
                        </Link>
                    </div>
                    <p className="text-gray-400 text-center mt-4">
                        Collaborate seamlessly. Build together.
                    </p>
                </div>
            </div>
            <div className="absolute bottom-10 transform -translate-x-1/2 flex flex-col items-center cursor-pointer">
                <p className="text-gray-400 mb-2 text-sm">Scroll to explore</p>
                <div>
                    <ChevronDownIcon className="text-cyan-400 w-6 h-6" />
                </div>
            </div>
        </section>
    );
}
