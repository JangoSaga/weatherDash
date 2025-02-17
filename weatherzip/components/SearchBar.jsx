import { useState } from "react";
import { useWeather } from "../Context/WeatherProvider";

const SearchBar = () => {
  const [city, setCity] = useState("");
  const { fetchWeather } = useWeather();
  const handleSearch = (e) => {
    e.preventDefault();
    fetchWeather(city);
    setCity("");
  };

  return (
    <form onSubmit={handleSearch} className="flex flex-row gap-2">
      <input
        type="text"
        placeholder="Search for a city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        autoFocus
        className="text-lg p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 w-full md:w-fit"
      />
      <button
        className="p-2 border-2  focus:border-green-600 focus:outline-none border-green-500 rounded-lg hover:bg-green-600"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
