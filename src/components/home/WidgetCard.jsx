import React from "react";

const WidgetCard = ({ title, icon, number, footerNum }) => {
  return (
    <div className="bg-[#1a1a1a] w-[50%] px-5 py-5 rounded-lg">
      <div className="flex items-start justify-between">
        <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
          {title}
        </h1>
        <button
          className={`${
            title === "Total Income" ? "bg-[#02ca3a]" : "bg-[#ff6347]"
          } p-3 rounded-lg text-[#f5f5f5] text-2xl`}
        >
          {icon}
        </button>
      </div>
      <div>
        <h1 className="text-[#f5f5f5] text-4xl font-bold mt-5">
          {title === "Total Income" ? `Rp ${number}` : number}
        </h1>
        <h1 className="text-[#f5f5f5] text-lg mt-2">
          <span className="text-[#02ca3a]">{footerNum}%</span> than yesterday
        </h1>
      </div>
    </div>
  );
};

export default WidgetCard;
