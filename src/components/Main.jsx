import React from "react";
import TimeLocation from "./TimeLocation";
import Temprature from "./Temprature";
import WeatherIcon from "./WeatherIcon";
import TopButton from "./TopButton";
import OtherDetails from "./OtherDetails";

const Main = ({ weather }) => {
  return (
    <div className="  w-3/5 flex flex-col justify-between items-start   ">
      <TopButton />
      <OtherDetails weather={weather} />
      {/* <Forecast title="Daily Forecast" /> */}

      <div className="flex mb-20 py-10 w-full flex-row items-center justify-evenly ">
        <Temprature weather={weather} />
        <TimeLocation weather={weather} />
        <WeatherIcon weather={weather} />
      </div>
    </div>
  );
};

export default Main;
