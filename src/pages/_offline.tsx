/* eslint-disable prefer-const */
import React, { useState, useEffect } from "react";

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

const Offline = () => {
  const [textScramble, setTextScramble] = useState<TextScramble | null>(null);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const phrases = ["オフラインでございます。", "You are currently offline."];

    if (textScramble) {
      const next = () => {
        textScramble.setText(phrases[counter]).then(() => {
          setTimeout(() => {
            setCounter((counter + 1) % phrases.length);
          }, 2500);
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
    <div className="start-bg">
      <div className="end-body end-container">
        <div className="end-text"></div>
      </div>
    </div>
  );
};

export default Offline;
