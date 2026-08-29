import React from "react";

const ServicesListArray = {
  branding: [
    "Logo design",
    "Visual Identity",
    "Collateral",
    "Brand Guidelines",
  ],
  digital: ["Animation", "Naming", "Mobile / Web Apps", "Design Systems"],
  ux: ["Wireframing", "Interaction design", "UX design", "Design thinking"],
  ui: ["Art direction", "Responsive design", "Motion", "Prototyping"],
  marketing: [
    "E-commerce",
    "Webflow development",
    "Pitch deck design",
    "Social media",
  ],
  print: ["Email design", "Tradeshow assets", "Brochures", "Signage"],
};

const ServicesList = ({ type }) => {
  return (
    <>
      {ServicesListArray[type].map((item) => (
        <div key={item}>
          <h2 className="text-xl tracking-tighter font-medium font-poppins text-black/50">
            {item}
          </h2>
        </div>
      ))}
    </>
  );
};

const Pricing = () => {
  return (
    <>
      <section className="w-full min-h-screen bg-white px-4 sm:px-8 md:px-12 py-10 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl tracking-tighter py-6 sm:py-10 font-normal text-center text-black/50">
            pricing
          </h1>
          <hr className="border-gray-200" />
        </div>

        <section className="grid grid-cols-1 lg:grid-cols-2 py-12 md:py-20 items-center gap-10">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-7xl sm:text-9xl lg:text-[14rem] tracking-tighter font-normal font-poppins text-black leading-none">
              $2K+
            </h1>
            <span className="text-2xl sm:text-4xl md:text-5xl tracking-tighter font-normal font-poppins text-black/50 mt-2 sm:mt-4">
              per month
            </span>
          </div>

          <div className="flex flex-col gap-4 sm:gap-6 max-w-lg mx-auto lg:mx-0">
            <h2 className="text-2xl sm:text-3xl -tracking-widest font-normal font-poppins text-black">
              Daily design sprints
            </h2>
            <h2 className="text-2xl sm:text-3xl -tracking-wider font-normal font-poppins text-black">
              Scalable design solution
            </h2>
            <p className="text-base sm:text-xl tracking-tighter leading-relaxed font-normal font-poppins text-black/50">
              Once subscribed you’ll be onboarded to your project management
              space and introduced to your design team.
            </p>

            <button className="bg-black w-full sm:w-auto self-start px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-xl text-gray-100 tracking-tighter rounded-full hover:bg-neutral-800 transition-colors mt-2">
              book a demo
            </button>
          </div>
        </section>
        <div></div>
      </section>

      <section className="w-full bg-white px-4 sm:px-8 md:px-12 py-8 sm:py-12">
        <h1 className="text-2xl sm:text-3xl tracking-tighter font-normal font-poppins text-black py-6 sm:py-10">
          Choose from :
        </h1>
        <hr className="border-gray-200" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 py-10">
          <ServicesList type="branding" />
          <ServicesList type="digital" />
          <ServicesList type="ux" />
          <ServicesList type="ui" />
          <ServicesList type="marketing" />
          <ServicesList type="print" />
        </div>
      </section>
    </>
  );
};

export default Pricing;
