/* eslint-disable react/prop-types */
// src/context/WeatherContext.js
import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import axios from "axios";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [aqiData, setAqiData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [units, setUnits] = useState(
    localStorage.getItem("weatherUnit") || "metric"
  );

  const apiKey = "fcefb6b532fb355983938841f873cdac";

  const handleError = (error) => {
    if (error.response && error.response.status === 404) {
      setError(error?.message);
    } else {
      setError("Wrong input👎👎");
    }
  };

  const fetchAQIData = async (lat, lon) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`
      );
      setAqiData(response.data.list[0]);
    } catch (error) {
      handleError(error);
    }
  };

  const fetchWeather = useCallback(
    async (city = "", lat = "", lon = "") => {
      setLoading(true);
      setError(null);
      setWeather(null);
      setForecast([]);
      setAqiData(null);

      try {
        let weatherUrl = "";
        let forecastUrl = "";

        if (city) {
          const geoResponse = await axios.get(
            `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`
          );
          const { lat, lon } = geoResponse.data[0];
          weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;
          forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;
          await fetchAQIData(lat, lon);
        } else if (lat && lon) {
          weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;
          forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;
          await fetchAQIData(lat, lon);
        }

        const [weatherResponse, forecastResponse] = await Promise.all([
          axios.get(weatherUrl),
          axios.get(forecastUrl),
        ]);
        setWeather(weatherResponse.data);
        setForecast(forecastResponse.data.list);

        autoSwitchTheme(
          weatherResponse.data.sys.sunrise,
          weatherResponse.data.sys.sunset
        );
      } catch (error) {
        handleError(error);
      } finally {
        setLoading(false);
      }
    },
    [units]
  );

  const getWeatherClass = () => {
    if (!weather) return "default-weather";
    const condition = weather.weather[0].id;
    if (condition >= 200 && condition < 300) return "weather-thunderstorm";
    if (condition >= 300 && condition < 400) return "weather-drizzle";
    if (condition >= 500 && condition < 600) return "weather-rain";
    if (condition >= 600 && condition < 700) return "weather-snow";
    if (condition >= 700 && condition < 800) return "weather-atmosphere";
    if (condition === 800) return "weather-clear";
    return "weather-clouds";
  };

  const toggleUnit = () => {
    const newUnit = units === "metric" ? "imperial" : "metric";
    setUnits(newUnit);
    localStorage.setItem("weatherUnit", newUnit);
  };

  const autoSwitchTheme = (sunrise, sunset) => {
    const currTime = Math.floor(Date.now() / 1000);
    const newTheme =
      sunrise <= currTime && currTime <= sunset ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.className = newTheme;
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <WeatherContext.Provider
      value={{
        weather,
        forecast,
        aqiData,
        error,
        loading,
        theme,
        units,
        fetchWeather,
        toggleUnit,
        setTheme,
        getWeatherClass,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
