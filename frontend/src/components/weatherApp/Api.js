import { useState, useEffect, useContext } from "react"
import React from 'react'
import Forecast from "./Forcast";
import { LoginContext } from "../../Allexports";

function Api() {
  const [location, setLocation] = useState({})
  const [ApiFetch, setApiFetch] = useState({})
  const {city} = useContext(LoginContext)

  useEffect(() => {
    async function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      }

      function showPosition(position) {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        setLocation({ lat, long });
      }
    }

    getLocation();
  }, []);

  useEffect(() => {
    if(city){
      let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?&appid=e4952835705ef7caff45a4bd99826dbc`
        apiUrl += `&q=${city}`;
        fetch(apiUrl)
        .then((res) => res.json())
        .then((res) => setApiFetch(res))
        .catch(err => console.log("Error: ", err));

    }

    if (location.lat && location.long) {
      // fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.long}&appid=e4952835705ef7caff45a4bd99826dbc`)
      let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?&appid=e4952835705ef7caff45a4bd99826dbc&`
      apiUrl += `lat=${location.lat}&lon=${location.long}`

      fetch(apiUrl)
        .then((res) => res.json())
        .then((res) => setApiFetch(res))
        .catch(err => console.log("Error: ", err));
    }
  }, [location,city]);
  
  console.log(ApiFetch)
  return(
    <>
    <Forecast ApiFetch={ApiFetch} />
    </>
  )

}

export default Api
