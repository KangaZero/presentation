/* eslint-disable prefer-const */
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn, parentVariants, childVariants } from "../utils/motion";
import {
  SiTypescript,
  SiReact,
  SiSass,
  SiNextdotjs,
  SiTailwindcss,
  SiJquery,
} from "react-icons/si";
import Spacebar from "@/components/Spacebar";
class TextScramble {
  private el: HTMLElement;
  private chars: string;
  private resolve!: () => void;
  private queue: {
    from: string;
    to: string;
    start: number;
    end: number;
    char?: string;
  }[] = [];
  private frame = 0;
  private frameRequest = 0;

  constructor(el: HTMLElement) {
    this.el = el;
    this.chars = "¼½â€”ï¼�+ï¼Šï¼";
    this.update = this.update.bind(this);
  }

  setText(newText: string) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise<void>((resolve) => (this.resolve = resolve));
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  update() {
    let output = "";
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

const End = () => {
  const [textScramble, setTextScramble] = useState<TextScramble | null>(null);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const phrases = ["ご清聴ありがとうございました", "Thank you"];

    if (textScramble) {
      const next = () => {
        textScramble.setText(phrases[counter]).then(() => {
          setTimeout(() => {
            setCounter((counter + 1) % phrases.length);
          }, 3500);
        });
      };

      next();
    }
  }, [textScramble, counter]);

  useEffect(() => {
    const el = document.querySelector<HTMLElement>(".end-text");
    if (el) {
      setTextScramble(new TextScramble(el));
    }
  }, []);

  return (
    <motion.div
      className="start-bg"
      initial="initial"
      animate="enter"
      exit="exit"
      variants={parentVariants}
    >
      <motion.div
        className="end-tools-container"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={childVariants}
      >
        <motion.h1
          className="end-tools-title"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          variants={fadeIn("down", "tween", 1, 0.5)}
        >
          こちらのアプリは以下のツールで作成されました
        </motion.h1>
        <motion.div
          className="end-tools-inner-container"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          variants={fadeIn("down", "tween", 1, 0.5)}
        >
          <SiTypescript size={35} />
          <span className="custom-hidden">hi</span>

          <SiReact size={35} />
          <span className="custom-hidden">hi</span>

          <SiSass size={35} />
          <span className="custom-hidden">hi</span>

          <SiNextdotjs size={35} />
          <span className="custom-hidden">hi</span>

          <SiTailwindcss size={35} />
          <span className="custom-hidden">hi</span>

          <SiJquery size={35} />
        </motion.div>
      </motion.div>
      <motion.div
        className="end-body end-container"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={childVariants}
      >
        <div className="end-text"></div>
      </motion.div>
      <div className="end-inner">
        <Spacebar />
      </div>
    </motion.div>
  );
};

export default End;
