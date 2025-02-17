import { useWeather } from "../Context/WeatherProvider";
import ForecastCard from "./ForecastCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

function ForecastCardList() {
  const { forecast } = useWeather();
  if (!forecast || forecast.length === 0) return null; // Prevent rendering issues

  return (
    <div className="w-full h-full col-span-3 p-4 flex flex-col gap-4 bg-black text-green-300 border-2 border-green-500 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold uppercase text-center border-b-2 border-green-500 pb-2">
        Forecast List
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1200}
        spaceBetween={30} // Increased spacing
        slidesPerView={1}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
          1280: { slidesPerView: 2 },
        }}
        className="w-full h-full"
      >
        {forecast.map((day, index) => (
          <SwiperSlide key={index}>
            <ForecastCard day={day} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ForecastCardList;
