import React, { useState } from "react";
import BottomNav from "../components/shared/BottomNav";
import BackButton from "../components/shared/BackButton";
import TableCard from "../components/tables/TableCard";
import { tables } from "../constants";

const Tables = () => {
  const [status, setStatus] = useState("all");

  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden">
      <div className="flex justify-between items-center px-10 py-4">
        <div className="flex items-center gap-4">
          <BackButton />
          <h1 className="text-[#f5f5f5] text-2xl font-semibold tracking-wider">
            Tables
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
            onClick={() => setStatus("booked")}
            className={`text-[#ababab] text-lg rounded-lg px-5 py-2 font-semibold ${
              status === "booked" && "bg-[#383838]"
            }`}
          >
            Booked
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 justify-center px-6 py-4 h-[calc(100vh-7rem-7rem)] overflow-y-scroll hide-scrollbar">
        {tables.map((table) => {
          return (
            <TableCard
              key={table.id}
              name={table.name}
              status={table.status}
              initial={table.initial}
              seats={table.seats}
            />
          );
        })}
      </div>
      <BottomNav />
    </section>
  );
};

export default Tables;
