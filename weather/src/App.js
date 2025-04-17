import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY"; 
  const CITY = "New York";

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`)
      .then((res) => res.json())
      .then((data) => {
        if (data.cod !== 200) {
          setError(data.message);
        } else {
          setWeather(data);
        }
      })
      .catch(() => setError("Network error while fetching weather."));
  }, []);

  return (
    <div className="text-center p-4 bg-light rounded shadow mt-4 mx-auto" style={{ maxWidth: "400px" }}>
      <h5 className="mb-3">Current Weather</h5>
      {error ? (
        <p className="text-danger">Error: {error}</p>
      ) : weather ? (
        <>
          <h6>{weather.name}, {weather.sys?.country}</h6>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather?.[0]?.icon}@2x.png`}
            alt="weather icon"
          />
          <p className="mb-1">
            <strong>{Math.round(weather.main?.temp)}°C</strong> – {weather.weather?.[0]?.description}
          </p>
          <p className="mb-1">💧 Humidity: {weather.main?.humidity}%</p>
          <p>🌬️ Wind: {Math.round(weather.wind?.speed)} m/s</p>
        </>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );
};

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm p-3">
      <Container>
        <Navbar.Brand href="#">Weather App</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

const App = () => {
  return (
    <div>
      <NavigationBar />
      <Container className="d-flex justify-content-center align-items-center flex-column mt-5">
        <Weather />
      </Container>
    </div>
  );
};

export default App;



