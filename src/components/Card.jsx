import { useState } from "react";
import { color, LayoutGroup, motion } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";




const Card = (props) => {
  const [expand, setExpand] = useState(false);

  return (

    
    <LayoutGroup className="w-full  text-white">
      {expand ? (
        <ExpandedCard setExpand={setExpand} />
      ) : (
        <CompactCard params={props} setExpand={setExpand} />
      )}
    </LayoutGroup>
  );
};


function CompactCard({ params, setExpand }) {
  const Png = params.png;
  const value = params.barvalue

  return (
    <motion.div
      layout
      className=" p-4 flex  h-40 w-full gap-5 rounded-2xl text-white cursor-pointer"
      style={
        
      {background: params.color}}
      onClick={() => setExpand(true)}
    >
      <div className="w-24 h-24"
      >
        <CircularProgressbar
          value={value}
          text={`${value}%`}
        />
      </div>

      <div className="flex flex-col">
        <Png />
        <span>${params.value}</span>
        <span className="text-sm text-gray-300">
          Last 24 hours
        </span>
      </div>
    </motion.div>
  );
}

export default Card;