"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { parentVariants } from "../utils/motion";

export interface ThreeDButtonProps {
  text: string;
  link: string;
}

const ThreeDButton: React.FC<ThreeDButtonProps> = ({ text, link }) => {
  return (
    <Link href={link}>
      <motion.button
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={parentVariants}
        type="button"
        className="three-d-btn cube cube-hover"
      >
        <div className="bg-top">
          <div className="bg-inner"></div>
        </div>
        <div className="bg-right">
          <div className="bg-inner"></div>
        </div>
        <div className="bg">
          <div className="bg-inner"></div>
        </div>
        <div className="text">{text}</div>
      </motion.button>
    </Link>
  );
};
export default ThreeDButton;
