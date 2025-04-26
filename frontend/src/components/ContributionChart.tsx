import { useState } from "react";

interface CommitData {
    date: Date;
    count: number;
}

interface ContributionChartProps {
    commitData: CommitData[];
    colors: string[];
    className?: string;
}

export default function ContributionChart({
    commitData,
    colors,
    className = "",
}: ContributionChartProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [hoveredWeek, setHoveredWeek] = useState<number | null>(null);

    // Helper function to get color based on count
    const getColor = (count: number) => {
        if (count <= 0) return colors[0]; // Base color for 0 commits
        if (count >= 1 && count <= 3) return colors[1];
        if (count >= 4 && count <= 6) return colors[2];
        if (count >= 7 && count <= 9) return colors[3];
        return colors[4]; // Max color
    };

    // Find the earliest date in the data to determine the start offset
    const sortedData = [...commitData].sort((a, b) => a.date.getTime() - b.date.getTime());
    const earliestDate = sortedData.length > 0 ? sortedData[0].date : new Date();
    const today = new Date();
    const daysSinceEarliest = Math.floor((today.getTime() - earliestDate.getTime()) / (1000 * 60 * 60 * 24));
    const totalWeeks = Math.ceil((daysSinceEarliest + today.getDay() + 1) / 7); // +1 because getDay is 0-indexed Sun-Sat
    const displayWeeks = Math.min(totalWeeks, 53); // Display up to 53 weeks

    return (
        <div className={`w-full flex flex-col items-center ${className}`}>
            <div className="relative w-full max-w-7xl">
                {/* Month Labels */}
                <div className="flex pl-12 pr-2 mb-1 text-xs text-gray-400 font-medium select-none w-full">
                    {(() => {
                        const year = new Date().getFullYear();
                        const monthLabels: { month: string; weekIndex: number }[] = [];
                        let lastMonth = -1;

                        for (let weekIndex = 0; weekIndex < displayWeeks; weekIndex++) {
                            const startOfWeek = new Date(today);
                            startOfWeek.setDate(today.getDate() - today.getDay() + (weekIndex - (displayWeeks -1)) * 7); // Calculate start date of the week

                            const month = startOfWeek.getMonth();
                            if (month !== lastMonth) {
                                monthLabels.push({
                                    month: startOfWeek.toLocaleString("en-US", { month: "short" }),
                                    weekIndex: weekIndex,
                                });
                                lastMonth = month;
                            }
                        }

                        // Render month labels with correct spacing
                        return monthLabels.map((label, i) => {
                            const nextLabelWeek = monthLabels[i + 1]?.weekIndex ?? displayWeeks;
                            const colSpan = nextLabelWeek - label.weekIndex;
                            if (colSpan <= 0) return null; // Avoid rendering if span is zero or negative
                            return (
                                <div
                                    key={label.month + i} // Add index to key for potential duplicate months in view
                                    className="text-center"
                                    style={{
                                        minWidth: `calc(${colSpan} * (100% / ${displayWeeks}))`, // Adjust width based on displayed weeks
                                        flexBasis: `calc(${colSpan} * (100% / ${displayWeeks}))`,
                                        flexGrow: 0,
                                        flexShrink: 0,
                                    }}
                                >
                                    {label.month}
                                </div>
                            );
                        });
                    })()}
                </div>
                <div className="flex">
                    {/* Weekday Labels */}
                    <div className="flex flex-col mr-2 text-xs text-gray-400 font-medium select-none pt-[28px]"> {/* Adjust padding to align */}
                        {["", "Mon", "", "Wed", "", "Fri", ""].map((d, i) => (
                            <div
                                key={i}
                                className="h-[14px] flex items-center justify-center" // Adjusted height for spacing
                                style={{ lineHeight: "14px" }}
                            >
                                {d}
                            </div>
                        ))}
                    </div>
                    {/* Contribution Grid */}
                    <div className="flex-1">
                        <div
                            className="relative grid grid-flow-col gap-[3px] w-full" // Slightly reduced gap
                            style={{
                                gridTemplateRows: "repeat(7, 1fr)",
                                gridTemplateColumns: `repeat(${displayWeeks}, 1fr)`, // Use dynamic week count
                                height: "112px", // 7 rows * (14px height + 2px gap) approx
                            }}
                        >
                            {Array.from({ length: displayWeeks }).map((_, weekIndex) =>
                                Array.from({ length: 7 }).map((_, dayIndex) => {
                                    // Calculate the date for this cell relative to today
                                    const dayOffset = (displayWeeks - 1 - weekIndex) * 7 + (6 - dayIndex); // Days ago from today (Sunday = 0)
                                    const cellDate = new Date(today);
                                    cellDate.setDate(today.getDate() - dayOffset);
                                    cellDate.setHours(0, 0, 0, 0); // Normalize time

                                    // Find commit count for this date
                                    const dayData = commitData.find((d) => {
                                        const commitDate = new Date(d.date);
                                        commitDate.setHours(0,0,0,0); // Normalize time
                                        return commitDate.getTime() === cellDate.getTime();
                                    });
                                    const count = dayData ? dayData.count : 0;
                                    const cellColor = getColor(count);
                                    const currentDayIndex = weekIndex * 7 + dayIndex;

                                    // Check if the cell date is before the earliest commit date
                                    if (cellDate < earliestDate) {
                                        return (
                                            <div
                                                key={`${weekIndex}-${dayIndex}`}
                                                className="rounded-[2px] bg-transparent" // Invisible placeholder
                                                style={{ width: "14px", height: "14px" }}
                                            />
                                        );
                                    }

                                    return (
                                        <div
                                            key={`${weekIndex}-${dayIndex}`}
                                            className="rounded-[2px] cursor-pointer relative transition-opacity duration-150"
                                            style={{
                                                backgroundColor: cellColor,
                                                width: "14px", // Fixed size square
                                                height: "14px",
                                                opacity: hoveredWeek === null ? 1 : weekIndex === hoveredWeek ? 1 : 0.3,
                                            }}
                                            onMouseEnter={() => {
                                                setActiveIndex(currentDayIndex);
                                                setHoveredWeek(weekIndex);
                                            }}
                                            onMouseLeave={() => {
                                                setActiveIndex(null);
                                                setHoveredWeek(null);
                                            }}
                                        >
                                            {activeIndex === currentDayIndex && count > 0 && (
                                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-zinc-800 p-1.5 rounded text-xs text-gray-100 border border-zinc-600 shadow-lg z-30 whitespace-nowrap">
                                                    {count} commit{count !== 1 ? 's' : ''} on{" "}
                                                    {cellDate.toLocaleDateString("en-US", {
                                                        month: "short",
                                                        day: "numeric",
                                                        year: "numeric",
                                                    })}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })
                            )}
                        </div>
                    </div>
                </div>
                {/* Legend */}
                <div className="flex items-center justify-end gap-2 text-xs mt-2 w-full pr-2">
                    <span className="text-gray-400">Less</span>
                    <div className="flex items-center gap-1">
                        {colors.map((color, i) => (
                            <div
                                key={i}
                                className="w-3 h-3 rounded-[2px]" // Smaller legend squares
                                style={{ backgroundColor: color }}
                                title={
                                    i === 0 ? "No contributions" :
                                    i === 1 ? "1-3 contributions" :
                                    i === 2 ? "4-6 contributions" :
                                    i === 3 ? "7-9 contributions" :
                                    "10+ contributions"
                                }
                            />
                        ))}
                    </div>
                    <span className="text-gray-400">More</span>
                </div>
            </div>
        </div>
    );
}