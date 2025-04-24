import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h2 >Home Page</h2>
            <button
                type="button"
                className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
            >
                {/* Google button contents... */}
            </button>

            {/* New styled button */}
            <div className="absolute w-[99px] h-[50px]">
                <div className="invisible w-full h-full bg-[#3DD3C4] rounded-[41px]"></div>
                <Link
                    to="/dashboard"
                    className="absolute top-0 left-0 w-full h-full bg-[#3DD3C4] rounded-[41px] text-black text-[17px] font-normal font-roboto flex items-center justify-center"
                    style={{ boxShadow: '0px 0px 13.2px 10px rgba(61, 211, 196, 0.5)' }}
                >
                    Dashboard
                </Link>
            </div>
        </div>
    );
}
