import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import {
  slideIn,
  fadeIn,
  parentVariants,
  childVariants,
} from "../utils/motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper";
import projectDetails from "@/constants/projectDetails";
import Image from "next/image";

const SwiperCarousel = () => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    variants={fadeIn("down", "tween", 0.3, 0.5)}
  >
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
      //   pagination={true}
      navigation={true}
      modules={[Navigation, Autoplay, EffectCoverflow]}
      className="mySwiper"
    >
      {projectDetails.map((project, index) => (
        <SwiperSlide key={index}>
          <h1>{project.title}</h1>
          <Image width={600} height={300} alt={project.description} src={project.url} />
          <p className="image-carousel-text">{project.description}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  </motion.div>
);

export default SwiperCarousel;
