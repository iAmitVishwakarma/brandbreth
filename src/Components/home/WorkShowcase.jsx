import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const WorkShowcase = () => {
  const scrollContainer = useRef(null);
  const openCloseElem = useRef(null);
  const revealText1 = useRef(null);
  const revealText2 = useRef(null);
  const scrollImgSection = useRef(null);
  const buttonRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scrollContainer.current,
          start: "top top",
          end: "420% top",
          scrub: true,
          pin: true,
        },
      });

      tl.to(buttonRef.current, {
        bottom: "5%",
        duration: 2,
      });

      tl.to(
        openCloseElem.current,
        {
          height: "60%",
          duration: 5,
        },
        "a"
      );

      tl.to(
        revealText1.current,
        {
          left: "0%",
          translateX: "-10%",
          duration: 5,
        },
        "a"
      );

      tl.to(
        revealText2.current,
        {
          left: "100%",
          translateX: "-70%",
          duration: 5,
        },
        "a"
      );

      tl.to(scrollImgSection.current.querySelector("img:nth-child(1)"), {
        marginTop: "-440vh",
        duration: 5,
      });
    },
    { scope: scrollContainer }
  );

  return (
    <section
      ref={scrollContainer}
      className="w-full relative h-screen overflow-hidden bg-black z-10"
    >
      <button
        ref={buttonRef}
        className="bg-gray-200 absolute -bottom-50 left-1/2 -translate-x-1/2 text-black px-6 sm:px-10 md:px-13 py-3 sm:py-4 md:py-5 text-base sm:text-xl tracking-tighter rounded-full whitespace-nowrap z-20 hover:bg-white transition-colors"
      >
        book a demo
      </button>

      <div
        ref={openCloseElem}
        className="relative w-11/12 md:w-2/3 h-0 left-1/2 top-1/2 -translate-1/2 z-10 text-white"
      >
        <h1
          ref={revealText1}
          className="text-5xl sm:text-7xl md:text-9xl absolute -top-10 sm:-top-17 right-1/2 pr-3 capitalize -tracking-widest"
        >
          our
        </h1>
        <h1
          ref={revealText2}
          className="text-5xl sm:text-7xl md:text-9xl absolute -bottom-10 sm:-bottom-15 left-1/2 pl-3 capitalize -tracking-widest"
        >
          Work
        </h1>

        <div className="w-full h-full overflow-hidden  ">
          <section ref={scrollImgSection} className="w-full h-[500vh]  ">
            {[1, 2, 3, 4, 5, 6, 7, 1].map((n, i) => (
              <img
                key={i}
                src={`https://picsum.photos/1920/1080?random=${n}`}
                className="w-full h-1/8 border-2 border-amber-950"
                alt="Work sample"
              />
            ))}
          </section>
        </div>
      </div>
    </section>
  );
};

export default WorkShowcase;
