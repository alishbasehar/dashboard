import React from "react";

export default function ProductTable({ products }) {
  return (
    <div className="bg-gray-800 rounded-xl overflow-x-auto">
      <table className="min-w-full text-left text-white">
        <thead className="border-b border-gray-700 text-gray-400">
          <tr>
            <th className="py-3 px-4">Product</th>
            <th className="px-4">Category</th>
            <th className="px-4">Price</th>
            <th className="px-4">Stock</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b border-gray-700">
              <td className="py-3 px-4">{product.name}</td>
              <td className="px-4">{product.category}</td>
              <td className="px-4">${product.price}</td>
              <td className="px-4">{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
