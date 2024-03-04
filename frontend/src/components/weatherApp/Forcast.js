import React, { useState, useEffect, useContext } from 'react';
import './forcast.css';
import { Link } from 'react-router-dom';
import { LoginContext } from '../../Allexports';

const Forecast = ({ ApiFetch }) => {
  const { city, setCity } = useContext(LoginContext)
  const [currentTime, setCurrentTime] = useState(new Date());
  // const [city, setCity] = useState("")

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const value = document.getElementById("search-input").value;
    if (value) {
      setCity(value)
      document.getElementById("search-input").value = ""
    }
    console.log(city)
    // setCity("")
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // every minute

    return () => clearInterval(intervalId);
  }, []);

  const year = currentTime.getFullYear();
  // console.log(year)
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  // const seconds = currentTime.getSeconds();
  const hours12 = hours % 12 || 12; // Ensure 12 is displayed for 0
  const ampm = hours >= 12 ? 'PM' : 'AM'

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
 
  const d = new Date();

  const month = d.getMonth() + 1;
  const dayDate = d.getDate();
  let day = days[d.getDay()];

  const week = {
    a: new Date(`${year}-0${month}-${dayDate + 1}`),
    b: new Date(`${year}-0${month}-${dayDate + 2}`),
    c: new Date(`${year}-0${month}-${dayDate + 3}`),
    d: new Date(`${year}-0${month}-${dayDate + 4}`),
    e: new Date(`${year}-0${month}-${dayDate + 5}`),
    f: new Date(`${year}-0${month}-${dayDate + 6}`)
  }

  const fromatedTime = `${hours12}:${minutes}${ampm}`
  // const list = ApiFetch && ApiFetch.list ? ApiFetch.list.filter(item => item.dt_txt.substr(0, 10) === `2024-0${month}-${dayDate}`) : [];

  return (
    <main style={{paddingTop: "100px"}}>
    
      <section className="container">
     
        <div className="row">
          <form className="col" id="search-form">
            <input
              type="text"
              id="search-input"
              aria-describedby="searchCity"
              placeholder="Search city..."
              className="search-form"
              autoComplete="on"
            />
            <button type="submit" className='button-search' onClick={handleFormSubmit} style={{ fontSize: "16px", height: "42px" }}>Search</button>
            </form>
          
        </div>
        <span className="measurements" style={{ fontSize: "25px" }}>
          <Link to="" id="celcius-link">
            C°
          </Link>{``}
          |
          <Link to="" id="fahrenheit-link">
            F°
          </Link>
        </span>
        <span style={{ fontSize: "25px", paddingLeft: "30px" }}>{city.toUpperCase()}</span>
      
      </section>

      <section className="current-weather">
        <div className="container">
          <div className="row">
            <h1 className="col temp-title" id="current-temperature">
              {(ApiFetch && ApiFetch.list) && (ApiFetch.list[0].main.temp - 273).toFixed(0)}°C|{(ApiFetch && ApiFetch.list) && ((ApiFetch.list[0].main.temp - 273.15) * 9 / 5 + 32).toFixed(0)}°F

            </h1>
            <div className="col todays-info">
              <p id="current-time" style={{ fontSize: "25px" }}>{fromatedTime}</p>
              <h2 id="current-day">Today: {day}</h2>
              <p id="weather-type" style={{ fontSize: "25px" }}>{(ApiFetch && ApiFetch.list) && ApiFetch.list[0].weather[0].main}</p>
            </div>
            <div className="col d-flex align-items-center side-info" style={{ fontSize: "25px" }}>
              <ul>
                <li>
                  Humidity : {(ApiFetch && ApiFetch.list) && ApiFetch.list[0].main.humidity} <span id="humidity"></span>
                </li>
                <li>
                  Wind: {(ApiFetch && ApiFetch.list) && ApiFetch.list[0].wind.speed} in {(ApiFetch && ApiFetch.list) && ApiFetch.list[0].wind.deg}°<span id="wind"></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
      </section>

      <section className="container">
        <div className="row week-forecast">
          <div className="col">
            <h3>{week.a.toLocaleDateString('en-US', { weekday: 'long' })}</h3>
            <br /><img
              src="https://img.icons8.com/color-glass/42/000000/rain.png"
              alt='Rain Icon'
            /><br />
            <p className="weather">Rain</p>
            <span>2°</span>
          </div>
          <div className="col">
            <h3>{week.b.toLocaleDateString('en-US', { weekday: 'long' })}</h3>
            <br /><img
              src="https://img.icons8.com/color-glass/42/000000/cloud.png"
              alt='Cloudy Icon'
            /><br />
            <p className="weather">Cloudy</p>
            <span>4°</span>
          </div>
          <div className="col">
            <h3>{week.c.toLocaleDateString('en-US', { weekday: 'long' })}</h3>
            <br /><img
              src="https://img.icons8.com/color-glass/42/000000/partly-cloudy-day.png"
              alt='Partly Cloudy Icon'
            /><br />
            <p className="weather">Partly cloudy</p>
            <span>6°</span>
          </div>
          <div className="col">
            <h3>{week.d.toLocaleDateString('en-US', { weekday: 'long' })}</h3>
            <br /><img
              src="https://img.icons8.com/color-glass/42/000000/sun.png"
              alt='Sunny Icon'
            /><br />
            <p className="weather">Sunny</p>
            <span>8°</span>
          </div>
          <div className="col">
            <h3>{week.e.toLocaleDateString('en-US', { weekday: 'long' })}</h3>
            <br /><img
              src="https://img.icons8.com/color-glass/42/000000/wind.png"
              alt='Wind Icon'
            /><br />
            <p className="weather">Windy</p>
            <span>5°</span>
          </div>
          <div className="col">
            <h3>{week.f.toLocaleDateString('en-US', { weekday: 'long' })}</h3>
            <br /><img
              src="https://img.icons8.com/color-glass/42/000000/wind.png"
              alt='Night Icon'
            /><br />
            <p className="weather">Windy</p>
            <span>5°</span>
          </div>
        </div>
      </section>
 
    </main>
  );
};

export default Forecast;
