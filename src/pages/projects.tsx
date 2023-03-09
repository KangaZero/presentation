import { motion } from "framer-motion";
import {
  slideIn,
  fadeIn,
  parentVariants,
  childVariants,
} from "../utils/motion";
import ThreeDButton from "@/components/ThreeDButton";
import SwiperCarousel from "@/components/SwiperCarousel";

const Projects = () => {
  return (
    <motion.div
      className="start-bg"
      initial="initial"
      animate="enter"
      exit="exit"
      variants={parentVariants}
    >
      {/* project-head */}
      <motion.div
        className="about-heading"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={childVariants}
      >
        <motion.h1
          initial="initial"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          variants={fadeIn("down", "tween", 0.3, 0.5)}
          className="about-title"
        >
          ファイナル・プロジェクト
        </motion.h1>

        <motion.div className="about-heading-button-container">
          <ThreeDButton text="終わり" link="/end" />
          <ThreeDButton text="ホーム" link="/" />
        </motion.div>
      </motion.div>
      {/* project-body */}
      <motion.div className="image-carousel-body">
        <motion.h1>Yo</motion.h1>
        <SwiperCarousel />
      </motion.div>
      <motion.div>
        hi
      </motion.div>
    </motion.div>
  );
};

export default Projects;
