import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";
// import required modules
import { Autoplay, Pagination } from "swiper";
import page1 from '../../assets/page1.png'
import page2 from '../../assets/page2.png'

function Slider() {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Autoplay, Pagination]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={page1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={page2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={page1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={page2} alt="" />
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider