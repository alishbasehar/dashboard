// src/components/Updates.jsx
import React from "react";
import { updatedata } from "../Data/Data";

const Updates = () => {
  return (
    <div className="p-5 bg-gray-900 rounded-xl mr-10 text-white w-full md:max-w-xl shadow-xl">
      <h3 className="text-lg  text-center font-semibold mb-4">
        Recent Updates
      </h3>

      {updatedata.map((update, index) => (
        <div
          key={index}
          className="flex items-center gap-4 mb-4 bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition duration-300"
        >
          {/* Profile Image */}
          <img
            src={update.img}
            alt={update.name}
            className="w-10 h-10 rounded-full"
          />

          {/* Text Content */}
          <div>
            <p className="text-sm">
              <span className="font-semibold">{update.name} has</span>{" "}
              {update.nots}
            </p>
            <span className="text-xs text-gray-400">{update.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Updates;
