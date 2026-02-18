import React, { useEffect, useState } from "react";

const Weather = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relative_humidity_2m&current_weather=true"
        );
        const result = await res.json();
        setData(result);
        console.log("Fetched:", result);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch weather data");
      }
    };

    fetchWeather();
  }, []);

  if (error) return <h2>{error}</h2>;
  if (!data) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>Weather Data</h1>
      <h2>Time: {data.current_weather.time}</h2>
      <p>Temperature: {data.current_weather.temperature} °C</p>
      <p>Wind Speed: {data.current_weather.windspeed} km/h</p>
    </div>
  );
};

export default Weather;
