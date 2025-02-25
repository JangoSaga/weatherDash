# Weather Dashboard

## Overview

The Weather Dashboard is a web application that provides real-time weather information, air quality index (AQI) data, and weather forecasts for various cities. The application is built using React, Tailwind CSS, and several other modern web technologies.

## Features

- **Current Weather**: Displays the current weather conditions including temperature, humidity, wind speed, and weather description.
- **Air Quality Index (AQI)**: Provides AQI data with detailed information on various pollutants.
- **Weather Forecast**: Shows a detailed weather forecast for the upcoming days.
- **Interactive Graphs**: Visual representation of temperature trends over time.
- **Search Functionality**: Allows users to search for weather information by city name.
- **Unit Toggle**: Users can switch between metric and imperial units.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Axios**: Promise-based HTTP client for making API requests.
- **Recharts**: Library for building charts in React.
- **Styled Components**: For writing CSS in JavaScript.
- **Swiper**: Modern mobile touch slider for React.
- **React Icons**: Collection of popular icons for React.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/weather-dash.git
   ```
2. Navigate to the project directory:
   ```sh
   cd weather-dash
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

## Usage

1. Create a `.env` file in the root directory and add your OpenWeatherMap API key:
   ```env
   API_KEY="your_openweathermap_api_key"
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```
3. Open your browser and navigate to `http://localhost:3000` to view the application.

## Project Structure

- **src/components**: Contains all the React components used in the application.
- **src/Context**: Contains context providers for managing global state.
- **src/Pages**: Contains the main pages of the application.
- **src/Styles**: Contains the CSS files for styling the application.
- **src/hooks**: Contains custom hooks used in the application.
- **public**: Contains static assets like the `index.html` file.

## Acknowledgements

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather and AQI data.
- [React](https://reactjs.org/) for the powerful UI library.
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework.
- [Recharts](https://recharts.org/) for the charting library.
- [Swiper](https://swiperjs.com/) for the touch slider.
