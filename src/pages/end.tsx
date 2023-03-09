import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  slideIn,
  fadeIn,
  parentVariants,
  childVariants,
} from "../utils/motion";

const End = () => {
    const textRef = useRef<HTMLDivElement>(null);
  function decodeText() {
    const text = textRef.current;
    const state: number[] = [];

    while (text) {
    for (let i = 0, j = text.children.length; i < j; i++) {
      text.children[i].classList.remove("state-1", "state-2", "state-3");
      state[i] = i;
    }
    const shuffled = shuffle(state);

    for (let i = 0, j = shuffled.length; i < j; i++) {
      const child = text.children[shuffled[i]] as HTMLElement;
      const classes = child.classList;

      const state1Time = Math.round(Math.random() * (2000 - 300)) + 50;
      if (classes.contains("text-animation")) {
        setTimeout(firstStages.bind(null, child), state1Time);
      }
    }
} 
  }

  function firstStages(child: HTMLElement) {
    if (child.classList.contains("state-2")) {
      child.classList.add("state-3");
    } else if (child.classList.contains("state-1")) {
      child.classList.add("state-2");
    } else if (!child.classList.contains("state-1")) {
      child.classList.add("state-1");
      setTimeout(secondStages.bind(null, child), 100);
    }
  }
  function secondStages(child: HTMLElement) {
    if (child.classList.contains("state-1")) {
      child.classList.add("state-2");
      setTimeout(thirdStages.bind(null, child), 100);
    } else if (!child.classList.contains("state-1")) {
      child.classList.add("state-1");
    }
  }
  function thirdStages(child: HTMLElement) {
    if (child.classList.contains("state-2")) {
      child.classList.add("state-3");
    }
  }

  function shuffle(array: number[]) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  decodeText();

  //    setInterval(function () { decodeText(); },10000);

  useEffect(() => {
    decodeText();
    // beware: refresh button can overlap this timer and cause state mixups
    const interval = setInterval(() => {
      decodeText();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="end-body"
      initial="initial"
      animate="enter"
      exit="exit"
      variants={parentVariants}
    >
      <motion.div
        className="decode-text"
        ref={textRef}
        initial="initial"
        animate="enter"
        exit="exit"
        variants={childVariants}
      >
        <div className="text-animation">ご</div>
        <div className="text-animation">清</div>
        <div className="text-animation">聴</div>

        <div className="space"></div>

        <div className="text-animation">あ</div>
        <div className="text-animation">り</div>
        <div className="text-animation">が</div>
        <div className="text-animation">と</div>
        <div className="text-animation">う</div>
        <div className="text-animation">ご</div>
        <div className="text-animation">ざ</div>
        <div className="text-animation">い</div>
        <div className="text-animation">ま</div>
        <div className="text-animation">し</div>
        <div className="text-animation">た</div>
      </motion.div>
    </motion.div>
  );
};

export default End;
