import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const servicesData = [
  {
    title: "Brand",
    timeline: "1-2 months average / 8 design sprints",
    items: ["Logo design", "Visual Identity", "Collateral", "Brand Guidelines", "Animation", "Naming"],
  },
  {
    title: "Product",
    timeline: "2-3 months average / 12 design sprints",
    items: ["UX / UI Design", "Design Systems", "Prototyping", "User Research", "Mobile Apps", "Web Apps"],
  },
  {
    title: "Website",
    timeline: "1 month average / 4 design sprints",
    items: ["Landing Pages", "Webflow Development", "Framer Sites", "E-Commerce", "SEO Optimization", "Responsive Web"],
  },
  {
    title: "Motion",
    timeline: "2-4 weeks average / 4 design sprints",
    items: ["3D Motion", "Micro-Interactions", "Logo Animations", "Product Demos", "Social Ads", "Video Edit"],
  },
];

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
        },
      });

      tl4.to(".rounded-div-span", {
        height: "0%",
        duration: 5,
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
        className="bg-gray-100 w-full pt-20 sm:pt-32 md:pt-40 relative h-1/2"
      >
        <span className="rounded-div-span bg-white rounded-[50%] h-40 sm:h-60 md:h-70 w-full absolute -top-20 sm:-top-30 md:-top-35"></span>

        <div
          ref={textRevealConatainer4}
          className="text-[8vw] sm:text-[7vw] px-4 sm:px-8 md:px-10 text-wrapper relative overflow-hidden"
        >
          <h1 className="tracking-tighter font-normal font-poppins opacity-15 text-black mb-6">
            Design services for <br />
            <span> profitable outcomes</span>
          </h1>

          <h1 className="textreveal absolute pb-10 w-full top-0 h-full tracking-tighter font-normal font-poppins text-black mb-6">
            <span className="w-0 h-1/2 overflow-hidden text-nowrap inline-flex">
              Design services for
            </span>{" "}
            <br />
            <span className="w-0 overflow-hidden text-nowrap inline-flex">
              profitable outcomes
            </span>
          </h1>
        </div>
      </section>

      {servicesData.map((s, idx) => (
        <ServicesList key={idx} {...s} />
      ))}
    </>
  );
};

const ServicesList = ({ title, timeline, items }) => {
  return (
    <section className="w-full px-4 sm:px-8 md:px-10 py-6 bg-gray-100">
      <hr className="border-gray-300" />
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-10 sm:py-16 md:py-20 w-full gap-4">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-poppins tracking-tighter text-black">
          {title}
        </h1>
        <div>
          <button className="bg-gray-200 text-black px-6 sm:px-10 md:px-12 py-3 sm:py-5 md:py-6 text-base sm:text-xl tracking-tighter rounded-full hover:bg-gray-300 transition-colors">
            View Pricing
          </button>
        </div>
      </div>
      <hr className="border-gray-300" />

      <div className="grid grid-cols-1 md:grid-cols-2 py-8 sm:py-10 gap-6">
        <div></div>
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-normal tracking-tighter text-black">
            {timeline}
          </h2>
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {items.map((item, i) => (
              <p key={i} className="text-xl sm:text-2xl md:text-3xl opacity-50 font-normal tracking-tighter text-black">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export default Services;
