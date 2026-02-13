import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const wordsArray = ["", "stractic ", "design", "on", "demand."];

const Preloader = () => {
  const word = useRef(null);

  const [loaderdone, setLoaderdone] = useState(false);

  for (let i = 0; i < wordsArray.length; i++) {
    setTimeout(() => {
      if (word.current) {
        word.current.textContent = wordsArray[i];
      }
    }, i * 500);

    if (i === wordsArray.length - 1) {
      setTimeout(() => {
        setLoaderdone(true);
      }, i * 500 + 200);
    }
  }

  return (
    <motion.section
      initial={{ y: 0 }}
      animate={{ y: loaderdone ? "-100%" : 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="loader-container fixed z-1000 top-0 left-0 capitalize w-full h-screen flex flex-col justify-center items-center bg-black font-poppins text-white text-8xl"
    >
      <div className="w-full  h-2/15 flex flex-col justify-start items-center  ">
        <h1
          ref={word}
          className="word font-normal font-poppins tracking-tight "
        ></h1>
      </div>
    </motion.section>
  );
};

export default Preloader;
