import AqiInfo from "../components/AqiInfo";
import ForecastGraph from "../components/ForecastGraph";
import WeatherDetails from "../components/WeatherDetails";
import ForecastCardList from "../components/ForecastCardList";
import { useWeather } from "../Context/WeatherProvider";
import Loading from "../components/Loading";

function WeatherDash() {
  const { weather, error, loading } = useWeather();
  if (loading) return <Loading />;
  return (
    <div className="grow-1 flex flex-col justify-center">
      {weather ? (
        <main className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min bg-black text-green-300 font-mono">
          <div className="border-2 border-green-500 p-4 rounded-lg shadow-lg bg-gray-900">
            <WeatherDetails />
          </div>

          <div className="border-2 border-yellow-500 p-4 rounded-lg shadow-lg bg-gray-900">
            <AqiInfo />
          </div>

          <div className="border-2 border-orange-500 p-4 rounded-lg shadow-lg bg-gray-900">
            <ForecastCardList />
          </div>

          <div className="col-span-1 sm:col-span-2 lg:col-span-3 border-2 border-blue-500 p-4 rounded-lg shadow-lg bg-gray-900">
            <ForecastGraph />
          </div>
        </main>
      ) : (
        <div className="text-center mt-4 text-xl text-gray-400">
          <p>{error ? error : "All updated weather in one place"}.</p>
        </div>
      )}
    </div>
  );
}

export default WeatherDash;
