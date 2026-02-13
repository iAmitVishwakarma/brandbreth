import React from "react";

const Footer = () => {
  return (
    <>
      <section className="w-full bg-black px-12 py-5">
        <div className=" py-50 text-center space-y-14">
          <h1 className="text-9xl tracking-tighter  text-center font-normal font-poppins text-white/70 ">
            Try us on for size
          </h1>

          <p className="text-3xl tracking-tighter  text-center font-normal w-2/5 leading-12 mx-auto font-poppins text-white/50 ">
            Get a personal overview of how we work and the commercial impact of
            great design.
          </p>

          <button className="bg-white text-black px-12 py-6 text-xl tracking-tighter rounded-full">
            book a demo
          </button>
        </div>

        <h1 className="text-xl -tracking-wider text-center font-normal font-poppins text-white/50 ">
          © Brandbeet 2026 |{" "}
          <span className="text-white font-medium">Privacy Policy</span>
        </h1>
      </section>
    </>
  );
};

export default Footer;
