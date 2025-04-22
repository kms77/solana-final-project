"use client"
              
import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Dashboard from './Dashboard'

// Replace Next.js Image with standard img
const Image = ({
  src,
  alt,
  fill,
  className,
  priority,
}: {
  src: string
  alt: string
  fill?: boolean
  className?: string
  priority?: boolean
}) => {
  const imgStyle = fill ? { width: "100%", height: "100%", objectFit: "contain" } : {}
  return <img src={src || "/placeholder.svg"} alt={alt} style={imgStyle as React.CSSProperties} className={className} />
}

// Replace Next.js Link with standard a
const Link = ({
  href,
  className,
  children,
}: {
  href: string
  className?: string
  children: React.ReactNode
}) => {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  )
}

// Icons
const Github = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
)

// Update ChevronDown component props
const ChevronDown = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
)

const Code = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
)

const Users = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
)

const Zap = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
)

// Button component
const Button = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}) => {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

// Card components
const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={`rounded-xl border bg-card text-card-foreground shadow ${className}`}>{children}</div>
}

const CardHeader = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col space-y-1.5 p-6">{children}</div>
}

const CardTitle = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <h3 className={`font-semibold leading-none tracking-tight ${className}`}>{children}</h3>
}

const CardDescription = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <p className={`text-sm text-muted-foreground ${className}`}>{children}</p>
}

const CardContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-6 pt-0">{children}</div>
}

// At the top with other imports


function App() {
  // Add state at the component level (before animations)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  // Background pattern animation
  const [dots, setDots] = useState<Array<{ id: number; active: boolean; delay: number }>>([])

  useEffect(() => {
    // Generate random dots for the background pattern
    const newDots = Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      active: Math.random() > 0.8,
      delay: Math.random() * 5,
    }))
    setDots(newDots)

    // Animate dots periodically
    const interval = setInterval(() => {
      setDots((prev) =>
        prev.map((dot) => ({
          ...dot,
          active: Math.random() > 0.8,
        })),
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const scrollToContent = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {isLoggedIn ? (
        <Dashboard />
      ) : (
        <>
          {/* Animated Background pattern */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            {dots.map((dot, i) => (
              <motion.div
                key={i}
                initial={{ opacity: dot.active ? 1 : 0 }}
                animate={{ opacity: dot.active ? 1 : 0 }}
                transition={{ duration: 1.5, delay: dot.delay }}
                className={`w-2 h-2 rounded-full ${dot.active ? "bg-cyan-400" : "bg-transparent"}`}
              />
            ))}
          </div>

          {/* Hero Section with Sign In */}
          <section className="min-h-screen flex flex-col items-center justify-center relative">
            {/* Corner brackets */}
            <motion.div
              className="absolute top-10 left-10 w-16 h-16 border-t-2 border-l-2 border-cyan-400 rounded-tl-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.div
              className="absolute top-10 right-10 w-16 h-16 border-t-2 border-r-2 border-teal-400 rounded-tr-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            <motion.div
              className="absolute bottom-10 left-10 w-16 h-16 border-b-2 border-l-2 border-teal-400 rounded-bl-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
            <motion.div
              className="absolute bottom-10 right-10 w-16 h-16 border-b-2 border-r-2 border-cyan-400 rounded-br-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            />

            <div className="container max-w-md px-4 z-10">
              <motion.div
                className="flex flex-col items-center space-y-8"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              >
                {/* Logo */}
                <motion.div
                  className="relative w-40 h-40"
                  whileHover={{ scale: 1.05 }}
                  animate={{
                    y: [-5, 0],
                  }}
                  transition={{
                    type: "tween",
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                >
                  <div className="w-full h-full relative">
                    <Image src="/logo.png" alt="TheCollaborators Logo" fill className="object-contain" priority />
                  </div>
                </motion.div>

                {/* App Name */}
                <motion.h1
                  className="text-4xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent"
                  animate={{
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                  }}
                >
                  TheCollaborators
                </motion.h1>

                {/* Sign In Button */}
                <motion.div
                  className="w-full max-w-xs mt-8"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Button 
                    className="w-full bg-gradient-to-r from-cyan-400 to-teal-400 text-black hover:from-cyan-500 hover:to-teal-500 transition-all duration-300 py-6 text-lg flex items-center justify-center gap-2"
                    onClick={() => setIsLoggedIn(true)}
                  >
                    <Github />
                    Sign in with GitHub
                  </Button>
                </motion.div>

                {/* Tagline */}
                <motion.p
                  className="text-gray-400 text-center mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                >
                  Collaborate seamlessly. Build together.
                </motion.p>
              </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
              onClick={scrollToContent}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
            >
              <motion.p className="text-gray-400 mb-2 text-sm">Scroll to explore</motion.p>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                }}
              >
                <ChevronDown />
              </motion.div>
            </motion.div>
          </section>

          {/* Features Section */}
          <section id="features" className="py-20 bg-zinc-900">
            <div className="container mx-auto px-4">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-4">Why Choose TheCollaborators?</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Our platform brings together the best tools and features to make collaboration seamless and efficient.
                </p>
              </motion.div>

              <motion.div
                className="grid md:grid-cols-3 gap-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                {[
                  {
                    icon: <Code />,
                    title: "Code Together",
                    description: "Real-time collaborative coding environment with syntax highlighting and version control.",
                  },
                  {
                    icon: <Users />,
                    title: "Team Management",
                    description: "Organize your team, assign roles, and track progress all in one place.",
                  },
                  {
                    icon: <Zap />,
                    title: "Instant Deployment",
                    description: "Deploy your projects with a single click to any major cloud provider.",
                  },
                ].map((feature, index) => (
                  <motion.div key={index} variants={staggerItem}>
                    <Card className="bg-zinc-800 border-zinc-700 hover:border-cyan-400/50 transition-all duration-300">
                      <CardHeader>
                        <div className="mb-4 w-10 h-10 text-cyan-400">{feature.icon}</div>
                        <CardTitle>{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-400">{feature.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="py-20 bg-black">
            <div className="container mx-auto px-4">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-4">How It Works</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Get started in minutes and transform how your team collaborates on projects.
                </p>
              </motion.div>

              <motion.div
                className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                {[
                  { step: "1", title: "Sign In", description: "Connect with your GitHub account" },
                  { step: "2", title: "Create Team", description: "Invite your collaborators" },
                  { step: "3", title: "Start Project", description: "Initialize your workspace" },
                  { step: "4", title: "Collaborate", description: "Work together in real-time" },
                ].map((item, index) => (
                  <motion.div key={index} className="flex flex-col items-center text-center" variants={staggerItem}>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 flex items-center justify-center text-black font-bold mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Testimonials Section (Placeholder) */}
          <section className="py-20 bg-zinc-900">
            <div className="container mx-auto px-4">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-4">What Developers Say</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Hear from developers who have transformed their workflow with TheCollaborators.
                </p>
              </motion.div>

              <motion.div
                className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                {[
                  {
                    name: "Alex Johnson",
                    role: "Senior Developer",
                    company: "TechCorp",
                    quote:
                      "TheCollaborators has completely transformed how our team works together. The real-time collaboration features are game-changing.",
                  },
                  {
                    name: "Sarah Chen",
                    role: "Tech Lead",
                    company: "InnovateLabs",
                    quote:
                      "We've cut our development time in half since adopting TheCollaborators. The seamless GitHub integration makes everything so much easier.",
                  },
                ].map((testimonial, index) => (
                  <motion.div key={index} variants={staggerItem}>
                    <Card className="bg-zinc-800 border-zinc-700">
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400/20 to-teal-400/20 flex items-center justify-center">
                            <span className="font-bold text-cyan-400">{testimonial.name.charAt(0)}</span>
                          </div>
                          <div>
                            <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                            <CardDescription className="text-gray-400">
                              {testimonial.role}, {testimonial.company}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300 italic">"{testimonial.quote}"</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-black relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="grid grid-cols-12 gap-4 h-full w-full">
                {dots.slice(0, 50).map((dot, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: dot.active ? 1 : 0 }}
                    animate={{ opacity: dot.active ? 1 : 0 }}
                    transition={{ duration: 1.5, delay: dot.delay }}
                    className={`w-2 h-2 rounded-full ${dot.active ? "bg-cyan-400" : "bg-transparent"}`}
                  />
                ))}
              </div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                className="max-w-3xl mx-auto text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6">Ready to transform your collaboration?</h2>
                <p className="text-gray-400 mb-8">
                  Join thousands of developers who are already experiencing the future of collaborative development.
                </p>
                <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <Button className="bg-gradient-to-r from-cyan-400 to-teal-400 text-black hover:from-cyan-500 hover:to-teal-500 transition-all duration-300 py-6 px-8 text-lg">
                    Get Started Now
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-12 bg-zinc-900 border-t border-zinc-800">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center gap-2 mb-6 md:mb-0">
                  <div className="relative w-8 h-8">
                    <Image src="/logo.png" alt="TheCollaborators Logo" fill className="object-contain" />
                  </div>
                  <span className="font-bold">TheCollaborators</span>
                </div>
                <div className="flex gap-8">
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Features
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Pricing
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Documentation
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Contact
                  </Link>
                </div>
              </div>
              <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-gray-500 text-sm">
                © 2023 TheCollaborators. All rights reserved.
              </div>
            </div>
          </footer>

          {/* Back to top button */}
          <motion.button
            className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 flex items-center justify-center text-black z-50"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            whileHover={{ scale: 1.1 }}
          >
            <ChevronDown className="w-6 h-6 transform rotate-180" />
          </motion.button>
          </>
      )}
      </div>
    )
}

export default App
