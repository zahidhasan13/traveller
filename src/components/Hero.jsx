import { useRef } from "react";
import heroImg1 from "../assets/sq1.jpg";
import heroImg2 from "../assets/sq2.jpg";
import heroImg3 from "../assets/sq3.jpg";
import heroImg4 from "../assets/sq4.jpg";
import heroImg5 from "../assets/sq5.jpg";
import {
  useHeroPhotoDropping,
  useHeroShutterReveil,
  useHeroPhotoLevitate,
} from "../hooks/gsapAnimation";

const Hero = () => {
  const heroRef = useRef(null);
  const shutter1 = useRef(null);
  const shutter2 = useRef(null);
  const photo1 = useRef(null);
  const photo2 = useRef(null);
  const photo3 = useRef(null);
  const photo4 = useRef(null);
  const photo5 = useRef(null);

  const heroPhotos = [photo1, photo2, photo3, photo4, photo5];

  useHeroShutterReveil(shutter1, 0, heroRef);
  useHeroShutterReveil(shutter2, 0.2, heroRef);
  useHeroPhotoDropping(heroPhotos);
  useHeroPhotoLevitate(heroPhotos, heroRef);
  return (
    <section className="hero container" ref={heroRef}>
      <h1 className="travel">
        travel <span ref={shutter1}></span>
      </h1>
      <h1 className="lover">
        lover <span ref={shutter2}></span>
      </h1>
      <div className="photos">
        <div
          ref={photo1}
          className="photo one"
          style={{ backgroundImage: `url(${heroImg1})` }}
        ></div>
        <div
          ref={photo2}
          className="photo two"
          style={{ backgroundImage: `url(${heroImg2})` }}
        ></div>
        <div
          ref={photo3}
          className="photo three"
          style={{ backgroundImage: `url(${heroImg3})` }}
        ></div>
        <div
          ref={photo4}
          className="photo four"
          style={{ backgroundImage: `url(${heroImg4})` }}
        ></div>
        <div
          ref={photo5}
          className="photo five"
          style={{ backgroundImage: `url(${heroImg5})` }}
        ></div>
      </div>
    </section>
  );
};

export default Hero;
