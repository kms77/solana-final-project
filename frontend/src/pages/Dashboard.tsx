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
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <h1 className="text-4xl mb-6">Dashboard</h1>
            
            {/* Main Grid */}
            <div className="flex flex-col lg:flex-row gap-6">
                {/* Left Section - Chart (2/3 width) */}
                <div className="lg:flex-1">
                    <div className="bg-gray-800 p-4 rounded-lg shadow-md w-fit">
                        <div className="space-y-4">
                            <h2 className="text-lg font-semibold">Commit Activity</h2>
                            <div className="flex gap-2">
                                <div className="grid grid-flow-col gap-1.5 w-[350px]">
                                    {Array.from({ length: 12 }).map((_, weekIndex) => (
                                        <div 
                                            key={weekIndex} 
                                            className="grid grid-flow-row gap-1.5 relative"
                                            onMouseEnter={() => setHoveredWeek(weekIndex)}
                                            onMouseLeave={() => setHoveredWeek(null)}
                                        >
                                            {mockCommitData
                                                .slice(weekIndex * 7, (weekIndex + 1) * 7)
                                                .map((day, dayIndex) => (
                                                    <div
                                                        key={dayIndex}
                                                        className="w-3.5 h-3.5 rounded-sm cursor-pointer relative transition-opacity duration-200"
                                                        style={{ 
                                                            backgroundColor: colors[Math.min(day.count, 4)],
                                                            opacity: hoveredWeek === null ? 
                                                                (day.count === 0 ? 0.4 : 1) : 
                                                                (weekIndex === hoveredWeek ? 1 : 0.5)
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
                                                            <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-gray-800 p-2 rounded text-sm text-gray-100 border border-gray-600 z-30 min-w-[160px]">
                                                                {day.count} commits on {day.date.toLocaleDateString('en-US', { 
                                                                    month: 'short', 
                                                                    day: 'numeric' 
                                                                })}
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            {hoveredWeek === weekIndex && (
                                                <div className="absolute inset-0 border-2 border-blue-400/30 rounded-sm pointer-events-none"/>
                                            )}
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

                {/* Right Section - Stats (1/3 width) */}
                <div className="lg:w-96">
                    <div className="bg-gray-800 p-3 rounded-lg shadow-md space-y-3">
                        {/* Total Commits Card */}
                        <div className="bg-gray-700 p-2 rounded-lg">
                            <div className="flex items-center gap-2">
                                <div className="p-1.5 bg-blue-600 rounded-lg text-sm">📦</div>
                                <div>
                                    <p className="text-xs text-gray-400">Total Commits</p>
                                    <p className="text-xl font-semibold">{totalCommits}</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Tokens Held Card */}
                        <div className="bg-gray-700 p-2 rounded-lg">
                            <div className="flex items-center gap-2">
                                <div className="p-1.5 bg-green-600 rounded-lg text-sm">🪙</div>
                                <div>
                                    <p className="text-xs text-gray-400">Tokens Held</p>
                                    <p className="text-xl font-semibold">{tokensHeld}</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Tokens Claimed Card */}
                        <div className="bg-gray-700 p-2 rounded-lg">
                            <div className="flex items-center gap-2">
                                <div className="p-1.5 bg-purple-600 rounded-lg text-sm">🎫</div>
                                <div>
                                    <p className="text-xs text-gray-400">Tokens Claimed</p>
                                    <p className="text-xl font-semibold">{tokensClaimed}</p>
                                </div>
                                <button 
                                    className="ml-auto px-2 py-1 bg-blue-600 hover:bg-blue-700 rounded text-xs disabled:opacity-50"
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
    );
}