import React, { useState, useEffect } from "react";
import Weather from "./Weater";

const API_KEY = "aeadb09486dc28f928d1d0eecb7c8e43";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState("");

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
      );
      const data = await response.json();
      setWeather(data);
      setLocation("");
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  };

  return (
    <div className="app">
      <h1 className="heading">Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={handleLocationChange}
        />
        <button type="submit" onClick={fetchWeatherData}>
          Get Weather
        </button>
      </form>
      {<Weather weather={weather} location={location} />}
    </div>
  );
};

export default App;
