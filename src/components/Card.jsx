import { useState } from "react";
import { LayoutGroup, motion } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";

const Card = (props) => {
  const [expand, setExpand] = useState(false);

  return (
    <LayoutGroup>
      {expand ? (
        <ExpandedCard params={props} setExpand={() => setExpand(false)} />
      ) : (
        <CompactCard params={props} setExpand={() => setExpand(true)} />
      )}
    </LayoutGroup>
  );
};

function CompactCard({ params, setExpand }) {
  const Png = params.png;
  const value = params.barvalue;

  return (
    <motion.div
      layout
      whileHover={{ scale: 1.03 }}
      className="p-4 flex items-center justify-between 
                 w-full max-w-full 
                 h-40 
                 rounded-2xl 
                 cursor-pointer 
                 shadow-lg 
                 text-white"
      style={{ background: params.color }}
      onClick={setExpand}
    >
      {/* Progress Circle */}
      <div className="w-20 h-20 sm:w-24 sm:h-24">
        <CircularProgressbar
          value={value}
          text={`${value}%`}
          styles={buildStyles({
            textColor: "#fff",
            pathColor: "#fff",
            trailColor: "rgba(255,255,255,0.2)",
          })}
        />
      </div>

      {/* Right Content */}
      <div className="flex flex-col items-end gap-2">
        <Png size={28} />
        <span className="text-lg sm:text-xl font-semibold">
          ${params.value}
        </span>
        <span className="text-xs sm:text-sm opacity-80">
          Last 24 hours
        </span>
      </div>
    </motion.div>
  );
}

function ExpandedCard({ params, setExpand }) {
  const Png = params.png;

  const data = {
    options: {
      chart: {
        type: "area",
        toolbar: { show: false },
        zoom: { enabled: false },
      },
      stroke: {
        curve: "smooth",
        width: 3,
        colors: ["#fff"],
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.5,
          opacityTo: 0.1,
          stops: [0, 100],
        },
      },
      markers: {
        size: 4,
        colors: ["#fff"],
        strokeColors: "#000",
        strokeWidth: 2,
      },
      xaxis: {
        categories: [
          "12AM",
          "4AM",
          "8AM",
          "12PM",
          "4PM",
          "8PM",
          "11PM",
        ],
        labels: { style: { colors: "#fff" } },
      },
      yaxis: {
        labels: { style: { colors: "#fff" } },
      },
      grid: {
        borderColor: "rgba(255,255,255,0.2)",
      },
      tooltip: { theme: "dark" },
    },
  };

  return (
    <motion.div
      layout
      className="fixed inset-0 z-50 
                 flex items-center justify-center 
                 p-4"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={setExpand}
      ></div>

      {/* Card */}
      <div
        className="relative w-full max-w-3xl 
                   min-h-[400px] 
                   rounded-2xl 
                   shadow-lg 
                   flex flex-col 
                   items-center 
                   justify-between 
                   p-4 sm:p-6 
                   text-white"
        style={{ background: params.color }}
      >
        {/* Close Button */}
        <div className="absolute top-4 right-4 cursor-pointer">
          <UilTimes onClick={setExpand} />
        </div>

        {/* Title */}
        <div className="flex items-center gap-3 mb-4">
          <Png size={30} />
          <span className="text-xl sm:text-3xl font-bold">
            {params.title}
          </span>
        </div>

        {/* Chart */}
        <div className="w-full">
          <Chart
            series={params.series}
            type="area"
            options={data.options}
            height={300}
            width="100%"
          />
        </div>

        <span className="text-sm opacity-80 mt-2">
          Last 24 Hours
        </span>
      </div>
    </motion.div>
  );
}

export default Card;