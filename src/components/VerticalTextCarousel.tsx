import { useEffect } from "react";
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
