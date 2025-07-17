import React, { useState, useEffect } from "react";
import { formatDate } from "../../utils";

const Greetings = () => {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) =>
        `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;

    return (
        <div className="flex justify-between items-center px-8 mt-5">
            <div>
                <h1 className="text-[#f5f5f5] text-2xl mb-2 font-semibold tracking-wide">Hello, Arga</h1>
                <p className="text-[#ababab] text-sm">Give your best services for customers</p>
            </div>
            <div>
                <h1 className="text-[#f5f5f5] text-3xl mb-2 font-bold tracking-wide w-[130px]">{formatTime(dateTime)}</h1>
                <p className="text-[#ababab] text-sm">{formatDate(dateTime)}</p>
            </div>
        </div>
    );
}

export default Greetings;
