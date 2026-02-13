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
      <section className="w-full h-screen bg-white px-12">
        <h1 className=" text-3xl  tracking-tighter py-10 font-normal  text-center text-black/50">
          pricing
        </h1>
        <hr />

        <section className=" grid grid-cols-2  pt-70  h-8/10 ">
          <h1 className="text-[20rem]   tracking-tighter text-center font-normal  font-poppins text-black ">
            $2K+
            <span className=" flex justify-center -mt-30  w-full text-center mx-auto text-5xl tracking-tighter font-normal  font-poppins text-black/50">
              per month
            </span>
          </h1>

          <div className=" flex flex-col gap-5 w-1/2  ml-70 ">
            <h2 className="text-3xl -tracking-widest space-y-5 font-normal   font-poppins text-black ">
              Daily design sprints
            </h2>
            <h2 className="text-3xl -tracking-wider space-y-5 font-normal   font-poppins text-black ">
              Scalable design solution
            </h2>
            <p className="text-xl mt-2 tracking-tighter leading-7 font-normal   font-poppins text-black/50 ">
              Once subscribed you’ll be onboarded to your project management
              space and introduced to your design team.
            </p>

            <button className="bg-black w-3/7 mt-5  text-gray-100  py-5 text-xl tracking-tighter rounded-full">
              book a demo
            </button>
          </div>
        </section>
      </section>

      <section className="w-full h-1/2 bg-white p-12">
        <h1 className="text-3xl tracking-tighter font-normal font-poppins text-black py-10">
          Choose from :
        </h1>
        <hr />

        <div className=" grid grid-cols-6 gap-5 py-10">
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
