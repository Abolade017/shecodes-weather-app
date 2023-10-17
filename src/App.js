import React, { useState } from "react"
import "./styles.css";
import axios from "axios"
import Forecast from "./Forecast";

export default function App() {

  const [weather, setWeather] = useState({})
  const [city, setCity] = useState("");
  function displayWeather(response) {
    console.log(response.data)
    setWeather({
      temperature: response.data.main.temp,
      city: response.data.name,
    })

  }
  function submitForm(event) {
    let apiKey = "094780c710fa4efd669f0df8c3991927"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units="metric"`
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
        width="100"
      />
      <form onSubmit={submitForm}>
        <div class="d-flex my-5 ">
          <input
            type="text"
            className="form-control input-form"
            placeholder="Enter a city.."
            onChange={updateForm}
          />
          <div className="ps-2">
            <button type="Submit" className="btn border-none search  " >
              Search
            </button>
          </div>
        </div>
      </form>
      <div className="weather-details  d-flex justify-content-between pt-4 ">
        <div className="pt-2">
          <h1 className="text-capitalize city">{weather.city}</h1>
          <div>
            <p className="">Saturday 15:08, overcast clouds</p>
            <p>
              Humidity: <span className="text-danger">80%</span>, Wind:
              <span className="text-danger">0.45km/h</span>
            </p>
          </div>
        </div>
        <div>
          <div className="d-flex ">
            <div></div>
            <div>
              <span className="temperature">{Math.round(weather.temperature)}</span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
      </div>
      <Forecast />
      <footer className="py-5">
        <div className="text-center">
          This project was coded by<span><a href="https://www.shecodes.io/" target="_blank"> SheCodes</a></span> and is <span><a href="" target="_blank">open-sourced on GitHub</a> </span>
          and <span><a href="" target="_blank">hosted on Netlify</a></span>
        </div>
      </footer>
    </div>
  );
}
