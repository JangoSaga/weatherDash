import Header from "./components/Header";
import { DarkModeProvider } from "./Context/DarkModeProvider";
import { WeatherProvider } from "./Context/WeatherProvider";
import WeatherDash from "./Pages/WeatherDash";

function App() {
  return (
    <DarkModeProvider>
      <WeatherProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <WeatherDash />
          <footer className="text-center border border-t p-2 text-xl shadow-lg shadow-green-600">
            Made by 47 🗿🗿
          </footer>
        </div>
      </WeatherProvider>
    </DarkModeProvider>
  );
}

export default App;
/*
App:
- Set up routes: 
--> Route, Route/city
- Set up the app layout
--> Header: title, logo, searchbar, theme change
--> Main: WeatherData, AQI Data, Graph, Weather Cards
--> Footer: Made by [Creater Name: githubProfile]
Responsive
Context:
--> useWeatherData: getCurrentCityData
*/
