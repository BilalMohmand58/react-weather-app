import React from "react";
import { UilSun, UilSunset, UilCloudSun } from "@iconscout/react-unicons";
import { formatToLocalTime } from "../services/weather";

const OtherDetails = ({
  weather: { temp_min, temp_max, sunrise, sunset, timezone },
}) => {
  return (
    <div className=" mt-40 ml-10 flex flex-row items-start justify-around pr-10 w-full    bg-white bg-opacity-20 backdrop-blur-sm">
      <div className="flex my-5">
        <UilSun />
        <p className="ml-3">
          Rise :{" "}
          <span className=" ml-2 font-medium">
            {formatToLocalTime(sunrise, timezone, "hh:mm a")}
          </span>
        </p>
      </div>

      <div className="flex my-5">
        <UilSunset />
        <p className="ml-3">
          Set :{" "}
          <span className=" ml-2 font-medium">
            {" "}
            {formatToLocalTime(sunset, timezone, "hh:mm a")}
          </span>
        </p>
      </div>
      <div className="flex my-5">
        <UilSun />
        <p className="ml-3">
          High :{" "}
          <span className=" ml-2 font-medium">{temp_max.toFixed()}° </span>
        </p>
      </div>

      <div className="flex my-5">
        <UilCloudSun />
        <p className="ml-3">
          Low :{" "}
          <span className=" ml-2 font-medium">{temp_min.toFixed()}° </span>
        </p>
      </div>
    </div>
  );
};

export default OtherDetails;
