import React from "react";
import { formatCurrency } from "../../utils";
import { useSelector } from "react-redux";
import { getTotalPrice } from "../../redux/slices/cartSlice";

const Bill = () => {
  const cartData = useSelector((state) => state.cart);
  const total = useSelector(getTotalPrice);

  const taxRate = 0.1;
  const taxAmount = total * taxRate;
  const totalPay = total + taxAmount;

  return (
    <>
      <div className="flex items-center justify-between px-5 mt-2">
        <p className="text-[#ababab] text-xs font-medium mt-2">
          Items({cartData.length})
        </p>
        <h1 className="text-[#f5f5f5] text-md font-bold">
          {formatCurrency(total)}
        </h1>
      </div>
      <div className="flex items-center justify-between px-5 mt-2">
        <p className="text-[#ababab] text-xs font-medium mt-2">
          Tax({taxRate * 100}%)
        </p>
        <h1 className="text-[#f5f5f5] text-md font-bold">
          {formatCurrency(taxAmount)}
        </h1>
      </div>
      <div className="flex items-center justify-between px-5 mt-2">
        <p className="text-[#ababab] text-xs font-medium mt-2">
          Total Pay
        </p>
        <h1 className="text-[#f5f5f5] text-md font-bold">
          {formatCurrency(totalPay)}
        </h1>
      </div>
      <div className="flex items-center gap-3 px-5 mt-4">
        <button className="bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab] font-semibold">
          Cash
        </button>
        <button className="bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab] font-semibold">
          Transfer
        </button>
      </div>
      <div className="flex items-center gap-3 px-5 mt-4">
        <button className="bg-[#025cca] px-4 py-3 w-full rounded-lg text-[#f5f5f5] font-semibold text-lg">
          Print Receipt
        </button>
        <button className="bg-[#ff6347] px-4 py-3 w-full rounded-lg text-[#f5f5f5] font-semibold text-lg">
          Place Order
        </button>
      </div>
    </>
  );
};

export default Bill;
