import React, { useState } from "react";
import BottomNav from "../components/shared/BottomNav";
import OrderCard from "../components/orders/OrderCard";
import BackButton from "../components/shared/BackButton";

const Orders = () => {
  const [status, setStatus] = useState("all");

  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden">
      <div className="flex justify-between items-center px-10 py-4">
        <div className="flex items-center gap-4">
          <BackButton />
          <h1 className="text-[#f5f5f5] text-2xl font-semibold tracking-wider">
            Orders
          </h1>
        </div>
        <div className="flex items-center justify-around gap-4">
          <button
            onClick={() => setStatus("all")}
            className={`text-[#ababab] text-lg rounded-lg px-5 py-2 font-semibold ${
              status === "all" && "bg-[#383838]"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setStatus("progress")}
            className={`text-[#ababab] text-lg rounded-lg px-5 py-2 font-semibold ${
              status === "progress" && "bg-[#383838]"
            }`}
          >
            In Progress
          </button>
          <button
            onClick={() => setStatus("ready")}
            className={`text-[#ababab] text-lg rounded-lg px-5 py-2 font-semibold ${
              status === "ready" && "bg-[#383838]"
            }`}
          >
            Ready
          </button>
          <button
            onClick={() => setStatus("completed")}
            className={`text-[#ababab] text-lg rounded-lg px-5 py-2 font-semibold ${
              status === "completed" && "bg-[#383838]"
            }`}
          >
            Completed
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-6 items-center justify-center px-10 py-4 h-[calc(100vh-7rem-7rem)] overflow-y-scroll hide-scrollbar">
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
      <BottomNav />
    </section>
  );
};

export default Orders;
