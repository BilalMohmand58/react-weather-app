import React from "react";
import WeatherDeatailItem from "./WeatherDeatailItem";

const WeatherDeatils = ({
  weather: { humidity, speed, feels_like, description },
}) => {
  return (
    <div className="flex flex-col px-5   ">
      <WeatherDeatailItem value={`${humidity}%`}>Humidity</WeatherDeatailItem>
      <WeatherDeatailItem value={`${feels_like.toFixed()}°`}>
        Feels Like
      </WeatherDeatailItem>
      <WeatherDeatailItem value={`${speed.toFixed(1)} km/h`}>
        Wind
      </WeatherDeatailItem>
      <WeatherDeatailItem value={description}>Description</WeatherDeatailItem>
    </div>
  );
};

export default WeatherDeatils;
