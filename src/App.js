import React, { useState } from "react"
import "./styles.css";
import axios from "axios"
import Forecast from "./Forecast";

export default function App() {
  const [weather, setWeather] = useState({})
  const [city, setCity] = useState("");
  let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  let forcastDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const listDays = forcastDays.map(day =>
    <li>{day}</li>
  );
  function formatDate(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    let day = days[date.getDay()];
    return `${day} ${hours}:${minutes}`;
  }
  function displayWeather(response) {
    console.log(response.data)
    setWeather({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      time: formatDate(response.data.dt),
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      longitude: response.data.coord.lon,
      latitude: response.data.coord.lat,
      coordinates: response.data.coord,

    })

  }
  function submitForm(event) {
    let apiKey = "094780c710fa4efd669f0df8c3991927"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    event.preventDefault();
    axios.get(apiUrl).then(displayWeather)

  }
  function updateForm(event) {
    setCity(event.target.value);
  }
  return (
    <div className=" container App rounded-4">
      <img
        src="https://www.weather.shecodes.io/images/logo.png"
        alt="shecodes-logo"
        className="pt-5 px-4"
        width="150"
      />
      <form onSubmit={submitForm} className="px-4">
        <div className="d-flex my-5 ">
          <input
            type="text"
            className="form-control input-form"
            placeholder="Enter a city.."
            onChange={updateForm}
          />
          <div className="ps-2 ">
            <button type="Submit" className="btn border-none search px-5 " >
              Search
            </button>
          </div>
        </div>
      </form>
      <div className="weather-details  d-flex justify-content-between pt-4 px-4 ">
        <div className="pt-2">
          <h1 className="text-capitalize city">{weather.city}</h1>
          <div>
            <p className="">{weather.time} , {weather.description}</p>
            <p>
              Humidity: <span className="humidity">{weather.humidity}%</span>, Wind:
              <span className="wind">{weather.wind}km/h</span>
            </p>
          </div>
        </div>
        <div>
          <div className="d-flex ">
            <div><img src={weather.icon} /></div>
            <div>
              <span className="temperature">{Math.round(weather.temperature)}</span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="forecast-days px-4 pt-3">
        <ul className="d-flex justify-content-between">{listDays}</ul>
      </div> */}
      {/* <Forecast latitude={weather.latitude} longitude={weather.longitude} /> */}
      <Forecast coordinates={weather.coordinates} city={weather.city} />
      <footer className="py-5">
        <div className="text-center">
          This project was coded by<span><a href="https://www.shecodes.io/" target="_blank"> SheCodes</a></span> and is <span><a href="https://github.com/Abolade017/shecodes-weather-app" target="_blank">open-sourced on GitHub</a> </span>
          and <span><a href="https://extraordinary-travesseiro-2d346f.netlify.app/" target="_blank">hosted on Netlify</a></span>
        </div>
      </footer>
    </div>
  );
}
