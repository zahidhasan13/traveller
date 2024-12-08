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
        ease: Expo.easeIn,
        scrollTrigger: {
          trigger: trig.current,
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
      }
    );
  }, []);
};
