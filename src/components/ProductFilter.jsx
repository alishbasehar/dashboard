import React, { useState } from "react";

export default function ProductFilter({ onAdd }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);     // 🔥 send data to parent
    setOpen(false);  // close modal
    setForm({ name: "", category: "", price: "", stock: "" });
  };

  return (
    <>
      <div className="flex justify-between gap-4">
        <input
          type="text"
          placeholder="Search products..."
          className="p-3 rounded-lg bg-gray-800 text-white w-1/3"
        />

        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white px-5 py-3 rounded-lg"
        >
          + Add Product
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <div className="bg-gray-900 w-full max-w-lg p-6 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">
              Add New Product
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Product Name"
                className="w-full p-3 bg-gray-800 text-white rounded-lg"
              />

              <input
                name="category"
                value={form.category}
                onChange={handleChange}
                placeholder="Category"
                className="w-full p-3 bg-gray-800 text-white rounded-lg"
              />

              <input
                name="price"
                value={form.price}
                onChange={handleChange}
                placeholder="Price"
                className="w-full p-3 bg-gray-800 text-white rounded-lg"
              />

              <input
                name="stock"
                value={form.stock}
                onChange={handleChange}
                placeholder="Stock"
                className="w-full p-3 bg-gray-800 text-white rounded-lg"
              />

              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 bg-gray-700 text-white rounded-lg"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                >
                  Save Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
