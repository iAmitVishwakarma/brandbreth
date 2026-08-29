import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const wordsArray = ["", "strategic", "design", "on", "demand."];

const Preloader = () => {
  const word = useRef(null);
  const [loaderdone, setLoaderdone] = useState(false);

  useEffect(() => {
    const timeouts = [];

    wordsArray.forEach((w, i) => {
      const t1 = setTimeout(() => {
        if (word.current) {
          word.current.textContent = w;
        }
      }, i * 400);
      timeouts.push(t1);

      if (i === wordsArray.length - 1) {
        const t2 = setTimeout(() => {
          setLoaderdone(true);
        }, i * 400 + 300);
        timeouts.push(t2);
      }
    });

    return () => timeouts.forEach((t) => clearTimeout(t));
  }, []);

  return (
    <motion.section
      initial={{ y: 0 }}
      animate={{ y: loaderdone ? "-100%" : 0 }}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      className={`loader-container fixed z-[1000] top-0 left-0 capitalize w-full h-screen flex flex-col justify-center items-center bg-black font-poppins text-white text-4xl sm:text-6xl md:text-8xl ${
        loaderdone ? "pointer-events-none" : ""
      }`}
    >
      <div className="w-full h-2/15 flex flex-col justify-center items-center px-4 text-center">
        <h1
          ref={word}
          className="word font-normal font-poppins tracking-tight"
        ></h1>
      </div>
    </motion.section>
  );
};

export default Preloader;
