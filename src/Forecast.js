import React, { useState } from "react";
import axios from "axios"
import WeatherForecastPreview from "./WeatherForecastPreview";

export default function Forecast(props) {
    const [loaded, setLoaded] = useState(false)
    const [forecast, setForecast] = useState(null)
    function weatherForecast(response) {
        console.log(response.data);
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
        return (
            <div className="Forecast row">
                {forecast.map(function (day, index) {
                    if (index < 5) {
                        return (
                            <div className="col" key={index}>
                                <WeatherForecastPreview data={day} />
                            </div>
                        );
                    }
                })}
            </div>)
    }
    else {
        // let apiKey = "eac360db5fc86ft86450f3693e73o43f"
        let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c"
        // let longitude = props.coordinates.lon;
        // let latitude = props.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=57&lon=-2.15&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(weatherForecast)

        return <p>loading...</p>
    }
}