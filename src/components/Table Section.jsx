import React from "react";

const TableSection = () => {
  const data = [
    {
      id: 1,
      product: "Eldon Portable Mobile Manager",
      quantity: 5,
      sales: "$141",
      profit: "$38",
    },
    {
      id: 2,
      product: "Premier Automatic Letter Opener",
      quantity: 2,
      sales: "$481",
      profit: "$14",
    },
  ];

  return (
    <div className="bg-gray-800 mb-8 w-full max-w-7xl mx-auto p-4 sm:p-6 md:p-8 rounded-xl shadow-md overflow-x-hidden">
      <h3 className="text-white mb-4 font-semibold text-lg sm:text-xl md:text-2xl">
        Recent Orders
      </h3>

      <div className="w-full overflow-x-auto">
        <table className="w-full text-left table-auto">
          <thead>
            <tr className="text-gray-400 border-b border-gray-700">
              <th className="py-2 px-2 sm:px-4">Product</th>
              <th className="px-2 sm:px-4 whitespace-nowrap">Qty</th>
              <th className="px-2 sm:px-4 whitespace-nowrap">Sales</th>
              <th className="px-2 sm:px-4 whitespace-nowrap">Profit</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray-700 text-white text-sm sm:text-base"
              >
                <td className="py-3 px-2 sm:px-4 break-words">
                  {item.product}
                </td>
                <td className="px-2 sm:px-4">
                  {item.quantity}
                </td>
                <td className="px-2 sm:px-4">
                  {item.sales}
                </td>
                <td className="px-2 sm:px-4 text-green-400">
                  {item.profit}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default TableSection;
