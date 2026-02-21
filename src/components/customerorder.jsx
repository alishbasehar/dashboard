import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const CustomerOrdersChart = () => {
  // Sample data for customers and orders
  const data = [
    { month: "Jan", customers: 400, orders: 200 },
    { month: "Feb", customers: 300, orders: 250 },
    { month: "Mar", customers: 500, orders: 300 },
    { month: "Apr", customers: 700, orders: 400 },
    { month: "May", customers: 600, orders: 350 },
    { month: "Jun", customers: 800, orders: 500 },
  ];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="customers"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="orders" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CustomerOrdersChart;