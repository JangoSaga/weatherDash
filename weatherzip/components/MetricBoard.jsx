import { useWeather } from "../Context/WeatherProvider";

function MetricBoard() {
  const { units, toggleUnit } = useWeather();
  return (
    <div className="flex flex-col gap-2 md:flex-row">
      <button
        onClick={toggleUnit}
        className={`p-2 border-2 ${
          units === "metric"
            ? "border-blue-600 hover:bg-blue-600"
            : "border-red-600 hover:bg-red-600"
        } rounded-lg
        outline-none
        `}
      >
        {units === "metric" ? "imperial" : "metric"}
      </button>
    </div>
  );
}

export default MetricBoard;
