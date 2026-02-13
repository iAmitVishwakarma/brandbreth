import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { s, section } from "framer-motion/client";

const Benefits = () => {
  const styles = {
    heading: {
      fontSize: "4rem",
      fontFamily: "Poppins, sans-serif",
      letterSpacing: "-0.10em",
      fontWeight: "400",
      color: "#000000",
      marginBottom: "1.5rem",
    },
    Paragraph: {
      fontSize: "2rem",
      lineHeight: "3rem",
      letterSpacing: "-0.05em",
      color: "#333333",
      opacity: "0.7",
      marginBottom: "1.5rem",
      fontWeight: "400",
    },
  };

  const scrollsection3Text = useRef(null);

  //  const scrollsection4Text = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scrollsection3Text.current,
        start: "top top",
        end: "210% top",
        scrub: 1,
        pin: true,
        // markers: true,
      },
    });

    gsap.to(".star", {
      rotate: "520",
      scrollTrigger: {
        trigger: scrollsection3Text.current,
        start: "top top",
        end: "220% 10%",
        scrub: 1,
        // pin: true,
        // markers: true,
      },
    });

    tl.to(
      ".textwrapper.one",
      {
        marginTop: "100rem",
        opacity: 1,
        delay: 0.1,
        duration: 5,
      },
      "one"
    );
    tl.to(
      ".textwrapper.one",
      {
        marginTop: "55rem",
        opacity: 0,
        duration: 5,
      },
      "two"
    );

    tl.to(
      ".textwrapper.two",
      {
        opacity: 1,
        duration: 5,
      },
      "two"
    );

    tl.to(
      ".textwrapper.two",
      {
        opacity: 0,
        duration: 5,
      },
      "three"
    );
    tl.to(
      ".textwrapper.one",
      {
        marginTop: "10rem",
        opacity: 0,
        duration: 5,
      },
      "three"
    );

    tl.to(
      ".textwrapper.three",
      {
        opacity: 1,
        duration: 5,
      },
      "three"
    );

    //
    tl.to(
      ".textwrapper.three",
      {
        opacity: 0,
        duration: 5,
      },
      "four"
    );
    tl.to(
      ".textwrapper.one",
      {
        marginTop: "-35rem",
        opacity: 0,
        duration: 5,
      },
      "four"
    );

    tl.to(
      ".textwrapper.four",
      {
        opacity: 1,
        duration: 5,
      },
      "four"
    );

    //
    tl.to(
      ".textwrapper.four",
      {
        opacity: 0,
        duration: 5,
      },
      "five"
    );
    tl.to(
      ".textwrapper.one",
      {
        marginTop: "-75rem",
        opacity: 0,
        duration: 5,
      },
      "five"
    );

    tl.to(
      ".textwrapper.five",
      {
        opacity: 1,
        duration: 5,
      },
      "five"
    );

    //

    tl.to(
      ".textwrapper.five",
      {
        opacity: 0,
        duration: 5,
      },
      "six"
    );
    tl.to(
      ".textwrapper.one",
      {
        marginTop: "-120rem",
        opacity: 0,
        duration: 5,
      },
      "six"
    );

    tl.to(
      ".textwrapper.six",
      {
        opacity: 1,
        duration: 5,
      },
      "six"
    );

    tl.to(
      ".textwrapper.six",
      {
        opacity: 0,
        duration: 5,
      },
      "seven"
    );

  tl.to(
      ".textwrapper.one",
      {
        marginTop: "-145rem",
        opacity: 0,
        duration: 5,
      },
      "seven"
    );

    tl.to(
      ".star",
      {
        marginLeft: "110%",
        duration: 5,
          ease:"power2.out"
      },
      "seven"
    );
  

    tl.to(
      ".summaryText",
      {
        marginTop: "-10%",
        duration: 5,
        ease:"bounce.in"
      
      },
      "et",
      "-=0.5"
    );
  }, {});

  return (
    // <section className="w-full h-screen relative ">
    <section
      ref={scrollsection3Text}
      className="w-full h-screen flex px-10 overflow-hidden  justify-between  items-center bg-white "
    >
      <div className="heading w-3/7 ">
        <h2 className="text-9xl font-poppins -tracking-widest font-normal  text-black mb-6 ">
          Expected Outcomes
        </h2>
        <img
          className="w-30 star h-30 bg-gray-100 rounded-full flex justify-center items-center  p-2"
          src="/Images/star.png"
          alt="Symbol"
        />
      </div>
      <div className="column-text w-3/7    flex flex-col gap-8 ">
        <div className="textwrapper one opacity-0 mt-500">
          <h1 style={styles.heading}>Growth and ROI</h1>
          <p style={styles.Paragraph}>
            Expect a team that looks at problems holistically. A team that
            designs solutions directly contributing to your revenue growth and
            business success - not just pretty pictures.
          </p>
        </div>
        <div className="textwrapper  two  opacity-0">
          <h1 style={styles.heading}>Top tier designers</h1>
          <p style={styles.Paragraph}>
            Expect the 1% only. Recruited from a global talent pool you’ll have
            access to some truly talented designers. Heavily vetted - we’ve
            hired the best to serve the great.
          </p>
        </div>
        <div className="textwrapper three  opacity-0">
          <h1 style={styles.heading}>Stress free design</h1>
          <p style={styles.Paragraph}>
            Expect no extra charge if things need changing. It’s all about you.
            It’ll be iterated on until you are 100% happy. Once done expect
            design you and your mom can be proud of.
          </p>
        </div>
        <div className="textwrapper four  opacity-0">
          <h1 style={styles.heading}>Flexible and scalable</h1>
          <p style={styles.Paragraph}>
            Expect flexibility and fluidity. Pause or cancel anytime. Need more
            resources? No problem. You’ve just found your elastic design on
            demand team.
          </p>
        </div>
        <div className="textwrapper five  opacity-0">
          <h1 style={styles.heading}>Streamlined process</h1>
          <p style={styles.Paragraph}>
            Expect smooth and streamlined. Regain your time with an asynchronous
            meeting free workflow. Actively participate and witness your designs
            come to life with realtime updates.
          </p>
        </div>
        <div className="textwrapper six  opacity-0">
          <h1 style={styles.heading}>Predictability</h1>
          <p style={styles.Paragraph}>
            Expect peace of mind. Say goodbye to hidden costs and designers who
            are unavailable when you need them most. Expect reliable consistent
            quality that exceeds expectations.
          </p>
        </div>
      </div>
    </section>

    // </section>
  );
};

export default Benefits;
