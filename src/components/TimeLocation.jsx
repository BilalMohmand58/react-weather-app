import React from "react";
import { formatToLocalTime } from "../services/weather";

const TimeLocation = ({ weather: { dt, timezone, name, country } }) => {
  return (
    <div>
      <div className="flex items-center justify-center ">
        <p className="text-white tracking-wider text-4xl font-bold capitalize">
          {name}
        </p>
      </div>
      <div className="flex items-center justify-center ">
        <p className="text-white text-lg font-extralight">
          {formatToLocalTime(dt, timezone)}
        </p>
      </div>
    </div>
  );
};

export default TimeLocation;
