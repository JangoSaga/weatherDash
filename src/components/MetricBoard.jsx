import { useWeather } from "../Context/WeatherProvider";

function MetricBoard() {
  const { units, toggleUnit } = useWeather();
  return (
    <div className="flex flex-col gap-2 md:flex-row">
      <button
        onClick={toggleUnit}
        className={`px-4 py-2 ${
          units === "metric"
            ? "bg-red-700 border-red-500 hover:bg-red-800 hover:border-red-400"
            : "bg-green-700 border-green-500 hover:bg-green-800 hover:border-green-400"
        } text-white font-bold tracking-widest rounded-md shadow-md border-2 active:scale-95 transition`}
      >
        {units === "metric" ? "Imperial" : "Metric"}
      </button>
    </div>
  );
}

export default MetricBoard;
