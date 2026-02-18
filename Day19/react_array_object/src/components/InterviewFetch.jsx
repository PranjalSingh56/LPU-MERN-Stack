import React, { useEffect, useState } from "react";

 const Weather=()=> {
    const [data, setData] = useState(null);
    try {
        useEffect(() => {
        
        fetch(
            "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relative_humidity_2m&current_weather=true"
        )
            .then(res => res.json())
            .then(result => {
                setData(result);
                console.log("Fetched:", result);
            });
    }, []);
    } catch (error) {
        console.log(error);
        
    }
    

    return (
        <div>
            <h1>Weather Data</h1>

            <h2>Current Weather</h2>
            <p>Latitude: {data.latitude}</p>
            <p>Longitude: {data.longitude}</p>
            <p>Temperature: {data.current_weather.temperature} °C</p>
            <p>Wind Speed: {data.current_weather.windspeed}</p>
             <p>Current: {data.current_weather}</p>
        </div>
    );
}
export default Weather;