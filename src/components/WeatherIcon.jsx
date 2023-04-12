import React from "react";
import { getIconUrl } from "../services/weather";
const WeatherIcon = ({ weather }) => {
  return (
    <div className="flex flex-col justify-center items-center rounded-full p-3  bg-white bg-opacity-20 backdrop-blur-sm">
      <img src={getIconUrl(weather.icon)} alt="icon" className="w-12 " />
    </div>
  );
};

export default WeatherIcon;
