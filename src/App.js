import "./styles.css";

export default function App() {
  return (
    <div className=" container App">
      <img
        src="https://www.weather.shecodes.io/images/logo.png"
        alt="shecodes-logo"
        width="100"
      />
      <form>
        <div class="d-flex my-5 ">
          <input
            type="text"
            className="form-control input-form"
            placeholder="Enter a city.."
          />
          <div className="ps-2">
            <button type="Submit" className="btn border-none search  ">
              Search
            </button>
          </div>
        </div>
      </form>
      <div className="weather-details  d-flex justify-content-between">
        <div>
          <h1 className="">San Francisco</h1>
          <div>
            <p className="">Saturday 15:08, overcast clouds</p>
            <p>
              Humidity: <span className="text-danger">80%</span>, Wind:
              <span className="text-danger">0.45km/h</span>
            </p>
          </div>
          <div>
            <div className="d-flex ">
              <div></div>
              <div>
                <span className="temperature">16</span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
