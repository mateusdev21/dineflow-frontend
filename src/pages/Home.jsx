import React from "react";
import BottomNav from "../components/shared/BottomNav";
import Greetings from "../components/home/Greetings";
import WidgetCard from "../components/home/WidgetCard";
import RecentOrders from "../components/home/RecentOrders";
import PopularMenu from "../components/home/PopularMenu";
import { BsCashCoin } from "react-icons/bs";
import { GrInProgress } from "react-icons/gr";

const Home = () => {
  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-3">
      {/* Left Column */}
      <div className="flex-[3]">
        <Greetings />
        <div className="flex items-center w-full gap-3 px-8 mt-8">
          <WidgetCard title="Total Income" icon={<BsCashCoin />} number={999} footerNum={1.6} />
          <WidgetCard title="In Progress" icon={<GrInProgress />} number={666} footerNum={3.6} />
        </div>
        <RecentOrders />
      </div>

      {/* Right Column */}
      <div className="flex-[2]">
        <PopularMenu />
      </div>
      <BottomNav />
    </section>
  );
};

export default Home;
