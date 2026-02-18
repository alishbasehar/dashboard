// OrdersResponsive.jsx
import React from "react";

function createData(name, calories, fat, carbs, status) {
  return { name, calories, fat, carbs, status };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, "approved"),
  createData("Ice cream sandwich", 237, 9.0, 37, "pending"),
  createData("Eclair", 262, 16.0, 24, "completed"),
  createData("Cupcake", 305, 3.7, 67, "canceled"),
  createData("Gingerbread", 356, 16.0, 49, "pending"),
];

const getStatusColor = (status) => {
  switch (status) {
    case "approved":
      return "bg-green-500";
    case "pending":
      return "bg-yellow-500";
    case "completed":
      return "bg-blue-500";
    case "canceled":
      return "bg-red-500";
    default:
      return "bg-gray-500";
  }
};

export default function OrdersResponsive() {
  return (
    <div className="p-4 bg-gray-900 rounded-2xl shadow-xl space-y-4">
      <h3 className="text-2xl font-bold text-white mb-2">Recent Orders</h3>

      {/* Desktop Table */}
      <div className="hidden md:block">
        <table className="min-w-full bg-gray-800 rounded-xl overflow-hidden">
          <thead>
            <tr className="text-white text-left uppercase text-sm">
              {["Dessert", "Calories", "Fat", "Carbs", "Status"].map((h) => (
                <th key={h} className="px-4 py-2">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.name} className="hover:bg-gray-700 transition-colors">
                <td className="px-4 py-2 text-white">{row.name}</td>
                <td className="px-4 py-2 text-white">{row.calories}</td>
                <td className="px-4 py-2 text-white">{row.fat}</td>
                <td className="px-4 py-2 text-white">{row.carbs}</td>
                <td className="px-4 py-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${getStatusColor(row.status)}`}>
                    {row.status.charAt(0).toUpperCase() + row.status.slice(1)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden flex flex-col gap-4">
        {rows.map((row) => (
          <div key={row.name} className="bg-gray-800 p-4 rounded-xl shadow-md flex flex-col gap-2">
            <div className="flex justify-between text-white font-semibold">
              <span>Dessert:</span>
              <span>{row.name}</span>
            </div>
            <div className="flex justify-between text-white/80 text-sm">
              <span>Calories:</span>
              <span>{row.calories}</span>
            </div>
            <div className="flex justify-between text-white/80 text-sm">
              <span>Fat:</span>
              <span>{row.fat}</span>
            </div>
            <div className="flex justify-between text-white/80 text-sm">
              <span>Carbs:</span>
              <span>{row.carbs}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/80">Status:</span>
              <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${getStatusColor(row.status)}`}>
                {row.status.charAt(0).toUpperCase() + row.status.slice(1)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
