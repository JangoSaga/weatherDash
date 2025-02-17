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
  const { units, forecast } = useWeather();
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
      units === "metric"
        ? hour.main.temp
        : (hour.main.temp * 1.4 + 32).toFixed(2),
  }));
  return (
    <div className="retro-container min-w-40">
      <h3 className="retro-title">Forecast Graph</h3>
      <ResponsiveContainer width={"100%"} height={300}>
        <LineChart data={graphData}>
          <XAxis
            dataKey="time"
            tick={{ fill: "#0f0" }}
            tickLine={{ stroke: "#0f0" }}
          />
          <YAxis
            domain={["auto", "auto"]}
            tick={{ fill: "#0f0" }}
            tickLine={{ stroke: "#0f0" }}
            label={{
              value: `Temperature `,
              angle: -90,
              position: "insideLeft",
              fill: "#0f0",
            }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "black",
              borderColor: "green",
              color: "#0f0",
            }}
          />
          <Line
            type="monotone"
            dataKey="temp"
            stroke="#0f0"
            strokeWidth={2}
            dot={{ stroke: "#0f0", fill: "#0f0" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ForecastGraph;
