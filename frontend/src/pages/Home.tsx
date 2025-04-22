import React, { useState } from "react";
import api from '../api/axios';

export default function Home() {

    const [responseMessage, setResponseMessage] = useState<string>('');

    const handleButtonClick = async () => {
        try {
            const response = await api.get('/test'); // Call the /test endpoint
            setResponseMessage(response.data.message); // Update state with the response message
        } catch (error) {
            console.error('Error calling /test endpoint:', error);
            setResponseMessage('Failed to fetch data.');
        }
    };
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
                <button
                    onClick={handleButtonClick}
                    type="button"
                    className="absolute top-0 left-0 w-full h-full bg-[#3DD3C4] rounded-[41px] text-black text-[24px] font-normal font-roboto flex items-center justify-center"
                    style={{ boxShadow: '0px 0px 13.2px 10px rgba(61, 211, 196, 0.5)' }}
                >
                    Button
                </button>

                {responseMessage && <p>Response: {responseMessage}</p>}
            </div>

        </div>
    );
}
