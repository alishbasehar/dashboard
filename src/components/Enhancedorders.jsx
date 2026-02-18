import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";
import Orders from "./Orders";

const summaryData = [
  { title: "Total Orders", value: 120, color: "bg-blue-600" },
  { title: "Pending", value: 30, color: "bg-yellow-500" },
  { title: "Completed", value: 70, color: "bg-green-500" },
  { title: "Canceled", value: 20, color: "bg-red-500" },
];

const chartData = [
  { name: "Approved", value: 40 },
  { name: "Pending", value: 30 },
  { name: "Completed", value: 40 },
  { name: "Canceled", value: 10 },
];

const COLORS = ["#22c55e", "#facc15", "#3b82f6", "#ef4444"];

export default function OrdersPage() {
  return (
    <div className="container max-w-7xl mx-auto md:ml-10 p-6 space-y-8 bg-gray-900 min-h-screen">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {summaryData.map((item, index) => (
          <div
            key={index}
            className={`p-5 rounded-2xl shadow-xl flex flex-col justify-center items-center ${item.color}`}
          >
            <h3 className="text-3xl font-bold text-white">{item.value}</h3>
            <p className="text-white/80 mt-1 text-lg">{item.title}</p>
          </div>
        ))}
      </div>

      {/* Filter/Search */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <input
          type="text"
          placeholder="Search orders..."
          className="p-3 rounded-xl bg-gray-700 text-white placeholder-gray-400 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Table + Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Orders Table */}
        <div className="lg:col-span-2 w-full">
          <Orders />
        </div>

        {/* Status Pie Chart */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-xl flex flex-col items-center">
          <h4 className="font-bold text-xl mb-4 text-white">Orders Status</h4>
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius="40%"
                  outerRadius="80%"
                  fill="#8884d8"
                  labelLine={false} // remove lines for cleaner look
                  label={({ name, value }) => `${name}: ${value}`} // show name + value inside slice
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>

                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1f2937",
                    borderRadius: "8px",
                    border: "none",
                    padding: "8px",
                  }}
                  labelStyle={{ color: "white", fontWeight: "bold" }}
                  itemStyle={{ color: "white", fontWeight: "bold" }}
                />

                <Legend
                  verticalAlign="bottom"
                  align="center"
                  wrapperStyle={{ color: "white" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
