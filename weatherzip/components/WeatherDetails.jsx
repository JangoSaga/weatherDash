import { useWeather } from "../Context/WeatherProvider";

const WeatherDetails = () => {
  const { weather, unit } = useWeather();
  if (!weather) return null;
  const { name, main, wind, weather: weatherData } = weather;
  const iconurl = `http://openweathermap.org/img/w/${weatherData[0].icon}.png`;
  const formatTime = (time) => {
    return new Date(time * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className=" drop-shadow-lg shadow-white rounded-lg p-2 flex flex-col items-center gap-2">
      <h1 className="italic font-semibold text-2xl  text-center ">{name}</h1>
      <img
        src={iconurl}
        alt={weatherData[0].description}
        className="h-24 w-24 object-contain"
      />
      <p className="flex items-center gap-2 text-lg">
        Temperature:
        {unit === "metric"
          ? `${main.temp}°C`
          : `${(main.temp * 1.4 + 32).toFixed(2)}°F`}
      </p>
      <p className="flex items-center gap-2 text-lg">
        Humidity: {main.humidity}%
      </p>
      <p className="flex items-center gap-2 text-lg">
        Wind:
        {unit === "metric"
          ? `${wind.speed} m/s`
          : `${(wind.speed * 2.2369).toFixed(2)} mph`}
      </p>
      <div className="flex justify-between w-full px-4">
        <p className="flex items-center gap-1">
          {formatTime(weather.sys.sunrise)}
        </p>
        <p className="flex items-center gap-1">
          {formatTime(weather.sys.sunset)}
        </p>
      </div>
      <p className="italic text-lg mt-2">{weatherData[0].description}</p>
    </div>
  );
};

export default WeatherDetails;
