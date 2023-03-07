import { motion } from "framer-motion";
import { fadeIn, parentVariants, childVariants } from "../utils/motion";

export interface aboutProps {}

const About: React.FC<aboutProps> = ({}: aboutProps) => {
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
        <motion.div className="about-body-container">
            <motion.div className="about-body-container-left">
                <motion.div className="about-body-container-left-image">
                    <motion.img src="https://images.unsplash.com/photo-1616161610003-8b5f9b5b1b1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="profile"/>
                </motion.div>
                <motion.div className="about-body-container-left-text">
                    <motion.h1 className="about-body-container-left-text-title">About Me</motion.h1>
                    <motion.p className="about-b
                    ody-container-left
                    -text-paragraph">

                    </motion.p>
                </motion.div>
            </motion.div>
            <motion.div className="about-body-container-right">
                <motion.div className="about-body-container-right-text">
                    <motion.h1 className="about-body-container-right-text-title">About Me</motion.h1>
                    <motion.p className="about-body-container-right-text-paragraph">

                    </motion.p>
                </motion.div>
                <motion.div className="about-body-container-right-image">
                    <motion.img src="https://images.unsplash.com/photo-1616161610003-8b5f9b5b1b1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="profile"/>
                </motion.div>
            </motion.div>
        </motion.div>

      </motion.body>

    </motion.div>
  );
};

export default About;
