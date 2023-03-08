import VerticalTextCarousel from "@/components/VerticalTextCarousel";
import { motion } from "framer-motion";
import { fadeIn, parentVariants, childVariants } from "../utils/motion";
import roles from "../constants/roles";
import profile from "../constants/profile";
import { FaRegWindowMaximize } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPython,
  SiTypescript,
  SiMysql,
  SiMongodb,
  SiReact,
  SiJquery,
  SiNextdotjs,
  SiTailwindcss,
  SiChakraui,
  SiBootstrap,
  SiSass,
  SiGraphql,
  SiSvg,
} from "react-icons/si";

import profileCard from "@/components/profileCard";
import ProfileCard from "@/components/profileCard";

// export interface aboutProps {
//     roles: roleProps[];
// }

const About = () => {
  return (
    <motion.div
      className="start-bg"
      initial="initial"
      animate="enter"
      exit="exit"
      variants={parentVariants}
    >
      {/* about-head */}
      <motion.div
        className="about-heading"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={childVariants}
      >
        <motion.h1
          //   initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          variants={fadeIn("down", "tween", 0.3, 0.5)}
          className="about-title"
        >
          About
        </motion.h1>
        {/* <VerticalTextCarousel roles={roles} /> */}
        <div className="about-heading-button-container">
          <motion.button className="return-button">Return</motion.button>
          <motion.button className="next-button">Next</motion.button>
        </div>
      </motion.div>
      {/* about-body */}
      <motion.body
        className="about-body"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={childVariants}
      >
        <motion.div className="about-container">
          <motion.div className="skill-container">
            <motion.h1 className="skill-text">スキル</motion.h1>
            <motion.div className="skill-icons-container">
              <h2>プログラミング言語</h2>
              <div className="icons-container">
                <SiTypescript size={48} />
                <span className="custom-hidden">hi</span>

                <SiJavascript size={48} />
                <span className="custom-hidden">hi</span>

                <SiPython size={48} />
                <span className="custom-hidden">hi</span>

                <SiHtml5 size={48} />
                <span className="custom-hidden">hi</span>

                <SiCss3 size={48} />
                <span className="custom-hidden">hi</span>

                <FaRegWindowMaximize size={48} />
              </div>
            </motion.div>
            <motion.div className="skill-icons-container">
              <h2>データベース言語</h2>
              <div className="icons-container">
                <SiMysql size={40} />
                <span className="custom-hidden">hi</span>
                <SiMongodb size={40} />
                <span className="custom-hidden">hi</span>
                <SiGraphql size={40} />
              </div>
            </motion.div>
            <motion.div className="skill-icons-container">
              <h2>フロントエンド</h2>
              <div className="icons-container">
                <SiReact size={40} />
                <span className="custom-hidden">hi</span>

                <SiJquery size={40} />
                <span className="custom-hidden">hi</span>

                <SiNextdotjs size={40} />
                <span className="custom-hidden">hi</span>

                <SiTailwindcss size={40} />
                <span className="custom-hidden">hi</span>

                <SiChakraui size={40} />
                <span className="custom-hidden">hi</span>

                <SiBootstrap size={40} />
                <span className="custom-hidden">hi</span>

                <SiSass size={40} />
                <span className="custom-hidden">hi</span>

                <SiGraphql size={40} />
                <span className="custom-hidden">hi</span>

                <SiSvg size={40} />
              </div>
            </motion.div>
            <motion.div className="skill-icons-container">
              <h2>バックエンド</h2>
              <div className="icons-container">
                {/* Add React, jquery, NextJs, Tailwind, ChakraUI, Bootstrap, SCSS, graphql, svg */}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div className="about-container">
            <ProfileCard name={profile.name} />
        </motion.div>
        <motion.div className="about-container">hi</motion.div>
      </motion.body>
    </motion.div>
  );
};

export default About;
