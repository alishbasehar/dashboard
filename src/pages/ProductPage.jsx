// src/pages/ProductPage.jsx
import React, { useState } from "react";
import ProductSummary from "../components/ProductSummary";
import ProductFilter from "../components/ProductFilter";
import ProductTable from "../components/ProductTable";

export default function ProductPage() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Wireless Mouse",
      category: "Electronics",
      price: 25,
      stock: 120,
    },
  ]);

  const addProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: Date.now() }]);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-900 min-h-screen space-y-8">
      <h2 className="text-3xl ml-10 md:ml-0 font-bold text-white">Products Dashboard</h2>

      <ProductSummary />
      <ProductFilter onAdd={addProduct} />
      <ProductTable products={products} />
    </div>
  );
}
