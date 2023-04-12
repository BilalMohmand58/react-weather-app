import { useEffect, useState } from "react";
import "./App.css";
import Home from "./Screens/Home";
import getFormattedWeatherData from "./services/weather";

function App() {
  const [query, setQuery] = useState({ q: "Islamabad" });
  const units = "metric";
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  return (
    <div
      className="  bg-cover flex flex-col  mx-auto max-w-screen-xl  m-4 shadow-xl shadow-gray-400 h-screen  "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1493314894560-5c412a56c17c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
      }}
    >
      {weather && <Home weather={weather} setQuery={setQuery} />}
    </div>
  );
}

export default App;
