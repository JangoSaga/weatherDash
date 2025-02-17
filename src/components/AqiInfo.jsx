import { useWeather } from "../Context/WeatherProvider";
import { GiGasMask } from "react-icons/gi";
import { AiOutlineSmile } from "react-icons/ai";
import { FaRegSmile, FaSkull } from "react-icons/fa";
import { FaHeadSideMask } from "react-icons/fa6";

const AqiInfo = () => {
  const { aqiData } = useWeather();
  if (!aqiData) return;

  const { aqi } = aqiData.main;
  const pollutants = aqiData.components;

  const getAqiDesc = (aqi) => {
    switch (aqi) {
      case 1:
        return { text: "Good", color: "#009966", icon: <FaRegSmile /> };
      case 2:
        return { text: "Fair", color: "#ffde33", icon: <AiOutlineSmile /> };
      case 3:
        return { text: "Moderate", color: "#ff9933", icon: <FaHeadSideMask /> };
      case 4:
        return { text: "Poor", color: "#cc0033", icon: <GiGasMask /> };
      case 5:
        return { text: "Very Poor", color: "#660099", icon: <FaSkull /> };
      default:
        return { text: "Unknown", color: "#808080", icon: "❓" };
    }
  };

  const getPollutantColor = (value, type) => {
    switch (type) {
      case "pm2_5":
      case "pm10":
        if (value <= 12) return "#009966";
        if (value <= 35.4) return "#ffde33";
        if (value <= 55.4) return "#ff9933";
        if (value <= 150.4) return "#cc0033";
        if (value <= 250.4) return "#660099";
        return "#7e0023";
      case "co":
        if (value <= 4.4) return "#009966";
        if (value <= 9.4) return "#ffde33";
        if (value <= 12.4) return "#ff9933";
        if (value <= 15.4) return "#cc0033";
        if (value <= 30.4) return "#660099";
        return "#7e0023";
      case "no2":
        if (value <= 53) return "#009966";
        if (value <= 100) return "#ffde33";
        if (value <= 360) return "#ff9933";
        if (value <= 649) return "#cc0033";
        if (value <= 1249) return "#660099";
        return "#7e0023";
      case "so2":
        if (value <= 35) return "#009966";
        if (value <= 75) return "#ffde33";
        if (value <= 185) return "#ff9933";
        if (value <= 304) return "#cc0033";
        if (value <= 604) return "#660099";
        return "#7e0023";
      case "o3":
        if (value <= 0.054) return "#009966";
        if (value <= 0.07) return "#ffde33";
        if (value <= 0.085) return "#ff9933";
        if (value <= 0.105) return "#cc0033";
        if (value <= 0.2) return "#660099";
        return "#7e0023";
      default:
        return "#808080";
    }
  };

  const { text, color, icon } = getAqiDesc(aqi);
  return (
    <div className="retro-container">
      <h3 className="retro-title">Air Quality Index (AQI)</h3>
      <p className="text-6xl" style={{ color: color }}>
        {icon}
      </p>
      <p className={`retro-description`} style={{ color: color }}>
        {text} ({aqi})
      </p>
      <div className="flex flex-col w-full items-center gap-2">
        <p
          style={{ color: getPollutantColor(pollutants.pm2_5, "pm2_5") }}
          className="retro-text"
        >
          🌫️ PM2.5: {pollutants.pm2_5} µg/m³
        </p>
        <p
          style={{ color: getPollutantColor(pollutants.pm10, "pm10") }}
          className="retro-text"
        >
          🌫️ PM10: {pollutants.pm10} µg/m³
        </p>
        <p
          style={{ color: getPollutantColor(pollutants.co, "co") }}
          className="retro-text"
        >
          🔥 CO: {pollutants.co} µg/m³
        </p>
        <p
          style={{ color: getPollutantColor(pollutants.no2, "no2") }}
          className="retro-text"
        >
          🌪️ NO₂: {pollutants.no2} µg/m³
        </p>
        <p
          style={{ color: getPollutantColor(pollutants.so2, "so2") }}
          className="retro-text"
        >
          🛢️ SO₂: {pollutants.so2} µg/m³
        </p>
        <p
          style={{ color: getPollutantColor(pollutants.o3, "o3") }}
          className="retro-text"
        >
          🧪 O₃: {pollutants.o3} µg/m³
        </p>
      </div>
    </div>
  );
};

export default AqiInfo;
