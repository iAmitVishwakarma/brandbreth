import { useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Preloader from "./Components/layout/Preloader";
import Navbar from "./Components/layout/Navbar";
import Intro from "./Components/home/Intro";
import Hero from "./Components/home/Hero";
import BrandMarquee from "./Components/home/BrandMarquee";
import Benefits from "./Components/home/Benefits";
import Summary from "./Components/home/Summary";
import Services from "./Components/home/Services";
import WorkShowcase from "./Components/home/WorkShowcase";
import Pricing from "./Components/home/Pricing";
import Footer from "./Components/layout/Footer";

function App() {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  return (
    <>
      <header className="overflow-x-hidden w-full">
        <Navbar />
        <Preloader />
        <Intro />
      </header>
      <main >
          <Hero />
      
        <BrandMarquee />
        <Benefits />
        <Summary />
        <Services />
        <WorkShowcase />
        <Pricing />
        <Footer />
      </main>
    </>
  );
}

export default App;
