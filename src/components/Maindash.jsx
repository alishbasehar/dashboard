import React from "react";
import Cards from "./Cards";
import Table from "./Table"

const Maindash = () => {
  return (
    <div className="flex-1 p-4 sm:p-6 bg-black min-h-screen overflow-x-hidden">
      <h1 className="text-2xl md:text-4xl px-15 sm:px-20 md:px-8  font-extrabold text-white tracking-wider mb-6 border-b border-gray-700 pb-3 w-fit">
        Dashboard
      </h1>

      <Cards />
      <Table />
    </div>
  );
};

export default Maindash;
