import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./slider.css"; 


import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";
import img4 from "../../images/img4.jpg";
import img5 from "../../images/img5.jpg";
import img6 from "../../images/img6.jpg";

const slides = [
  { id: 1, title: "Rectangle", img: img1, shape: "rectangle" },
  { id: 2, title: "Square", img: img2, shape: "square" },
  { id: 3, title: "Circle", img: img3, shape: "circle" },
  { id: 4, title: "Rectangle", img: img4, shape: "rectangle" },
  { id: 5, title: "Square", img: img5, shape: "square" },
  { id: 6, title: "Circle", img: img6, shape: "circle" },
];

 

export default function ShapeSlider() {

  return (
    <div className="w-full py-20">
      <Swiper
        modules={[Autoplay]}
        loop={false}
        speed={4000}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        slidesPerView={3}
        spaceBetween={20}
        grabCursor={true}
        className="infinite-swiper"
        breakpoints={{
          1280: { slidesPerView: 3 },
          1024: { slidesPerView: 2 },
          640: { slidesPerView: 1 },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div
              className={`tilt-card cursor-pointer group`}
              onClick={(e) => {
                e.currentTarget.classList.toggle("rotate-3d");
              }}
            >
              <img
                src={slide.img}
                alt={slide.title}
                className={`tilt-image  ${
                  slide.shape === "circle"
                    ? "rounded-full"
                    : slide.shape === "square"
                    ? "rounded-md"
                    : ""
                }`}
              />
              {/* <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-2 rounded shadow">
                Click Me
              </button> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
