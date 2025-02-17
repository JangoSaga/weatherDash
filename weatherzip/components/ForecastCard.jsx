/* eslint-disable react/prop-types */
import { useWeather } from "../Context/WeatherProvider";

const ForecastCard = ({ day }) => {
  const { units } = useWeather();
  console.log(day);
  const { dt_txt, main, weather } = day;
  const date = new Date(dt_txt);
  const time = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div className="p-2 flex flex-col items-center justify-center gap-2">
      <h3 className="text-blue-700">{time}</h3>
      <p>
        Temperature:
        {units === "metric"
          ? `${main.temp}°C`
          : `${(main.temp * 1.4 + 32).toFixed(2)}°F`}
      </p>
      <p>Condition: {weather[0].description}</p>
    </div>
  );
};

export default ForecastCard;
