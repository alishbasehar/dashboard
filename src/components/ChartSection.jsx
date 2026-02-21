// src/components/ChartSection.jsx
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", sales: 400 },
  { name: "Feb", sales: 700 },
  { name: "Mar", sales: 500 },
  { name: "Apr", sales: 900 },
  { name: "May", sales: 600 },
];

const ChartSection = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 md:p-8 bg-gray-900 rounded-xl shadow-md mb-8 overflow-hidden">
      <h3 className="text-white mb-4 font-semibold text-lg sm:text-xl md:text-2xl">
        Sales Overview
      </h3>

      <div className="w-full h-64 sm:h-80 md:h-96">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#3b82f6"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartSection;
