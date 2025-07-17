import React from "react";
import restaurant from "../assets/images/restaurant-img.jpg";

const Auth = () => {
  return (
    <div className="flex min-h-screen w-full">
      <div className="w-1/2 relative flex items-center justify-center bg-cover">
        <img src={restaurant} alt="Restaurant Image" className="w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-black bg-opacity-80 "></div>
        <blockquote className="absolute italic text-2xl bottom-10 px-8 mb-10 text-white">
          "Great service begins with great tools. Empower your team, serve
          faster, work smarter, and let your food speak louder."
          <br />
          <span className="block mt-4 text-[#ff6347]">- Developer Team</span>
        </blockquote>
      </div>

      <div className="w-1/2 min-h-screen bg-[#1a1a1a] p-10">

      </div>
    </div>
  );
};

export default Auth;
