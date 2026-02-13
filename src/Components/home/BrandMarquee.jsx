import React from "react";

const BrandMarquee = () => {
  return (
    <section className="w-full py-20 bg-black overflow-hidden">
      {/* Added proper vertical padding */}
      <div className="logo-grid flex justify-around items-center flex-wrap gap-10 px-10 ">
        {/* You can add a marquee effect here later if desired, for now ensuring spacing is correct */}
        <div className="logo-grid-logo-wrap transition-transform hover:scale-110 duration-500 ease-out">
          <img
            src="https://cdn.prod.website-files.com/64b117fb0e09e8ce5768e4fe/64b178fee7b486cf8fa72268_Vector.svg"
            loading="eager"
            alt="Apple"
            className="logo-grid-logo h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
          />
        </div>
        <div className="logo-grid-logo-wrap transition-transform hover:scale-110 duration-500 ease-out">
          <img
            src="https://cdn.prod.website-files.com/64b117fb0e09e8ce5768e4fe/64b178fef884e67ba66aac09_Vector-1.svg"
            loading="eager"
            alt="IBM"
            className="logo-grid-logo h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
          />
        </div>
        <div className="logo-grid-logo-wrap transition-transform hover:scale-110 duration-500 ease-out">
          <img
            src="https://cdn.prod.website-files.com/64b117fb0e09e8ce5768e4fe/64b178fe505e4ce593209844_Vector-2.svg"
            loading="eager"
            alt="Dell"
            className="logo-grid-logo h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
          />
        </div>
        <div className="logo-grid-logo-wrap transition-transform hover:scale-110 duration-500 ease-out">
          <img
            src="https://cdn.prod.website-files.com/64b117fb0e09e8ce5768e4fe/64b178fe1889b6f78eb198ae_Vector-3.svg"
            loading="eager"
            alt="HP"
            className="logo-grid-logo h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
          />
        </div>
        <div className="logo-grid-logo-wrap transition-transform hover:scale-110 duration-500 ease-out">
          <img
            src="https://cdn.prod.website-files.com/64b117fb0e09e8ce5768e4fe/64b178feb68adb8257d5b442_Vector-4.svg"
            loading="eager"
            alt="Oral B"
            className="logo-grid-logo h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </section>
  );
};

export default BrandMarquee;
