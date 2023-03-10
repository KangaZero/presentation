/* eslint-disable react/react-in-jsx-scope */
import { motion } from "framer-motion";
import {
  slideIn,
  fadeIn,
  parentVariants,
  childVariants,
} from "../utils/motion";
import ThreeDButton from "../../ThreeDButton";
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
          viewport={{ once: true, amount: 0.25 }}
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
      <motion.div
        className="project-details-body"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={childVariants}
      >
        <motion.h1
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeIn("down", "tween", 1, 0.5)}
        >
          概要
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={slideIn("up", "tween", 1, 0.5)}
        >
          PetNannyは、ペットの飼い主がペットを預けることができるサービスです。
          3人のグループで、ペットの飼い主が休暇中にペットを預ける場所を探している需要に応えるため、フルスタックのWebアプリケーションを作成しました。
        </motion.p>
        <motion.h1
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeIn("down", "tween", 1, 0.5)}
        >
          担当業務
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={slideIn("up", "tween", 1, 0.5)}
        >
          バックエンドの骨格の作成で、シード、モデル、スキーマ、クエリ、ミューテーションを含みます。
          データの入れ物ややり取りの手順を考えたり、ユーザーが使うページを作ります。例えば、ユーザーが自分の情報を見たり更新したりするためのページを作ります。
        </motion.p>
      </motion.div>
      {/* project-body */}
      <motion.div className="image-carousel-body">
        <motion.h1
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeIn("up", "tween", 1, 0.5)}
        >
          PetNanny
        </motion.h1>
        <motion.h1
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeIn("up", "tween", 1, 0.5)}
        >
          Eーコマース・フルスタック・ウエブアプリ
        </motion.h1>
        <SwiperCarousel />
      </motion.div>
    </motion.div>
  );
};

export default Projects;
