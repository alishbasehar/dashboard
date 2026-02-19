// pp.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Right from "./components/Right";
import Orderpage from "./pages/orderspage";
import Customers from "./pages/Customersfinal";

import Productpagefinal from "./pages/Productpagefinal";

function APP() {
  return (
    <BrowserRouter>
      <div className="">
        
        
        {/* Main content */}
        <div className="">
          <Routes>
            <Route
              path="/"
              element={
                <div className="flex flex-col md:flex-row">
                  <Dashboard />
                  <Right />
                </div>
              }
            />
            <Route path="/orders" element={<Orderpage />} />
            <Route path="/customer" element={<Customers />} />

            <Route path="/product" element={<Productpagefinal />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default APP;
