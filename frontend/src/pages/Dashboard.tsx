
import WalletConnect from "../components/WalletConnect"; 
import ProfileCard from "../components/ProfileCard";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { GithubService } from "../services/GithubService";
const mockCommitData = Array.from({ length: 84 }, (_, i) => ({
    date: new Date(Date.now() - (84 - i) * 86400000),
    count: Math.floor(Math.random() * 10),
}));

const colors = ["#ebf6ff", "#7dd3fc", "#38bdf8", "#0ea5e9", "#0369a1"];

// 1. Define types for the API response
interface ApiResponse {
    success: boolean;
    report_data: { [date: string]: number };
    user: {
        name: string;
        email: string;
        username: string;
        avatar: string;
        since: string;
    };
    total_commits: number;
    tokens: number;
}

// 2. Utility to transform report_data into an array for the grid
function transformReportData(report_data: { [date: string]: number }) {
    // Convert to array of { date: Date, count: number }
    return Object.entries(report_data).map(([dateStr, count]) => ({
        date: new Date(dateStr.split("-").reverse().join("-")), // "dd-mm-yyyy" to "yyyy-mm-dd"
        count,
    })); 
}

export default function Dashboard() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [hoveredWeek, setHoveredWeek] = useState<number | null>(null);
    const [tokensClaimed, setTokensClaimed] = useState<number>(0);
    const navigate = useNavigate();

    // --- NEW STATE for API data ---
    const [commitData, setCommitData] = useState<{ date: Date; count: number }[]>([]);
    const [userProfile, setUserProfile] = useState<{ imageUrl: string; name: string; username: string; memberSince: string }>({
        imageUrl: "",
        name: "",
        username: "",
        memberSince: "",
    });
    const [totalCommits, setTotalCommits] = useState(0);
    const [tokensHeld, setTokensHeld] = useState(0);

    // --- FETCH DATA FROM API (or local file for now) ---
    useEffect(() => {
        GithubService.getGithubRESPONSEUrl()
            .then((data: ApiResponse) => {
                setCommitData(transformReportData(data.report_data));
                setUserProfile({
                    imageUrl: data.user.avatar,
                    name: data.user.name,
                    username: data.user.username,
                    memberSince: `Member since ${data.user.since}`,
                });
                setTotalCommits(data.total_commits);
                setTokensHeld(Math.floor(data.tokens));
            });
    }, []);

    const location = useLocation();

    useEffect(() => {
        const authToken = localStorage.getItem('auth_token');
        if (!authToken){
            navigate('/', { replace: true });
        }
        const queryParams = new URLSearchParams(location.search);
        const token = queryParams.get('token');

        if (token) {
            localStorage.setItem('auth_token', token);

            // OPTIONAL: Remove token from URL
            navigate('/dashboard', { replace: true });
        }


    }, [location.search, navigate]);

    const handleLogout = () =>{
        // Clear the auth token from local storage
        localStorage.removeItem('auth_token');
        // Navigate back to the home page
        navigate('/', { replace: true });
    }

    return (
        <div className="min-h-screen bg-black text-white p-8">
            <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4"> {/* Wrap title and button */}
                    <button
                        onClick={handleLogout} // Go back one step in history
                        className="px-3 py-1 bg-zinc-700 hover:bg-zinc-600 rounded text-sm"
                    >
                        &larr; Log Out {/* Left arrow */}
                    </button>
                    <h1 className="text-4xl">Dashboard</h1>
                </div>
                {/* Use the new WalletConnect component */}
                <WalletConnect />
            </div>

            {/* Use the new ProfileCard component */}
            <ProfileCard
                imageUrl={userProfile.imageUrl}
                name={userProfile.name}
                username={userProfile.username}
                memberSince={userProfile.memberSince}
                className="mb-10"
            />

            {/* Main Grid */}
            <div>
                {/* Chart Section - Full Width, GitHub-style, no scroll */}
                <div className="w-full flex flex-col items-center">
                    <div className="relative w-full max-w-7xl">
                        {/* Month Labels */}
                        <div className="flex pl-12 pr-2 mb-1 text-xs text-gray-400 font-medium select-none w-full">
                            {(() => {
                                // Calculate the week index for each month start
                                const year = new Date().getFullYear();
                                const weeks: {
                                    month: string;
                                    weekIndex: number;
                                }[] = [];
                                for (let m = 0; m < 12; m++) {
                                    const firstDayOfMonth = new Date(
                                        year,
                                        m,
                                        1
                                    );
                                    const startOfYear = new Date(year, 0, 1);
                                    // Calculate week index (Monday as first day)
                                    const dayOffset =
                                        startOfYear.getDay() === 0
                                            ? 6
                                            : startOfYear.getDay() - 1;
                                    const daysSinceYearStart = Math.floor(
                                        (firstDayOfMonth.getTime() -
                                            startOfYear.getTime()) /
                                            (1000 * 60 * 60 * 24)
                                    );
                                    const weekIndex = Math.floor(
                                        (daysSinceYearStart + dayOffset) / 7
                                    );
                                    weeks.push({
                                        month: firstDayOfMonth.toLocaleString(
                                            "en-US",
                                            { month: "short" }
                                        ),
                                        weekIndex,
                                    });
                                }
                                // Render month labels with correct spacing
                                return weeks.map((w, i) => {
                                    const nextWeek =
                                        weeks[i + 1]?.weekIndex ?? 53;
                                    const colSpan = nextWeek - w.weekIndex;
                                    return (
                                        <div
                                            key={w.month}
                                            className="text-center"
                                            style={{
                                                minWidth: `calc(${colSpan} * 1fr)`,
                                                flex: colSpan,
                                            }}
                                        >
                                            {w.month}
                                        </div>
                                    );
                                });
                            })()}
                        </div>
                        <div className="flex">
                            {/* Weekday Labels */}
                            <div className="flex flex-col mr-2 text-xs text-gray-400 font-medium select-none">
                                {[
                                    "Mon",
                                    "Tue",
                                    "Wed",
                                    "Thu",
                                    "Fri",
                                    "Sat",
                                    "Sun",
                                ].map((d) => (
                                    <div
                                        key={d}
                                        className="h-[24px] flex items-center justify-center"
                                        style={{
                                            lineHeight: "24px",
                                            height: "28px",
                                        }}
                                    >
                                        {d}
                                    </div>
                                ))}
                            </div>
                            {/* Contribution Grid */}
                            <div className="flex-1">
                                <div
                                    className="relative grid grid-flow-col gap-[4px] w-full"
                                    style={{
                                        gridTemplateRows: "repeat(7, 1fr)",
                                        gridTemplateColumns: "repeat(53, 1fr)",
                                        height: "168px",
                                    }}
                                >
                                    {Array.from({ length: 53 }).map(
                                        (_, weekIndex) =>
                                            Array.from({ length: 7 }).map(
                                                (_, dayIndex) => {
                                                    // Calculate the date for this cell
                                                    const year = new Date().getFullYear();
                                                    const startOfYear = new Date(year, 0, 1);
                                                    const dayOffset = startOfYear.getDay() === 0 ? 6 : startOfYear.getDay() - 1;
                                                    const cellDate = new Date(startOfYear);
                                                    cellDate.setDate(
                                                        cellDate.getDate() - dayOffset + weekIndex * 7 + dayIndex
                                                    );

                                                    // --- USE commitData INSTEAD OF mockCommitData ---
                                                    const dayData = commitData.find(
                                                        (d) =>
                                                            d.date.getFullYear() === cellDate.getFullYear() &&
                                                            d.date.getMonth() === cellDate.getMonth() &&
                                                            d.date.getDate() === cellDate.getDate()
                                                    );
                                                    const count = dayData ? dayData.count : 0;

                                            return (
                                                <div
                                                    key={weekIndex + '-' + dayIndex}
                                                    className="rounded-[3px] cursor-pointer relative transition-all duration-200"
                                                    style={{
                                                        backgroundColor: colors[Math.min(count, 4)],
                                                        width: '100%',
                                                        height: '24px',
                                                        opacity:
                                                            hoveredWeek === null
                                                                ? count === 0
                                                                    ? 0.4
                                                                    : 1
                                                                : weekIndex === hoveredWeek
                                                                ? 1
                                                                : 0.4
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
                                                        <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-gray-800 p-2 rounded text-xs text-gray-100 border border-gray-600 z-30 min-w-[140px]">
                                                            <div className="font-medium">{count} commits</div>
                                                            <div className="text-gray-400">
                                                                {cellDate.toLocaleDateString('en-US', {
                                                                    month: 'short',
                                                                    day: 'numeric',
                                                                    year: 'numeric'
                                                                })}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                                );
                                                }
                                            )
                                    )}
                                    {/* Week highlight */}
                                    {hoveredWeek !== null && (
                                        <div
                                            className="absolute top-0 pointer-events-none"
                                            style={{
                                                left: `calc(${hoveredWeek} * (100% / 53))`,
                                                width: `calc(100% / 53)`,
                                                height: "calc(100% + 24px)",
                                                border: "2px solid #38bdf8",
                                                borderRadius: "6px",
                                                boxShadow: "0 0 8px #38bdf8aa",
                                                zIndex: 10,
                                            }}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                        {/* Legend */}
                        <div className="flex items-center justify-center gap-2 text-xs mt-8 w-full">
                            <span className="text-gray-400">Less</span>
                            <div className="flex items-center gap-1">
                                {colors.map((color, i) => (
                                    <div
                                        key={i}
                                        className="w-4 h-4 rounded-[2px]"
                                        style={{ backgroundColor: color }}
                                    />
                                ))}
                            </div>
                            <span className="text-gray-400">More</span>
                        </div>
                    </div>
                </div>

                {/* Stats Section - Below Chart */}
                <div className="w-full mt-8 flex justify-center">
                    <div className="bg-zinc-900 p-4 rounded-lg shadow-md w-full max-w-2xl space-y-4">
                        <h2 className="text-xl font-semibold">
                            Developer Stats
                        </h2>
                        <div className="space-y-3">
                            {/* Total Commits Card */}
                            <div className="bg-zinc-700 p-4 rounded-lg">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-zinc-800 rounded-lg">
                                        {/* Branch/Commit Icon */}
                                        <svg
                                            width="28"
                                            height="28"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <circle
                                                cx="7"
                                                cy="7"
                                                r="3"
                                                fill="#0ea5e9"
                                            />
                                            <circle
                                                cx="17"
                                                cy="17"
                                                r="3"
                                                fill="#0369a1"
                                            />
                                            <path
                                                d="M7 10v2a5 5 0 0 0 5 5h2"
                                                stroke="#7dd3fc"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-md text-gray-400">
                                            Total Commits
                                        </p>
                                        <p className="text-2xl font-semibold">
                                            {totalCommits}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Tokens Held Card */}
                            <div className="bg-zinc-700 p-4 rounded-lg">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-zinc-800 rounded-lg">
                                        {/* Coin/Token Icon */}
                                        <svg
                                            width="28"
                                            height="28"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <circle
                                                cx="12"
                                                cy="12"
                                                r="9"
                                                fill="#7dd3fc"
                                                stroke="#0369a1"
                                                strokeWidth="2"
                                            />
                                            <circle
                                                cx="12"
                                                cy="12"
                                                r="5"
                                                fill="#38bdf8"
                                                stroke="#0ea5e9"
                                                strokeWidth="2"
                                            />
                                            <path
                                                d="M12 7v2M12 15v2M7 12h2M15 12h2"
                                                stroke="#0369a1"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-md text-gray-400">
                                            Tokens Held
                                        </p>
                                        <p className="text-2xl font-semibold">
                                            {tokensHeld}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Tokens Claimed Card */}
                            <div className="bg-zinc-700 p-4 rounded-lg">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-zinc-800 rounded-lg">
                                        {/* Claim/Checkmark Token Icon */}
                                        <svg
                                            width="28"
                                            height="28"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <circle
                                                cx="12"
                                                cy="12"
                                                r="9"
                                                fill="#ebf6ff"
                                                stroke="#38bdf8"
                                                strokeWidth="2"
                                            />
                                            <path
                                                d="M9 12l2 2 4-4"
                                                stroke="#0ea5e9"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <circle
                                                cx="12"
                                                cy="12"
                                                r="5"
                                                fill="none"
                                                stroke="#7dd3fc"
                                                strokeWidth="1.5"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-md text-gray-400">
                                            Tokens Claimed
                                        </p>
                                        <p className="text-2xl font-semibold">
                                            {tokensClaimed}
                                        </p>
                                    </div>
                                    <button
                                        className="ml-auto px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-md disabled:opacity-50"
                                        onClick={() => {
                                            setTokensClaimed(prev => prev + tokensHeld);
                                            setTokensHeld(0);  // Reset held tokens after claiming
                                        }}
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


