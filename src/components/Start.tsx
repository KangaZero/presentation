"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";

import { fadeIn, parentVariants, childVariants } from "../utils/motion";
import Link from "next/link";
// import { TitleText } from './TypingText';

export interface startProps {
  firstName: string;
  firstNameJp: string;
  lastName: string;
  lastNameJp: string;
  title: string;
  titleJp: string;
  subTitle: string;
  subTitleJp: string;
}

const Start: React.FC<startProps> = ({
  firstName,
  firstNameJp,
  lastName,
  lastNameJp,
  title,
  titleJp,
  subTitle,
  subTitleJp,
}) => {
    useEffect(() => {
      const typed = new Typed(".start-button-text", {
        strings: ["Start", "開始"],
        typeSpeed: 40,
        backSpeed: 40,
        loop: true,
        loopCount: Infinity,
        showCursor: false,
        backDelay: 3000,
        startDelay: 3000,
      });
    }, [title]);

  return (
    <motion.div
    initial="initial" 
    animate="enter" 
    exit="exit" 
    variants={parentVariants}
    className="start-body start-bg"
    >
    <div className="divider" />
    <motion.div
      animate="enter"
      exit="exit"
      initial="hidden"
      whileInView="show"
      variants={childVariants}
      viewport={{ once: false, amount: 0.25 }}
    >
      <motion.ul className="Words" variants={fadeIn("down", "tween", 0.3, 3)}>
        <li className="Words-line">
          <p>&nbsp;</p>
          <p>{title}</p>
        </li>
        <li className="Words-line">
          <p>{titleJp}</p>
          <p>{subTitle}</p>
        </li>
        <li className="Words-line">
          <p>{subTitleJp}</p>
          <p>BY</p>
        </li>
        <li className="Words-line">
          <p>BY</p>
        </li>
        <li className="Words-line">
          <p>{firstNameJp}</p>
          <p>{firstName}</p>
        </li>
        <li className="Words-line">
          <p>{lastNameJp}</p>
          <p>{lastName}</p>
        </li>
        <li className="Words-line">
          <p>&nbsp;</p>
        </li>
      </motion.ul>
    </motion.div>
    <motion.button
         className="start-button"
         variants={fadeIn("up", "tween", 0.3, 3)}
         initial="hidden"
         whileInView="show"
         viewport={{ once: false, amount: 0.25 }}>
            <Link href='/about'>
                <span className="start-button-text"></span>
            </Link>

    </motion.button>
    </motion.div>
  );
};

export default Start;
