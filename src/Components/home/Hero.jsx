import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { gsap } from "gsap";
import BrandMarquee from "./BrandMarquee";

const Hero = () => {
  const scollcontainer2 = useRef(null);

  const textRevealConatainer = useRef(null);

  const roundedElem = useRef(null);




  useGSAP(() => {
    console.log( )
    // Parallax effect for the background circle
    gsap.to(roundedElem.current, {
    height: "0%",
    top:"0%",
      ease: "power1.Out",
      scrollTrigger: {
        trigger: scollcontainer2.current,
        start: "top 70%",
        end: "10% 50%",
        scrub: 1, // Smoother scrub
        // markers:true
      },
    });


    gsap.to(roundedElem.current, {
      height: "0%",
      top:"0%",
        ease: "power1.Out",
        scrollTrigger: {
          trigger: scollcontainer2.current,
          start: "top 70%",
          end: "10% 50%",
          scrub: 1, // Smoother scrub
          // markers:true
        },
      });

    // Content fade out instead of shifting the whole container causing gaps
    gsap.to([textRevealConatainer.current.children[1].children[0] , textRevealConatainer.current.children[1].children[2]], {
      width: "100%", // Minimal shift if needed
      // opacity: 0,
      stagger: 0.1,
      // ease: "power2.out", // More natural easing
      scrollTrigger: {
        trigger: scollcontainer2.current,
        start: "center 70%", // Start fading when center is at top
        end: "bottom 70%",
        scrub: 1,
        // markers:true
      },
    });
  }, []);

  return (
    <>
      <section
        ref={scollcontainer2}
        className=" relative bg-white h-screen w-full   "
      >
        <span ref={roundedElem} className="roundedElem absolute -top-29 z-10 w-full h-60 rounded-[50%] bg-white"></span>

        <section className="w-full  h-9/10 flex flex-col justify-center items-start ">
          <div
            ref={textRevealConatainer}
            className="text-[7vw] px-10  text-wrapper relative overflow-hidden "
          >
            <h1 className=" tracking-tighter  font-normal font-poppins opacity-15 text-black mb-6 ">
              Strategic design solutions <br />
              <span className="pl-[12vw] "> that fuel your bottom line. </span>
            </h1>

            <h1 className=" textreveal absolute pb-10  w-full top-0  h-full   tracking-tighter font-normal font-poppins text-black mb-6 ">
              <span  className=" w-0 h-1/2 overflow-hidden text-nowrap inline-flex  ">
                Strategic design solutions
              </span>{" "}
              <br />
              <span 

              className=" w-0 pl-[12vw]     overflow-hidden text-nowrap   inline-flex  ">
                that fuel your bottom line.
              </span>
            </h1>
          </div>
        </section>

        <section className="flex justify-between items-center w-full -mt-5">
          <h1 className=" text-4xl  tracking-tighter opacity-50 text-black font-poppins ml-10 ">
            Unlock profit with monthly design sprints.
          </h1>
          <div className="pr-10 flex gap-5">
            <button className="bg-black text-white px-14 py-7 text-xl tracking-tighter rounded-full">
              Book a demo
            </button>

            <button className="bg-gray-200 text-black px-14 py-7 text-xl tracking-tighter rounded-full">
              View Pricing
            </button>
          </div>
        </section>
      </section>
    </>
  );
};

export default Hero;
