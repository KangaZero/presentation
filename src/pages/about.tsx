/* eslint-disable react/react-in-jsx-scope */
import { motion } from "framer-motion";
import {
  slideIn,
  fadeIn,
  parentVariants,
  childVariants,
} from "../utils/motion";

import { FaRegWindowMaximize } from "react-icons/fa";
import { GiGrandPiano, GiJapan } from "react-icons/gi";
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
import ThreeDButton from "@/components/ThreeDButton";
import Usyd from "../../public/usyd.svg";
import Image from "next/image";

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
          <ThreeDButton text="プロジェクト" link="/projects" />
          <ThreeDButton text="ホーム" link="/" />
        </motion.div>
      </motion.div>
      {/* about-body */}
      <motion.div
        className="about-body"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={childVariants}
      >
        <motion.div className="about-container">
          <motion.div className="skill-container">
            <motion.h1
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              variants={fadeIn("down", "tween", 1, 0.5)}
              className="skill-text"
            >
              スキル
            </motion.h1>
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
                <SiTypescript size={25} />
                <span className="custom-hidden">hi</span>

                <SiJavascript size={25} />
                <span className="custom-hidden">hi</span>

                <SiPython size={25} />
                <span className="custom-hidden">hi</span>

                <SiHtml5 size={25} />
                <span className="custom-hidden">hi</span>

                <SiCss3 size={25} />
                <span className="custom-hidden">hi</span>

                <FaRegWindowMaximize size={25} />
              </motion.div>
            </motion.div>
            <motion.div className="skill-icons-container">
              <motion.h2
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                variants={slideIn("right", "tween", 1, 0.5)}
              >
                データベース言語
              </motion.h2>
              <div className="divider"></div>

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                variants={slideIn("right", "tween", 1, 0.5)}
                className="icons-container"
              >
                <SiMysql size={25} />
                <span className="custom-hidden">hi</span>
                <SiMongodb size={25} />
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
                <SiReact size={25} />
                <span className="custom-hidden">hi</span>

                <SiJquery size={25} />
                <span className="custom-hidden">hi</span>

                <SiNextdotjs size={25} />
                <span className="custom-hidden">hi</span>

                <SiTailwindcss size={25} />
                <span className="custom-hidden">hi</span>

                <SiChakraui size={25} />
                <span className="custom-hidden">hi</span>

                <SiBootstrap size={25} />
                <span className="custom-hidden">hi</span>

                <SiSass size={25} />
                <span className="custom-hidden">hi</span>

                <SiGraphql size={25} />
                <span className="custom-hidden">hi</span>

                <SiSvg size={25} />
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
                <SiExpress size={25} />
                <span className="custom-hidden">hi</span>
                <SiApollographql size={25} />
                <span className="custom-hidden">hi</span>
                <SiPrisma size={25} />
                <span className="custom-hidden">hi</span>
                <SiJest size={25} />
                <span className="custom-hidden">hi</span>
                <SiNodedotjs size={25} />
                <span className="custom-hidden">hi</span>
                <SiWebpack size={25} />
                <span className="custom-hidden">hi</span>
                <SiFlask size={25} />
                <span className="custom-hidden">hi</span>
                <SiTensorflow size={25} />
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
            <motion.h1
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              variants={fadeIn("down", "tween", 1, 0.5)}
              className="skill-text"
            >
              学歴
            </motion.h1>
            <motion.div className="skill-icons-container">
              <motion.h2
                className="skill-sub-text"
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                variants={fadeIn("up", "tween", 0.6, 0.5)}
              >
                フルスタックウェブ開発証明書
              </motion.h2>
              <div className="divider"></div>
              <motion.h3
                className="skill-sub-text"
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                variants={fadeIn("right", "tween", 0.6, 0.5)}
              >
                「２０２２年・７月 ～ ２０２３年・1月」
              </motion.h3>
              <motion.h2
                className="skill-sub-text"
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                variants={fadeIn("down", "tween", 0.6, 0.5)}
              >
                教養学部 <GiGrandPiano size={25} /> <GiJapan size={25} />
              </motion.h2>
              <div className="divider"></div>
              <motion.h3
                className="skill-sub-text"
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                variants={fadeIn("left", "tween", 0.6, 0.5)}
              >
                「２０１９年・1月 ～ ２０２２年・７月」
              </motion.h3>
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                variants={slideIn("right", "tween", 1, 0.5)}
                className="icons-container"
              >
                <Image src={Usyd} alt="Usyd logo" width={150} height={80} />
              </motion.div>
            </motion.div>
            <motion.h1
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              variants={fadeIn("down", "tween", 1, 0.5)}
              className="skill-text"
            >
              職歴
            </motion.h1>
            <motion.div className="skill-icons-container">
              <motion.h2
                className="skill-sub-text"
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                variants={fadeIn("down", "tween", 0.6, 0.5)}
              >
                ピアノ家庭教師 <GiGrandPiano size={25} />
              </motion.h2>
              <motion.h3
                className="skill-sub-text"
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                variants={fadeIn("left", "tween", 0.6, 0.5)}
              >
                「２０１９年 ～ 現在」
              </motion.h3>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
