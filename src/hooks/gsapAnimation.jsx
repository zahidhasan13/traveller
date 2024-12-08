import gsap, { Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export const useHeroShutterReveil = (item1, delay, trig) => {
  useEffect(() => {
    const el = item1.current;

    gsap.fromTo(
      el,
      {
        height: "100%",
      },
      {
        height: 0,
        duration: 1,
        delay: delay,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};

export const useNavBarAnimation = (arr, delay = 0) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);
    gsap.fromTo(
      el,
      {
        x: -50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        delay: delay,
        stagger: 0.3,
        ease: Expo.easeIn,
      }
    );
  }, []);
};

export const useHeroPhotoDropping = (imgs) => {
  useEffect(() => {
    const el = imgs.map((img) => img.current);
    gsap.fromTo(
      el,
      {
        y: "-100vh",
        opacity: 0,
        scale: 0,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 3,
        stagger: 0.2,
        ease: Expo.easeInOut,
      }
    );
  }, []);
};

export const useHeroPhotoLevitate = (imgs, heroRef) => {
  useEffect(() => {
    const el = imgs.map((img) => img.current);
    gsap.fromTo(
      el,
      {
        y: 0,
      },
      {
        y: "-40%",
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: heroRef.current,
          scrub: 1,
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};
