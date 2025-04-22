import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from "./components/ui/cardholder"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
// Update imports at the top


// Remove these incorrect imports
// import Card from "./App"
// import CardHeader from "./App"
// import CardTitle from "./App"
// import CardContent from "./App"

const Dashboard = () => {
  const [tokens, setTokens] = useState(150)
  const [totalTokens, setTotalTokens] = useState(450)
  const [commits, setCommits] = useState(27)
  const [dots, setDots] = useState<Array<{ id: number; active: boolean; delay: number }>>([])

  useEffect(() => {
    const newDots = Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      active: Math.random() > 0.8,
      delay: Math.random() * 5,
    }))
    setDots(newDots)

    const interval = setInterval(() => {
      setDots(prev => prev.map(dot => ({ ...dot, active: Math.random() > 0.8 })))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const handleClaimTokens = () => {
    setTokens(prev => prev + 50)
    setTotalTokens(prev => prev + 50)
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="grid grid-cols-12 gap-4 h-full w-full">
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
      </div>

      <section className="min-h-screen flex flex-col items-center justify-center relative">
        <div className="container max-w-4xl px-4 z-10">
          <motion.div
            className="flex flex-col items-center space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Developer Dashboard
            </motion.h1>

            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
              }}
              initial="hidden"
              animate="visible"
            >
              {[
                { title: "Total Commits", value: commits },
                { title: "Current Tokens", value: tokens },
                { title: "Total Tokens Earned", value: totalTokens },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                >
                  <Card className="bg-zinc-800 border-zinc-700 hover:border-cyan-400/30 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg">{stat.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-cyan-400">{stat.value}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <button
                  onClick={handleClaimTokens}
                  className="w-full h-full bg-gradient-to-r from-cyan-400 to-teal-400 text-black hover:from-cyan-500 hover:to-teal-500 transition-all duration-300 rounded-xl p-6 text-lg font-medium"
                >
                  Claim Tokens
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard