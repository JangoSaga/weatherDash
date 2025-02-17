import { useWeather } from "../Context/WeatherProvider";

const AqiInfo = () => {
  const { aqiData } = useWeather();
  if (!aqiData) return;

  const { aqi } = aqiData.main;
  const pollutants = aqiData.components;

  const getAqiDesc = (aqi) => {
    switch (aqi) {
      case 1:
        return { text: "Good", color: "#009966" };
      case 2:
        return { text: "Fair", color: "#ffde33" };
      case 3:
        return { text: "Moderate", color: "#ff9933" };
      case 4:
        return { text: "Poor", color: "#cc0033" };
      case 5:
        return { text: "Very Poor", color: "#660099" };
      default:
        return { text: "Unknown", color: "#808080" };
    }
  };

  const { text, color } = getAqiDesc(aqi);

  return (
    <div className=" flex flex-col p-2 gap-2  rounded-lg items-center">
      <h3 className="text-xl font-semibold ">Air Quality Index (AQI)</h3>
      <p className="text-xl">
        {text} ({aqi})
      </p>
      <div className="flex flex-col gap-2 text-lg">
        <p>🌫️ PM2.5: {pollutants.pm2_5} µg/m³</p>
        <p>🌫️ PM10: {pollutants.pm10} µg/m³</p>
        <p>🔥 CO: {pollutants.co} µg/m³</p>
        <p>🌪️ NO₂: {pollutants.no2} µg/m³</p>
        <p>🛢️ SO₂: {pollutants.so2} µg/m³</p>
        <p>🧪 O₃: {pollutants.o3} µg/m³</p>
      </div>
    </div>
  );
};

export default AqiInfo;
