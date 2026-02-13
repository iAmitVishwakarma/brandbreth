import gsap from 'gsap';
import { ReactLenis } from 'lenis/react';
import { useEffect, useRef } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LenisScrollProvider = ({ children }) => {
  const lenisRef = useRef();
  
  useEffect(() => {
    // 1. Disable lag smoothing for smoother sync
    gsap.ticker.lagSmoothing(0);

    // 2. Ticker function
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
  
    gsap.ticker.add(update);
  
    // 3. Optional: Connect ScrollTrigger
    const lenis = lenisRef.current?.lenis;
    if (lenis) {
       lenis.on('scroll', ScrollTrigger.update);
    }
  
    return () => {
      gsap.ticker.remove(update);
      if (lenis) lenis.off('scroll', ScrollTrigger.update);
    };
  }, []);
  
  return (
    <ReactLenis 
      root 
      options={{ 
        autoRaf: false, 
        duration: 1.2, // Common smooth setting
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) 
      }} 
      ref={lenisRef}
    >
        {children}
    </ReactLenis>
  );
};

export default LenisScrollProvider;
