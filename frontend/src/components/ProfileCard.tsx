interface ProfileCardProps {
    imageUrl: string;
    name: string;
    username: string;
    memberSince: string;
    className?: string;
}

export default function ProfileCard({
    imageUrl,
    name,
    username,
    memberSince,
    className = "",
}: ProfileCardProps) {
    return (
        <div className={`flex flex-col items-center ${className}`}>
            <img
                src={imageUrl}
                alt="Profile"
                className="w-28 h-28 rounded-full border-4 border-zinc-800 shadow-lg mb-4"
            />
            <div className="text-2xl font-bold">{name}</div>
            <div className="text-lg text-gray-300">{username}</div>
            <div className="text-md text-gray-400 mt-1">{memberSince}</div>
        </div>
    );
}