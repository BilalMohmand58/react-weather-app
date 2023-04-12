import React from "react";
import Input from "./Input";
import WeatherDeatils from "./WeatherDeatils";
import Forecast from "./Forecast";

const SideBar = ({ weather, setQuery }) => {
  return (
    <div className="flex-1 bg-white bg-opacity-20 backdrop-blur-lg ">
      <Input setQuery={setQuery} />
      <WeatherDeatils weather={weather} />
      <Forecast title="Hourly Forecast" items={weather.hourly} />
      <Forecast title="Daily Forecast" items={weather.daily} />
    </div>
  );
};

export default SideBar;
