import React, { useState } from "react";
import { useSelector } from "react-redux";
import { formatDate, getInitials } from "../../utils";

const CustomerInfo = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const customerData = useSelector((state) => state.customer);

  return (
    <div className="flex items-center justify-between px-4 py-3">
      <div className="flex flex-col items-start">
        <h1 className="text-[#f5f5f5] text-md font-semibold tracking-wide">
          {customerData.customerName || "Customer Name"}
        </h1>
        <p className="text-xs text-[#ababab] font-medium mt-1">
          #{customerData.orderId || "N/A"} / Dine in
        </p>
        <p className="text-xs text-[#ababab] font-medium mt-2">
          {formatDate(dateTime)}
        </p>
      </div>
      <button className="bg-[#ff6347] text-[#f5f5f5] p-3 text-xl font-bold rounded-lg">
        {getInitials(customerData.customerName) || "CN"}
      </button>
    </div>
  );
};

export default CustomerInfo;
