import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper";

import projectDetails from "@/constants/projectDetails";


const SwiperCarousel = () => (
  <div>
    <Swiper
      effect={"coverflow"}
      speed={2000}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      autoplay={{
        delay: 30000,
        disableOnInteraction: false,
      }}
      pagination={true}
      navigation={true}
      modules={[Navigation, Autoplay, EffectCoverflow, Pagination]}
      className="mySwiper"
    >

      {projectDetails.map((project, index) => (
        <SwiperSlide key={index}>
          <h1>{project.title}</h1>
          <img src={project.url} />
          <p>{project.description}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default SwiperCarousel;
