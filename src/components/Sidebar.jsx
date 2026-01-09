import React from "react";
import logo from '../images/logo.png'
const Sidebar = () => {
  return (
    <aside className="w-64 min-h-screen  text-white p-6 flex flex-col relative pt-4 transition-all bg-[#2c3e55] "   >
      {/* Logo / Title */}
      <div className="flex h-[5rem]font-bold text-[22px] gap-5 h-[4%] items-center justify-center">
        <img src={logo} className="w-[3rem] h-[3rem] "  />
        <span>sh<span className="" style={{ color: "var(--pink)" }}>o</span>ps</span>
      </div>
      <div className="mt-[4rem] flex flex-col gap-4">
        <div className="flex items-center gap-1">
        <div>
          Icon
        </div>
        <span>dashboard</span>
      </div> </div>
    </aside>
  );
};

export default Sidebar;
