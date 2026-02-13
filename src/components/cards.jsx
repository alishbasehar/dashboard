import React from "react";
import { carddata } from "../Data/Data";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
      {carddata.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          color={item.background}
          barvalue={item.barvalue}
          value={item.value}
          png={item.png}
          series={item.series}
        />
      ))}
    </div>
  );
};

export default Cards;
