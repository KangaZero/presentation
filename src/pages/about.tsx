import { motion } from "framer-motion";

export interface aboutProps {}

const About: React.FC<aboutProps> = ({}: aboutProps) => {
  return (
  <motion.div
  initial="initial" 
  animate="enter" 
  exit="exit" 
  variants={{ exit: { transition: { staggerChildren: 0.1 } } }} >
    <motion.h1>
        About
        </motion.h1>

  </motion.div>
  )
};

export default About;
