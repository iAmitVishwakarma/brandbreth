import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const imageArray = new Array(5).fill(0);

const ImageSection = () => {
  return (
    <>
      {[1, 2, 3, 4, 5].map((num) => (
        <img
          key={num}
          className="w-full h-1/4 p-5 rounded-xl object-cover"
          src={"https://picsum.photos/300/300?random=" + num}
          alt="Intro showcase"
        />
      ))}
    </>
  );
};

const Intro = () => {
  const scrollcontainer = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scrollcontainer.current,
        start: "50% 50%",
        end: "150% 50%",
        scrub: 1,
        pin: true,
      },
    });

    imageArray.forEach((_, index) => {
      if (index === 0) return;
      tl.to(
        `#section-${index}`,
        { y: -250 * (index + 1), duration: 5, stagger: 0.2, ease: "none" },
        "a"
      );
    });
    tl.to(
      ".row-container",
      { rotate: -12, scale: 0.8, duration: 3, ease: "power2.out" },
      "a",
      "+=0.5"
    );
    tl.to(
      ".overlay",
      { opacity: 0.9, duration: 1, delay: 3, ease: "power2.inOut" },
      "a"
    );
    tl.to("#scrolling", { width: "100%", duration: 4, ease: "none" }, "a");
  }, []);

  return (
    <section
      ref={scrollcontainer}
      className="imageScrollContainer w-full h-screen z-0 bg-amber-300 flex justify-center items-center overflow-hidden"
    >
      <section
        id="image-section"
        className="image-section overflow-hidden z-10 relative bg-black w-full h-full"
      >
        <div className="row-container z-1 flex justify-center -translate-x-150 -translate-y-20 w-[200%] h-[150vh]">
          {imageArray.map((_, index) => {
            const dynamicMarginTop = (imageArray.length - index) * 100;

            return (
              <section
                key={index}
                id={`section-${index}`}
                className="w-1/5"
                style={index !== 0 ? { marginTop: `-${dynamicMarginTop - 200}px` } : { marginTop: `0px` }}
              >
                <ImageSection />
              </section>
            );
          })}
        </div>
      </section>

      <div className="overlay w-screen z-20 h-full absolute top-0 left-0 opacity-0 bg-black text-white flex justify-center items-center pointer-events-none">
        <h1 className="text-pretty text-[10vw] -tracking-widest font-normal font-poppins">BrandBreth</h1>
      </div>

      <div className="scrollprogressbar z-21 text-xs space-y-1 uppercase absolute text-white bottom-10 left-1/2 transform -translate-x-1/2">
        <h1 className="px-2">scroll down</h1>
        <div className="progressbarinner bg-gray-900/50 w-full h-0.5 flex overflow-hidden rounded-full">
          <span id="scrolling" className="bg-white w-0 h-full"></span>
        </div>
      </div>
    </section>
  );
};

export default Intro;
