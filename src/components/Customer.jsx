import React from "react";
import Chart from "react-apexcharts";

const Customer = () => {
  // Chart data
  const series = [
    {
      name: "Active Customers",
      data: [30, 45, 60, 50, 70, 80, 65],
    },
    {
      name: "New Customers",
      data: [20, 35, 40, 60, 50, 70, 55],
    },
  ];

  const options = {
    chart: {
      type: "area",
      height: 200,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      foreColor: "#fff",
    },
    colors: ["#4ade80", "#60a5fa"], // green & blue
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    grid: {
      borderColor: "#374151",
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      title: {
        text: "Days",
        style: { color: "#fff" },
      },
    },
    yaxis: {
      title: {
        text: "Customers",
        style: { color: "#fff" },
      },
    },
    tooltip: {
      theme: "dark",
    },
  };

  return (
    <div className="p-6 bg-gray-900 rounded-xl shadow-xl text-white w-full md:max-w-4xl mb-10 mt-10 md:mr-10">
      <h3 className="text-lg text-center font-semibold mb-4">Customer Overview</h3>

      <Chart options={options} series={series} type="area" height={250} />
    </div>
  );
};

export default Customer;
