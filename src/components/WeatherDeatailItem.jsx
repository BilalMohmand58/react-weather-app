import React from "react";

const WeatherDeatailItem = ({ children, value }) => {
  return (
    <div className="flex flex-row justify-between py-3 my-1 ">
      <div className="text-md font-light">{children}</div>
      <div className=" text-md font-medium">{value}</div>
    </div>
  );
};

export default WeatherDeatailItem;
