import React, { useState } from "react";
import { UilSearch } from "@iconscout/react-unicons";

const Input = ({ setQuery }) => {
  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if (city !== "") {
      setQuery({ q: city });
      setCity("");
    }
  };

  return (
    <div className="flex flex-row justify-start mb-5   ">
      <div className=" pl-5 flex flex-row w-full items-center justify-between space-x-4  h-100  ">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          type="text"
          className=" px-2 text-lg  text-black  font-light h-full w-full shadow-xl focus:outline-none capitalize border-b-2 border-b-slate-950 bg-inherit placeholder:capitalize placeholder-slate-500"
          placeholder="Enter City Name Here"
        />
        <div className=" h-full p-5 overflow-hidden bg-black">
          <UilSearch
            size="24"
            className="text-white cursor-pointer transition ease-out hover:scale-125"
            onClick={handleSearchClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Input;
