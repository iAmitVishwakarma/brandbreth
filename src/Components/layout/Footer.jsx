import React from "react";

const Footer = () => {
  return (
    <>
      <section className="w-full bg-black px-4 sm:px-8 md:px-12 py-8 sm:py-12">
        <div className="py-20 sm:py-32 text-center space-y-8 sm:space-y-12">
          <h1 className="text-4xl sm:text-7xl md:text-9xl tracking-tighter text-center font-normal font-poppins text-white/70">
            Try us on for size
          </h1>

          <p className="text-lg sm:text-2xl md:text-3xl tracking-tighter text-center font-normal w-11/12 sm:w-3/5 md:w-2/5 leading-relaxed mx-auto font-poppins text-white/50">
            Get a personal overview of how we work and the commercial impact of
            great design.
          </p>

          <button className="bg-white text-black px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl tracking-tighter rounded-full hover:bg-gray-200 transition-colors">
            book a demo
          </button>
        </div>

        <h1 className="text-sm sm:text-xl -tracking-wider text-center font-normal font-poppins text-white/50">
          © BrandBreth 2026 |{" "}
          <span className="text-white font-medium cursor-pointer">Privacy Policy</span>
        </h1>
      </section>
    </>
  );
};

export default Footer;
