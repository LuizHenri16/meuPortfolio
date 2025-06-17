"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const pages = [
  { name: "java", id: "1" },
  { name: "mysql", id: "2" },
  { name: "frontend", id: "3" },
  { name: "backend", id: "4" },
];

export const MySwiper: React.FC = () => {
  return (
    <>
      <Swiper
        centeredSlides={true}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
      >
        {pages.map((page) => (
          <SwiperSlide
            className="flex justify-center w-auto m-w-[100%]"
            key={page.id}
          >
            <a>{page.id}</a>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
