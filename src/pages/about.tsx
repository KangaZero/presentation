import { motion } from "framer-motion";
import { fadeIn, parentVariants, childVariants } from "../utils/motion";

export interface aboutProps {}

const About: React.FC<aboutProps> = ({}: aboutProps) => {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={parentVariants}
      className="start-body start-bg"
    >
      <motion.h1>About</motion.h1>
    </motion.div>
  );
};

export default About;
