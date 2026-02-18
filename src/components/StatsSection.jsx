// src/components/StatsSection.jsx
import React from "react";
import StatCard from "./StatCard";

const StatsSection = () => {
  return (
    <div className="container max-w-7xl mx-auto ml-10 md:ml-0 px-4 sm:px-6 md:px-8 mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <StatCard title="Total Orders" value="4,396" change="-55%" />
        <StatCard title="Profit per Order" value="$8.87" change="+7%" />
        <StatCard title="Sales per Customer" value="$589.24" change="-38%" />
        <StatCard title="Profit per Customer" value="$89.46" change="-30%" />
      </div>
    </div>
  );
};

export default StatsSection;
