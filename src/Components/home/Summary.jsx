import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";

const Summary = () => {
  const textRevealConatainer2 = useRef(null);

  useGSAP(
    () => {
      const tl5 = gsap.timeline({
        scrollTrigger: {
          trigger: textRevealConatainer2.current,
          start: "top 80%",
          end: "bottom 50%",
          scrub: 1,
          // pin: true,
          // markers: true,
        },
      });

      tl5.to(".textreveal span", {
        width: "100%",
        duration: 5,
        stagger: 1.5,
        ease: "none",
      });
    },
    { scope: textRevealConatainer2 }
  );

  return (
    <>
      <section className="bg-white relative w-full">
        <h1 className="summaryText absolute -top-1 text-4xl sm:text-7xl md:text-9xl w-full text-black/50 text-center font-poppins -tracking-wider">
          in summary...
        </h1>

        <section
          key={2}
          className="w-full py-20 sm:py-32 md:py-40 flex flex-col justify-center items-center"
        >
          <div
            ref={textRevealConatainer2}
            className="text-[8vw] sm:text-[7vw] px-4 sm:px-8 md:px-10 text-wrapper relative overflow-hidden"
          >
            <h1 className=" tracking-tighter  font-normal font-poppins opacity-15 text-black mb-6 ">
              A dedicated team at <br />
              <span className="pl-[12vw] "> your disposal.</span>
            </h1>

            <h1 className=" textreveal absolute pb-10  w-full top-0  h-full   tracking-tighter font-normal font-poppins text-black mb-6 ">
              <span className=" w-0 h-1/2 overflow-hidden text-nowrap inline-flex  ">
                A dedicated team at
              </span>{" "}
              <br />
              <span className=" w-0 pl-[12vw]     overflow-hidden text-nowrap   inline-flex  ">
                your disposal.
              </span>
            </h1>
          </div>
        </section>
      </section>
    </>
  );
};

export default Summary;
