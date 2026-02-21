import React, { useState } from "react";
import logo from "../images/envalop.jpg";
import { sidebardata } from "../Data/Data";
import { IoMdLogOut, IoMdMenu } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile toggle

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="fixed top-0 left-0 md:hidden flex items-center p-4 text-white z-30 shadow-md">
        <button onClick={() => setIsOpen(true)}>
          <IoMdMenu className="text-4xl" />
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`min-h-screen fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-4 flex flex-col z-40
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:static md:flex`}
      >
        {/* Logo (Desktop) */}
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
            <NavLink
              key={index}
              to={item.path}
              end={item.path === "/"} 
              onClick={() => setIsOpen(false)} // close sidebar on mobile
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-gray-700 text-yellow-400"
                    : "text-white hover:bg-gray-700 hover:text-yellow-400"
                }`
              }
            >
              <item.icon className="text-xl" />
              <span className="font-medium">{item.heading}</span>
            </NavLink>
          ))}

          {/* Logout */}
          <div className="flex items-center gap-3 p-3 rounded-lg cursor-pointer mt-auto hover:bg-gray-700 hover:text-yellow-400 transition-colors">
            <IoMdLogOut className="text-xl" />
            <span className="font-medium">Logout</span>
          </div>
        </div>

        {/* Close Button (Mobile) */}
        <button
          className="absolute top-4 right-4 md:hidden text-white text-2xl"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>
      </aside>

      {/* Overlay (Mobile) */}
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