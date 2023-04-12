import React from "react";
import Main from "../components/Main";
import SideBar from "../components/SideBar";

const Home = ({ weather, setQuery }) => {
  return (
    <div className="flex h-screen flex-row w-full  bg-transparent">
      <Main weather={weather} />
      <SideBar weather={weather} setQuery={setQuery} />
    </div>
  );
};

export default Home;
