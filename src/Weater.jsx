import React from "react";

const Weather = ({ weather }) => {
  return (
    <div className="weather-info">
      {weather ? (
        <div>
          <h2>{weather.name}</h2>
          <div>{weather.main.temp}°C</div>
        </div>
      ) : (
        <h1>Please Enter Your City Name</h1>
      )}
    </div>
  );
};

export default Weather;
