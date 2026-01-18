import React, { useState } from "react";
import logo from "../images/envalop.jpg";
import { sidebardata } from "../Data/Data";
import { IoMdLogOut } from "react-icons/io";

const Sidebar = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <aside className="w-64 min-h-screen text-white p-4 flex flex-col bg-gray-700">

      {/* Logo / Title */}
      <div className="flex items-center gap-3 mb-12">
        <img
          src={logo}
          alt="Logo"
          className="w-12 h-12 rounded-full shadow-md"
        />
        <span className="text-2xl font-bold text-white">shops</span>
      </div>

      {/* Menu Items */}
      <div className="flex flex-col gap-6 flex-grow">
        {sidebardata.map((item, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors 
              ${activeIndex === index ? "bg-gray-800 text-[#BFA15D]" : "text-white"}`}
          >
            <item.icon className="text-xl" />
            <span className="font-medium">{item.heading}</span>
          </div>
        ))}

        {/* Logout */}
        <div className="flex items-center gap-3 p-3 rounded-lg cursor-pointer mt-auto hover:bg-gray-800 hover:text-[#BFA15D] transition-colors">
          <IoMdLogOut className="text-xl" />
          <span className="font-medium">Logout</span>
        </div>

      </div>
    </aside>
  );
};

export default Sidebar;
