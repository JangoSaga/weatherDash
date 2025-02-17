import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useWeather } from "../Context/WeatherProvider";

const ForecastGraph = () => {
  const { unit, forecast } = useWeather();
  if (!forecast.length) return null;

  const graphData = forecast.map((hour) => ({
    time: new Date(hour.dt * 1000).toLocaleTimeString([], {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      dayPeriod: "short",
    }),
    temp:
      unit === "metric"
        ? hour.main.temp
        : (hour.main.temp * 1.4 + 32).toFixed(2),
  }));

  return (
    <div className="rounded-lg p-2 ">
      <h3 className="text-xl font-semibold text-center">Forecast Graph</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={graphData}>
          <XAxis dataKey="time" />
          <YAxis domain={["auto", "auto"]} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="temp"
            stroke="#ff7300"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ForecastGraph;
