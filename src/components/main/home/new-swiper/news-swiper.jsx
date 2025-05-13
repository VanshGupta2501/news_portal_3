import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "components/main/home/new-swiper/NewSwiper.css";
import data from "/src/constants/context/hn.json";

const NewSwiper = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const slides = data.swiper || [];

  return (
    <div className="w-full flex justify-center items-center h-[550px] relative">
      <button
        ref={prevRef}
        className="custom-swiper-button swiper-button-prev"
      ></button>
      <button
        ref={nextRef}
        className="custom-swiper-button swiper-button-next"
      ></button>

      <div className="w-full h-[90%] my-10 flex flex-col medium:w-[85%]">
        <Swiper
          spaceBetween={20}
          centeredSlides={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper w-[90%]"
        >
          {slides.map((item, index) => (
            <SwiperSlide
              key={index}
              className="swiper-slide-content flex flex-col medium:flex-row items-center medium:gap-20 gap-6 p-4"
            >
              <img
                className="slide-img w-full max-w-[500px] h-[260px] medium:h-[400px] object-cover rounded-2xl"
                src={item.image}
                alt="news"
              />
              <div className="swiper-context flex flex-col gap-3 text-left max-w-[600px]">
                <p className="slide-time text-sm medium:text-base text-gray-600">{item.time}</p>
                <h1 className="slide-heading text-xl medium:text-4xl tracking-wide font-semibold leading-snug medium:leading-[40px]">
                  {item.heading}
                </h1>
                <p className="slide-desc text-base medium:text-xl text-gray-700">{item.context}</p>
                <p className="slide-type text-red-500 font-medium text-base medium:text-xl">
                  {item.newsType}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default NewSwiper;
