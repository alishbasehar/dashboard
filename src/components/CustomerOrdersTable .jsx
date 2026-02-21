import React from "react";

const CustomerOrdersTable = () => {
  // Same data as the chart
  const data = [
    { month: "Jan", customers: 400, orders: 200 },
    { month: "Feb", customers: 300, orders: 250 },
    { month: "Mar", customers: 500, orders: 300 },
    { month: "Apr", customers: 700, orders: 400 },
    { month: "May", customers: 600, orders: 350 },
    { month: "Jun", customers: 800, orders: 500 },
  ];

  return (
    <div style={{ padding: "20px", backgroundColor: "#1a1a1a", borderRadius: "8px" }}>
      <h2 style={{ color: "#ffffff", marginBottom: "16px" }}>Customer & Orders Table</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#333333" }}>
            <th style={{ border: "1px solid #555555", padding: "8px", color: "#ffffff" }}>Month</th>
            <th style={{ border: "1px solid #555555", padding: "8px", color: "#ffffff" }}>Customers</th>
            <th style={{ border: "1px solid #555555", padding: "8px", color: "#ffffff" }}>Orders</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              style={{ backgroundColor: index % 2 === 0 ? "#2a2a2a" : "#1f1f1f", color: "#ffffff" }}
            >
              <td style={{ border: "1px solid #555555", padding: "8px" }}>{item.month}</td>
              <td style={{ border: "1px solid #555555", padding: "8px" }}>{item.customers}</td>
              <td style={{ border: "1px solid #555555", padding: "8px" }}>{item.orders}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerOrdersTable;