import React from "react";
import { getIconUrl } from "../services/weather";

const Forecast = ({ title, items }) => {
  return (
    <div className="px-5 w-full mt-10">
      <div className="flex items-center justify-start ">
        <h1 className="uppercase font-bold text-lg">{title}</h1>
      </div>
      <hr className="my-2 " />
      <div className="flex flex-row items-center justify-between text-white">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <p className="font-light text-sm">{item.title}</p>
            <img src={getIconUrl(item.icon)} alt="icon" className="w-12 my-1" />
            <p className="font-medium">{`${item.temp.toFixed()}`}°</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
