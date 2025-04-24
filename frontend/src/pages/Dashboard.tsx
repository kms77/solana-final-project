import { useState } from "react";

const mockCommitData = Array.from({ length: 84 }, (_, i) => ({
  date: new Date(Date.now() - (84 - i) * 86400000),
  count: Math.floor(Math.random() * 10)
}));

const colors = ['#ebf6ff', '#7dd3fc', '#38bdf8', '#0ea5e9', '#0369a1'];

export default function Dashboard() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [hoveredWeek, setHoveredWeek] = useState<number | null>(null);
    const [tokensClaimed, setTokensClaimed] = useState<number>(0);
    
    // Add these calculations inside the component
    const totalCommits = mockCommitData.reduce((sum, day) => sum + day.count, 0);
    const tokensHeld = Math.floor(totalCommits / 10);

    return (
        <div className="min-h-screen bg-black text-white p-8">
            <h1 className="text-4xl mb-6">Dashboard</h1>
            
            {/* Main Grid */}
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Left Section - Chart */}
                <div className="lg:flex-1">
                    <div className="bg-zinc-900 p-4 rounded-lg shadow-md w-fit">
                        <div className="space-y-4">
                            <h2 className="text-lg font-semibold">Commit Activity</h2>
                            <div className="flex gap-2 justify-center">
                                <div className="grid grid-flow-col gap-0.5 h-[500px] w-[600px]">
                                    {Array.from({ length: 12 }).map((_, weekIndex) => (
                                        <div 
                                            key={weekIndex} 
                                            className="grid grid-flow-row gap-0.5 relative group"
                                            onMouseEnter={() => setHoveredWeek(weekIndex)}
                                            onMouseLeave={() => setHoveredWeek(null)}
                                        >
                                            {mockCommitData
                                                .slice(weekIndex * 7, (weekIndex + 1) * 7)
                                                .map((day, dayIndex) => (
                                                    <div
                                                        key={dayIndex}
                                                        className="w-5 h-5 rounded-sm cursor-pointer relative transition-all duration-200"
                                                        style={{ 
                                                            backgroundColor: colors[Math.min(day.count, 4)],
                                                            opacity: hoveredWeek === null ? 
                                                                (day.count === 0 ? 0.4 : 1) : 
                                                                (weekIndex === hoveredWeek ? 1 : 0.4)
                                                        }}
                                                        onMouseEnter={() => {
                                                            setActiveIndex(weekIndex * 7 + dayIndex);
                                                            setHoveredWeek(weekIndex);
                                                        }}
                                                        onMouseLeave={() => {
                                                            setActiveIndex(null);
                                                            setHoveredWeek(null);
                                                        }}
                                                    >
                                                        {activeIndex === weekIndex * 7 + dayIndex && (
                                                            <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-gray-800 p-2 rounded text-sm text-gray-100 border border-gray-600 z-30 min-w-[180px]">
                                                                {day.count} commits on {day.date.toLocaleDateString('en-US', { 
                                                                    month: 'short', 
                                                                    day: 'numeric' 
                                                                })}
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            {hoveredWeek === weekIndex && (
                                                <div className="absolute inset-[-2px] border-2 border-sky-400/90 rounded-md pointer-events-none shadow-xl shadow-sky-500/30 transition-all duration-150 z-20"/>
                                            )}
                                            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"/>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Legend */}
                            <div className="flex items-center justify-center gap-2 text-sm mt-2">
                                <span className="text-xs text-gray-400">Less</span>
                                <div className="flex items-center gap-1">
                                    {colors.map((color, i) => (
                                        <div 
                                            key={i} 
                                            className="w-2 h-2 rounded-sm"  
                                            style={{ backgroundColor: color }}
                                        />
                                    ))}
                                </div>
                                <span className="text-xs text-gray-400">More</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section - Stats */}
                <div className="lg:flex-1">
                    <div className="bg-zinc-900 p-4 rounded-lg shadow-md w-full space-y-4">
                        <h2 className="text-xl font-semibold">Developer Stats</h2>
                        <div className="space-y-3">
                            {/* Total Commits Card */}
                            <div className="bg-zinc-700 p-4 rounded-lg">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-blue-600 rounded-lg text-xl">📦</div>
                                    <div>
                                        <p className="text-md text-gray-400">Total Commits</p>
                                        <p className="text-2xl font-semibold">{totalCommits}</p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Similar increases for other cards */}
                            <div className="bg-zinc-700 p-4 rounded-lg">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-green-600 rounded-lg text-xl">🟡</div>
                                    <div>
                                        <p className="text-md text-gray-400">Tokens Held</p>
                                        <p className="text-2xl font-semibold">{tokensHeld}</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="bg-zinc-700 p-4 rounded-lg">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-purple-600 rounded-lg text-xl">🎫</div>
                                    <div>
                                        <p className="text-md text-gray-400">Tokens Claimed</p>
                                        <p className="text-2xl font-semibold">{tokensClaimed}</p>
                                    </div>
                                    <button 
                                        className="ml-auto px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-md disabled:opacity-50"
                                        onClick={() => setTokensClaimed(prev => prev + tokensHeld)}
                                        disabled={tokensHeld === 0}
                                    >
                                        Claim All
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}