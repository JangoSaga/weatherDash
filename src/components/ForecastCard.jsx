/* eslint-disable react/prop-types */
import { useWeather } from "../Context/WeatherProvider";

const ForecastCard = ({ day }) => {
  const { units } = useWeather();

  const { dt_txt, main, weather } = day;
  // const { name, wind, weather: weatherData } = weather;
  const iconurl = `http://openweathermap.org/img/w/${weather?.[0]?.icon}.png`;

  const date = new Date(dt_txt);
  const time = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  function getTempLevel(temp) {
    if (units === "metric") {
      if (temp < 0) return "lightblue";
      else if (temp <= 23) return "white";
      else if (temp <= 40) return "blue";
      else if (temp <= 100) return "red";
      else return "brown";
    } else {
      if (temp <= 73.4) return "white";
      else if (temp <= 104) return "blue";
      else if (temp <= 212) return "red";
      else return "brown";
    }
  }

  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-4 border rounded-lg bg-gray-800 text-white shadow-lg">
      <h3
        className="text-blue-400 font-semibold 
      "
      >
        {time}
      </h3>
      <p style={{ color: getTempLevel(main?.temp) }} className="text-lg">
        {units === "metric"
          ? `${main?.temp}°C`
          : `${((main?.temp * 9) / 5 + 32).toFixed(2)}°F`}
      </p>
      <img
        src={iconurl}
        alt={weather?.[0]?.description}
        className="retro-icon"
      />
      <p className="capitalize text-gray-300 text-center">
        {weather[0].description}
      </p>
    </div>
  );
};

export default ForecastCard;
