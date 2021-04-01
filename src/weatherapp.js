import React from "react";
import "./styles.css";

export default function Weatherapp() {
  return (
    <div className="Weatherapp">
      <div className="container">
        <div className="weather-app">
          <form id="search-form">
            <div className="row search-form">
              <div className="col-5">
                <input
                  type="text"
                  placeholder="Type a city"
                  autoComplete="off"
                  className="form-control"
                  id="search-text-input"
                />
              </div>
              <div className="col-3">
                <input
                  type="Submit"
                  value="Search"
                  className="form-control btn btn-primary"
                  id="submitButton"
                />
              </div>
            </div>
          </form>
          <h1>City</h1>
          <ul>
            <li id="date">Sunday 00:00</li>
            <li className="description" id="description">
              Description
            </li>
          </ul>
          <div className="row">
            <div className="col-6">
              <div className="clearfix">
                <div className="float-left">
                  <img
                    src=""
                    alt=""
                    className="weather-icon float-left"
                    id="weather-icon"
                  />

                  <span className="temp" id="temp">
                    0
                  </span>
                  <span className="units">
                    <a href="#" id="celsius-link">
                      {" "}
                      °C
                    </a>{" "}
                    |
                    <a href="#" id="fahrenheit-link">
                      °F
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  Humidity: <span id="humidity"> 0</span> %
                </li>
                <li>
                  Wind: <span id="wind"> 0 </span> km/h
                </li>
              </ul>
            </div>
          </div>
          <div className="row" id="forecast"></div>
        </div>
        <p className="gitHubLink">
          <a href="https://github.com/JulyB-creations/Weather-App.git">
            Open source coded
          </a>{" "}
          <br />
          by Juliana Broockmann{" "}
        </p>
      </div>
    </div>
  );
}
