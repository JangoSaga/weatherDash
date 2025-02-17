import { useEffect, useState } from "react";
import { useWeather } from "../Context/WeatherProvider";

const SearchBar = () => {
  const [city, setCity] = useState("");
  const { fetchWeather } = useWeather();
  useEffect(() => {
    function handleSearch() {
      if (!city) return;
      fetchWeather(city);
    }
    handleSearch();
  }, [city]);

  return (
    <form className="flex flex-row gap-2">
      <input
        type="text"
        placeholder="Search for a city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        autoFocus
        className="w-full px-4 py-2 bg-black text-white font-mono text-lg tracking-wide border-2 border-gray-600 rounded-md focus:outline-none focus:border-green-400 shadow-md"
      />
    </form>
  );
};

export default SearchBar;
