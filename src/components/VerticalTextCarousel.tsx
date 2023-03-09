// "use client";
// import { useState, useEffect } from "react";

// export interface carouselProps {
//   texts: string[];
//   interval?: number;
// }

// const VerticalTextCarousel: React.FC<carouselProps> = ({
//   texts,
//   interval = 500,
// }) => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIndex((index + 1) % texts.length);
//     }, interval);
//     return () => clearTimeout(timer);
//   }, [index, interval, texts.length]);

//   return (
//     <div style={{ height: "2em", overflow: "hidden" }}>
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           height: "200%",
//         }}
//       >
//         {texts.map((text: string, i: number) => (
//           <div
//             key={i}
//             style={{
//               transform: `translateY(-${index * 100}%)`,
//               transition: "transform 1s",
//             }}
//           >
//             <span>{text}</span>
//             <span className="custom-hidden">hi</span>
//             <span className="custom-hidden">hi</span>

//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VerticalTextCarousel;

import { useEffect, useState } from "react";
import { TimelineMax, Elastic } from "gsap";

type CarouselProps = {
  items: string[];
  duration?: number;
};

const VerticalTextCarousel: React.FC<CarouselProps> = ({
  items,
  duration = 10,
}) => {
//   const [currentItemIndex, setCurrentItemIndex] = useState(0);

  useEffect(() => {
    const vsOpts = {
      $slides: document.querySelectorAll(".v-slide"),
      $list: document.querySelector(".v-slides"),
      duration: duration,
      lineHeight: 50,
    };

    const vSlide = new TimelineMax({
      paused: true,
      repeat: -1,
    });

    vsOpts.$slides.forEach((slide, i) => {
      vSlide.to(vsOpts.$list, vsOpts.duration / vsOpts.$slides.length, {
        y: i * -1 * vsOpts.lineHeight,
        ease: Elastic.easeOut.config(1, 0.4),
      });
    });

    vSlide.play();

    return () => {
      vSlide.kill();
    };
  }, []);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentItemIndex((currentIndex) =>
//         currentIndex === items.length - 1 ? 0 : currentIndex + 1
//       );
//     }, duration);
//     return () => clearInterval(intervalId);
//   }, [items.length, duration]);

  return (
    <div className="container">
      <div className="row">
        <div className="v-slider-frame col-sm-3 offset-sm-3">
          <ul className="v-slides">
            {items.map((item) => (
              <li className="v-slide" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VerticalTextCarousel;
