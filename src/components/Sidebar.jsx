import React, { useState } from "react";
import logo from "../images/envalop.jpg";
import { sidebardata } from "../Data/Data";
import { IoMdLogOut, IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom"; // ✅ Import Link

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false); // toggle sidebar on mobile

  return (
    <>
      {/* Top bar for mobile with hamburger */}
      <div className="fixed top-0 left-0 md:hidden flex items-center p-4 text-white z-30 shadow-md">
        <button onClick={() => setIsOpen(true)}>
          <IoMdMenu className="text-4xl" />
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`  min-h-screen
          fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-4 flex flex-col z-40
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:flex
        `}
      >
        {/* Logo for desktop */}
        <div className="hidden md:flex items-center gap-3 mb-12">
          <img
            src={logo}
            alt="Logo"
            className="w-12 h-12 rounded-full shadow-md"
          />
          <span className="text-2xl font-bold">Shops</span>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col gap-6 flex-grow mt-16 md:mt-0">
          {sidebardata.map((item, index) => (
            <Link
              to={item.path} // ✅ Add path from your data
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors
                ${activeIndex === index ? "bg-gray-700 text-yellow-400" : "text-white"}`}
            >
              <item.icon className="text-xl" />
              <span className="font-medium">{item.heading}</span>
            </Link>
          ))}

          {/* Logout */}
          <div className="flex items-center gap-3 p-3 rounded-lg cursor-pointer mt-auto hover:bg-gray-700 hover:text-yellow-400 transition-colors">
            <IoMdLogOut className="text-xl" />
            <span className="font-medium">Logout</span>
          </div>
        </div>

        {/* Close button for mobile */}
        <button
          className="absolute top-4 right-4 md:hidden text-white text-2xl"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
