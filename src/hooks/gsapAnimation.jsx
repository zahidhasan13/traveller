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
        y: "-30%",
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

// Featured
export const useFeatureLeftShutterUnveil = (item, trig) => {
  useEffect(() => {
    gsap.fromTo(
      item.current,
      {
        height: "100%",
      },
      {
        height: 0,
        duration: 1,
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
export const useFeatureRightShutterUnveil = (item, trig) => {
  useEffect(() => {
    gsap.fromTo(
      item.current,
      {
        width: "100%",
      },
      {
        width: 0,
        duration: 1,
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

// Marquee scroll animation
export const useMarqueeScrollAnimation = (arr, iconArr) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);
    const icon = iconArr.map((item) => item.current);

    window.addEventListener("wheel", (e) => {
      if (e.deltaY > 0) {
        gsap.to(el, {
          transform: "translateX(-400%)",
          repeat: -1,
          duration: 6,
          ease: "none",
        });
        gsap.to(icon, {
          rotate: 180,
        });
      } else {
        gsap.to(el, {
          transform: "translateX(0%)",
          repeat: -1,
          duration: 6,
          ease: "none",
        });
        gsap.to(icon, {
          rotate: 0,
        });
      }
    });
  }, []);
};

// Custom Cursor
export const useCustomCursor = (item) => {
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      gsap.to(item.current, {
        x: e.x,
        y: e.y,
        duration: 1,
        ease: "back.out",
      });
    });
  }, []);
};

// Popular Destination
export const usePopularImage = (item) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        x: 0,
        width: 0,
      },
      {
        x: "30%",
        width: "100%",
        duration: 1,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: el,
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};
export const usePopularTitle = (item, trig) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        x: "30%",
      },
      {
        x: 0,
        duration: 1,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          start: "top center",
          end: "bottom top",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};
export const usePopularCategory = (item, trig) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        x: "-100vw",
      },
      {
        x: 0,
        duration: 1,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          start: "top center",
          end: "bottom top",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};
// Event Section
export const useEventAnimation = (arr) => {
  useEffect(() => {
    if (!arr || arr.length === 0) return;

    arr.forEach((item, index) => {
      const direction = index % 2 === 0 ? "-100%" : "100%";

      gsap.fromTo(
        item,
        { opacity: 0, x: direction },
        {
          opacity: 1,
          x: "0%",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 50%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);
};

// Contact
export const useContactAnimation = (arr, trig) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        x: "100vw",
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.5,
        ease: "back.inOut",
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
