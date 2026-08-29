import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const scollcontainer2 = useRef(null);
  const textRevealConatainer = useRef(null);
  const roundedElem = useRef(null);

  useGSAP(() => {
    // Parallax effect for the background circle
    gsap.to(roundedElem.current, {
      height: "0%",
      top: "0%",
      ease: "power1.out",
      scrollTrigger: {
        trigger: scollcontainer2.current,
        start: "top 70%",
        end: "10% 50%",
        scrub: 1,
      },
    });

    // Content text reveal animation
    if (textRevealConatainer.current && textRevealConatainer.current.children[1]) {
      const targets = [
        textRevealConatainer.current.children[1].children[0],
        textRevealConatainer.current.children[1].children[2],
      ].filter(Boolean);

      if (targets.length > 0) {
        gsap.to(targets, {
          width: "100%",
          stagger: 0.1,
          scrollTrigger: {
            trigger: scollcontainer2.current,
            start: "center 70%",
            end: "bottom 70%",
            scrub: 1,
          },
        });
      }
    }
  }, []);

  return (
    <>
      <section
        ref={scollcontainer2}
        className="relative bg-white min-h-screen w-full flex flex-col justify-between py-12 md:py-0"
      >
        <span
          ref={roundedElem}
          className="roundedElem absolute -top-20 md:-top-29 z-10 w-full h-40 md:h-60 rounded-[50%] bg-white"
        ></span>

        <section className="w-full flex-1 flex flex-col justify-center items-start pt-16 md:pt-0">
          <div
            ref={textRevealConatainer}
            className="text-[8vw] sm:text-[7vw] px-4 sm:px-8 md:px-10 text-wrapper relative overflow-hidden w-full"
          >
            <h1 className="tracking-tighter font-normal font-poppins opacity-15 text-black mb-6">
              Strategic design solutions <br />
              <span className="pl-[8vw] md:pl-[12vw]"> that fuel your bottom line. </span>
            </h1>

            <h1 className="textreveal absolute pb-10 w-full top-0 h-full tracking-tighter font-normal font-poppins text-black mb-6">
              <span className="w-0 h-1/2 overflow-hidden text-nowrap inline-flex">
                Strategic design solutions
              </span>{" "}
              <br />
              <span className="w-0 pl-[8vw] md:pl-[12vw] overflow-hidden text-nowrap inline-flex">
                that fuel your bottom line.
              </span>
            </h1>
          </div>
        </section>

        <section className="flex flex-col md:flex-row justify-between items-start md:items-center w-full px-4 sm:px-8 md:px-10 pb-12 gap-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl tracking-tighter opacity-50 text-black font-poppins max-w-xl">
            Unlock profit with monthly design sprints.
          </h1>
          <div className="flex flex-wrap gap-3 sm:gap-5 w-full md:w-auto">
            <button className="bg-black text-white px-6 sm:px-10 md:px-14 py-4 sm:py-5 md:py-7 text-base sm:text-xl tracking-tighter rounded-full hover:bg-neutral-800 transition-colors">
              Book a demo
            </button>

            <button className="bg-gray-200 text-black px-6 sm:px-10 md:px-14 py-4 sm:py-5 md:py-7 text-base sm:text-xl tracking-tighter rounded-full hover:bg-gray-300 transition-colors">
              View Pricing
            </button>
          </div>
        </section>
      </section>
    </>
  );
};

export default Hero;
