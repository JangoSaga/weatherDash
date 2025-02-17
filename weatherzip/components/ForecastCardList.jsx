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
    <div className="w-full col-span-3 p-4 flex flex-col gap-2">
      <h2 className="text-2xl font-semibold text-center mb-1">Forecast list</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]} // Include Navigation module
        navigation={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={5000}
        spaceBetween={15} // Space between slides
        slidesPerView={4} // Shows 3 slides at a time
        loop={true} // Enables infinite looping
        freeMode={true} // Allows smooth scrolling
        breakpoints={{
          640: { slidesPerView: 2 }, // Show 2 slides on small screens
          1024: { slidesPerView: 3 }, // Show 3 slides on medium screens
          1280: { slidesPerView: 4 }, // Show 4 slides on larger screens
        }}
        className="grow-1 w-full"
      >
        {forecast.map((day, index) => (
          <SwiperSlide
            key={index}
            className="p-2 flex flex-col items-center justify-center gap-2"
          >
            <ForecastCard day={day} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ForecastCardList;
