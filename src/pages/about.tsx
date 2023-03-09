import { motion } from "framer-motion";
import {
  slideIn,
  fadeIn,
  parentVariants,
  childVariants,
} from "../utils/motion";

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
  SiExpress,
  SiApollographql,
  SiJest,
  SiNodedotjs,
  SiWebpack,
  SiFlask,
  SiTensorflow,
  SiPrisma,
} from "react-icons/si";
import roles from "../constants/roles";
import profile from "../constants/profile";
import VerticalTextCarousel from "@/components/VerticalTextCarousel";
import ProfileCard from "@/components/profileCard";
import Link from "next/link";

// export interface aboutProps {
//     roles: roleProps[];
// }

const About = () => {
  return (
    <motion.body
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
          initial="initial"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          variants={fadeIn("down", "tween", 0.3, 0.5)}
          className="about-title"
        >
          About
          <span className="custom-hidden">hi</span>
          <VerticalTextCarousel items={roles} />
        </motion.h1>

        <motion.div className="about-heading-button-container">
          <Link href="/projects">
            <motion.button
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              variants={fadeIn("up", "tween", 0.5, 0.5)}
              className="next-button"
            >
              Next
            </motion.button>
          </Link>
          <Link href="/">
            <motion.button
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              variants={fadeIn("up", "tween", 0.5, 0.5)}
              className="return-button"
            >
              Return
            </motion.button>
          </Link>
        </motion.div>
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
              <motion.h2
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                variants={fadeIn("down", "tween", 0.6, 0.5)}
              >
                プログラミング言語
              </motion.h2>
              <div className="divider"></div>
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                variants={slideIn("right", "tween", 1, 0.5)}
                className="icons-container"
              >
                <SiTypescript size={40} />
                <span className="custom-hidden">hi</span>

                <SiJavascript size={40} />
                <span className="custom-hidden">hi</span>

                <SiPython size={40} />
                <span className="custom-hidden">hi</span>

                <SiHtml5 size={40} />
                <span className="custom-hidden">hi</span>

                <SiCss3 size={40} />
                <span className="custom-hidden">hi</span>

                <FaRegWindowMaximize size={40} />
              </motion.div>
            </motion.div>
            <motion.div className="skill-icons-container">
              <motion.h2 whileInView="show">データベース言語</motion.h2>
              <div className="divider"></div>

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                variants={slideIn("right", "tween", 1, 0.5)}
                className="icons-container"
              >
                <SiMysql size={40} />
                <span className="custom-hidden">hi</span>
                <SiMongodb size={40} />
              </motion.div>
            </motion.div>
            <motion.div className="skill-icons-container">
              <motion.h2
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                variants={fadeIn("down", "tween", 0.6, 0.5)}
              >
                フロントエンド
              </motion.h2>
              <div className="divider"></div>

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                variants={slideIn("right", "tween", 1, 0.5)}
                className="icons-container"
              >
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
              </motion.div>
            </motion.div>
            <motion.div className="skill-icons-container">
              <motion.h2
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                variants={fadeIn("down", "tween", 0.6, 0.5)}
              >
                バックエンド
              </motion.h2>
              <div className="divider"></div>

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                variants={slideIn("right", "tween", 1, 0.5)}
                className="icons-container"
              >
                <SiExpress size={40} />
                <span className="custom-hidden">hi</span>
                <SiApollographql size={40} />
                <span className="custom-hidden">hi</span>
                <SiPrisma size={40} />
                <span className="custom-hidden">hi</span>
                <SiJest size={40} />
                <span className="custom-hidden">hi</span>
                <SiNodedotjs size={40} />
                <span className="custom-hidden">hi</span>
                <SiWebpack size={40} />
                <span className="custom-hidden">hi</span>
                <SiFlask size={40} />
                <span className="custom-hidden">hi</span>
                <SiTensorflow size={40} />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        {/* middle body */}
        <motion.div className="about-container">
          <ProfileCard name={profile.name} />
        </motion.div>
        {/* right body */}
        <motion.div className="about-container">
          <motion.div className="skill-container">
            <motion.h1 className="skill-text">趣味</motion.h1>
            <motion.div className="skill-icons-container">
              <motion.h2
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                variants={fadeIn("down", "tween", 0.6, 0.5)}
              >
                プログラミング
              </motion.h2>
              <div className="divider"></div>
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                variants={slideIn("right", "tween", 1, 0.5)}
                className="icons-container"
              >
                <SiTypescript size={40} />
                <span className="custom-hidden">hi</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.body>
    </motion.body>
  );
};

export default About;
