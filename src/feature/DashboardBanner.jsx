import React from "react";
import { useSelector } from "react-redux";

function DashboardBanner() {
  const { list } = useSelector((state) => state.medicines);
  const pending = list.filter((m) => !m.taken).length;

  return (
    <div className="bg-blue-500/70 backdrop-blur-md text-white shadow-md p-5 py-4 mb-6 mt-6 text-center md:text-left rounded-b-full">
      <h2 className="text-xl md:text-2xl font-bold text-center">Welcome back 👋</h2>
      <p className="text-sm md:text-base mt-2 text-center">
        You have <span className="font-bold text-yellow-400 text-xl">{pending}</span> medicine{pending !== 1 ? "s" : ""} to take today.
      </p>
    </div>
  );
}

export default DashboardBanner;

