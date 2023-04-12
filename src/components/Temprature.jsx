import React from "react";

const Temprature = ({ weather: { temp } }) => {
  return (
    <div className=" tracking-wider text-center text-8xl text-white font-bold">
      {temp.toFixed()}°
    </div>
  );
};

export default Temprature;
