import { useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Preloader from "./components/layout/Preloader";
import Navbar from "./components/layout/Navbar";
import Intro from "./components/home/Intro";
import Hero from "./components/home/Hero";
import BrandMarquee from "./components/home/BrandMarquee";
import Benefits from "./components/home/Benefits";
import Summary from "./components/home/Summary";
import Services from "./components/home/Services";
import WorkShowcase from "./components/home/WorkShowcase";
import Pricing from "./components/home/Pricing";
import Footer from "./components/layout/Footer";

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
