import { useRef } from "react";
import { useHeroShutterReveil } from "../hooks/gsapAnimation";

const Hero = () => {
  const heroRef = useRef(null);
  const shutter1 = useRef(null);
  const shutter2 = useRef(null);
  useHeroShutterReveil(shutter1, 0, heroRef);
  useHeroShutterReveil(shutter2, 0.2, heroRef);
  return (
    <section className="hero container" ref={heroRef}>
      <h1 className="travel">
        travel <span ref={shutter1}></span>
      </h1>
      <h1 className="lover">
        lover <span ref={shutter2}></span>
      </h1>
    </section>
  );
};

export default Hero;
