// src/components/ProductSummary.jsx
import React from "react";

const summaryData = [
  { title: "Total Products", value: 120, color: "bg-blue-600" },
  { title: "In Stock", value: 95, color: "bg-green-600" },
  { title: "Low Stock", value: 15, color: "bg-yellow-500" },
  { title: "Out of Stock", value: 10, color: "bg-red-500" },
];

export default function ProductSummary() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {summaryData.map((item, index) => (
        <div
          key={index}
          className={`p-5 rounded-2xl shadow-lg flex flex-col justify-center items-center ${item.color}`}
        >
          <h3 className="text-3xl font-bold text-white">{item.value}</h3>
          <p className="text-white/80 mt-1 text-lg">{item.title}</p>
        </div>
      ))}
    </div>
  );
}
