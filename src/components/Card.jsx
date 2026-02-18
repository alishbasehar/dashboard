import { useState } from "react";
import { LayoutGroup, motion } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from 'react-apexcharts'

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
      className="p-4 flex items-center justify-between  w-full h-40 rounded-2xl cursor-pointer shadow-lg text-white"
      style={{ background: params.color }}
      onClick={setExpand}
    >
      {/* Progress Circle */}
      <div className="w-24 h-24">
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
        <span className="text-xl font-semibold">${params.value}</span>
        <span className="text-sm opacity-80">Last 24 hours</span>
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
      height: "auto",
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    stroke: {
      curve: "smooth",
      width: 3,
      colors: ["#fff"], // line color white for visibility
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.5, // thoda zyada visible
        opacityTo: 0.2,
        stops: [0, 80, 100],
        colorStops: [
          { offset: 0, color: "#fff", opacity: 0.5 },
          { offset: 100, color: "#fff", opacity: 0.1 },
        ],
      },
    },
    markers: {
      size: 4,
      colors: ["#fff"],
      strokeColors: "#000",
      strokeWidth: 2,
    },
    xaxis: {
      categories: ["12AM", "4AM", "8AM", "12PM", "4PM", "8PM", "11PM"],
      labels: { style: { colors: "#fff" } },
      axisBorder: { show: true, color: "#fff" },
      axisTicks: { show: true, color: "#fff" },
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
      initial={{ borderRadius: 20 }}
      className="p-6 w-[48rem]  h-120 rounded-2xl shadow-lg absolute z-10 left-[17rem] flex flex-col items-center justify-between  text-white"
      style={{ background: params.color }}
    >
      <div className="absolute top-4 right-4 cursor-pointer">
        <UilTimes onClick={setExpand} />
      </div>

      <div className="flex items-center gap-3 mb-4">
        <Png size={30} />
        <span className="text-3xl font-bold text-white text-shadow-2xl">{params.title}</span>
      </div>

      <Chart
        series={params.series}
        type="area"
        options={data.options}
        height={300}
        width={450}
      />

      <span className="text-sm opacity-80 mt-2 block">
        Last 24 Hours
      </span>
    </motion.div>
  );
}


export default Card;
