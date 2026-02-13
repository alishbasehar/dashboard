import React from "react";
import Cards from "./Cards";

const Maindash = () => {
  return (
    <div className="flex-1 p-6 bg-black min-h-screen">
      <h1 className="text-4xl font-extrabold text-white tracking-wider mb-6 border-b border-gray-700 pb-3 w-fit">
        Dashboard
      </h1>
      <Cards />
    </div>
  );
};

export default Maindash;
