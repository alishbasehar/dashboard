// src/components/StatCard.jsx
import React from "react";

const StatCard = ({ title, value, change }) => {
  const isNegative = change.includes("-");

  return (
    <div className="bg-gray-800 p-5 rounded-xl shadow-md w-full">
      <h3 className="text-gray-400 text-sm">{title}</h3>
      <h2 className="text-white text-2xl font-bold mt-2">{value}</h2>
      <span
        className={`text-xs px-2 py-1 rounded mt-3 inline-block ${
          isNegative
            ? "bg-red-500/20 text-red-400"
            : "bg-green-500/20 text-green-400"
        }`}
      >
        {change}
      </span>
    </div>
  );
};

export default StatCard;
