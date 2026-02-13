import React, { use, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Services = () => {
  const scrollContainer4 = useRef(null);

  const textRevealConatainer4 = useRef(null);

  useGSAP(
    () => {
      const tl4 = gsap.timeline({
        scrollTrigger: {
          trigger: scrollContainer4.current,
          start: "top 70%",
          end: "20% 50%",
          scrub: 1,
          // pin: true,
          // markers: true,
        },
      });

      tl4.to(".rounded-div-span", {
        height: "0%",
        duration: 5,
        // ease: "power2.out",
        top: "0%",
      });
    },
    { scope: scrollContainer4 }
  );

  useGSAP(
    () => {
      const tl4 = gsap.timeline({
        scrollTrigger: {
          trigger: textRevealConatainer4.current,
          start: "top 70%",
          end: "bottom 50%",
          scrub: 1,
          // pin: true,
          // markers: true,
        },
      });

      tl4.to(".textreveal span", {
        width: "100%",
        duration: 10,
        stagger: 1.5,
        ease: "none",
      });
    },
    { scope: scrollContainer4 }
  );

  return (
    <>
      <section
        ref={scrollContainer4}
        className="bg-gray-100 w-full pt-40 relative  h-1/2"
      >
        <span className=" rounded-div-span bg-white rounded-[50%] h-70 w-full absolute -top-35 "></span>

        <div
          ref={textRevealConatainer4}
          className="text-[7vw] px-10  text-wrapper relative overflow-hidden "
        >
          <h1 className=" tracking-tighter  font-normal font-poppins opacity-15 text-black mb-6 ">
            Design services for <br />
            <span className=" "> profitable outcomes</span>
          </h1>

          <h1 className=" textreveal absolute pb-10  w-full top-0  h-full   tracking-tighter font-normal font-poppins text-black mb-6 ">
            <span className=" w-0 h-1/2 overflow-hidden text-nowrap inline-flex  ">
              Design services for
            </span>{" "}
            <br />
            <span className=" w-0      overflow-hidden text-nowrap   inline-flex  ">
              profitable outcomes
            </span>
          </h1>
        </div>
      </section>

      <ServicesList />
      <ServicesList />
      <ServicesList />
      <ServicesList />
    </>
  );
};

const ServicesList = () => {
  return (
    <>
      <section className="w-full p-10 bg-gray-100 ">
        <hr />
        <div className=" grid-cols-2 py-20 px-5 w-full grid items-center ">
          <h1 className="text-8xl ">Brand</h1>
          <div>
            <button className="bg-gray-200  text-black px-12 py-6 text-xl tracking-tighter rounded-full">
              View Pricing
            </button>
          </div>
        </div>
        <hr />

        <div className=" grid grid-cols-2 py-10">
          <div></div>
          <div className=" space-y-3 ">
            <h1 className="text-5xl font-normal tracking-tighter">
              1-2 months average / 8 design sprints
            </h1>
            <br />
            <p className="text-3xl  opacity-50 font-normal tracking-tighter">
              Logo design
            </p>
            <p className="text-3xl opacity-50 font-normal tracking-tighter">
              Visual Identity
            </p>
            <p className="text-3xl opacity-50 font-normal tracking-tighter">
              Collateral
            </p>
            <p className="text-3xl opacity-50 font-normal tracking-tighter">
              Brand Guidelines
            </p>
            <p className="text-3xl opacity-50 font-normal tracking-tighter">
              Animation
            </p>
            <p className="text-3xl opacity-50 font-normal tracking-tighter">
              Naming
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
