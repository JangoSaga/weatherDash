import { useWeather } from "../Context/WeatherProvider";
import { FiSunrise, FiSunset } from "react-icons/fi";
import { CiTempHigh } from "react-icons/ci";
import { LuWind } from "react-icons/lu";
import { MdOutlineWaterDrop } from "react-icons/md";

const WeatherDetails = () => {
  const { weather, units } = useWeather();
  if (!weather) return null;
  const { name, main, wind, weather: weatherData } = weather;
  const iconurl = `http://openweathermap.org/img/w/${weatherData[0].icon}.png`;
  const formatTime = (time) => {
    return new Date(time * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  function getTempLevel(temp) {
    if (units === "metric") {
      if (temp < 0) return "lightblue";
      else if (0 <= temp && temp <= 23) return "white";
      else if (24 <= temp && temp <= 40) return "blue";
      else if (41 <= temp && temp <= 100) return "red";
      else if (temp > 100) return "brown";
    } else {
      if (32 <= temp && temp <= 73.4) return "white";
      else if (75.2 <= temp && temp <= 104) return "blue";
      else if (105.8 <= temp && temp <= 212) return "red";
      else if (temp > 212) return "brown";
    }
  }

  function getHumidityLevel(humidity) {
    if (humidity < 30) return "yellow";
    else if (humidity >= 30 && humidity <= 60) return "green";
    else return "blue";
  }

  function getWindLevel(speed) {
    if (units === "metric") {
      if (speed < 5) return "lightblue";
      else if (speed >= 5 && speed <= 15) return "blue";
      else return "darkblue";
    } else {
      if (speed < 11.18) return "lightblue";
      else if (speed >= 11.18 && speed <= 33.55) return "blue";
      else return "darkblue";
    }
  }
  return (
    <div className="retro-container ">
      <h1 className="retro-title">{name}</h1>
      <img
        src={iconurl}
        alt={weatherData[0].description}
        className="retro-icon"
      />
      <p className="retro-description">{weatherData[0].description}</p>
      <div className="flex flex-col w-full items-center gap-2">
        <p className={`retro-text`} style={{ color: getTempLevel(main?.temp) }}>
          <CiTempHigh />
          Temperature:{" "}
          {units === "metric"
            ? `${main.temp}°C`
            : `${(main.temp * 1.8 + 32).toFixed(2)}°F`}
        </p>
        <p
          className="retro-text"
          style={{ color: getHumidityLevel(main.humidity) }}
        >
          <MdOutlineWaterDrop />
          Humidity: {main.humidity}%
        </p>
        <p className="retro-text" style={{ color: getWindLevel(wind.speed) }}>
          <LuWind />
          Wind:{" "}
          {units === "metric"
            ? `${wind.speed} m/s`
            : `${(wind.speed * 2.2369).toFixed(2)} mph`}
        </p>
        <p className="retro-text">
          <FiSunrise />
          Sunrise: {formatTime(weather.sys.sunrise)}
        </p>
        <p className="retro-text">
          <FiSunset />
          Sunset: {formatTime(weather.sys.sunset)}
        </p>
      </div>
    </div>
  );
};

export default WeatherDetails;
