import { useRef } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useMarqueeScrollAnimation } from "../hooks/gsapAnimation";

const Marquee = () => {
  const marqueeRef1 = useRef(null);
  const marqueeRef2 = useRef(null);
  const marqueeRef3 = useRef(null);
  const marqueeRef4 = useRef(null);
  const marqueeRef5 = useRef(null);
  const marqueeRef6 = useRef(null);
  const marqueeRef7 = useRef(null);
  // Marquee Icon
  const marqueeIcon1 = useRef(null);
  const marqueeIcon2 = useRef(null);
  const marqueeIcon3 = useRef(null);
  const marqueeIcon4 = useRef(null);
  const marqueeIcon5 = useRef(null);
  const marqueeIcon6 = useRef(null);
  const marqueeIcon7 = useRef(null);

  const marqueeRef = [
    marqueeRef1,
    marqueeRef2,
    marqueeRef3,
    marqueeRef4,
    marqueeRef5,
    marqueeRef6,
    marqueeRef7,
  ];
  const maqqueeIconRef = [
    marqueeIcon1,
    marqueeIcon2,
    marqueeIcon3,
    marqueeIcon4,
    marqueeIcon5,
    marqueeIcon6,
    marqueeIcon7,
  ];
  useMarqueeScrollAnimation(marqueeRef, maqqueeIconRef);
  return (
    <div className="marquee-scroll">
      <div className="marquee" ref={marqueeRef1}>
        <span className="marquee-text">get in touch with traveller</span>
        <span className="marquee-icon" ref={marqueeIcon1}>
          <FaArrowRightLong />
        </span>
      </div>
      <div className="marquee" ref={marqueeRef2}>
        <span className="marquee-text">get in touch with traveller</span>
        <span className="marquee-icon" ref={marqueeIcon2}>
          <FaArrowRightLong />
        </span>
      </div>
      <div className="marquee" ref={marqueeRef3}>
        <span className="marquee-text">get in touch with traveller</span>
        <span className="marquee-icon" ref={marqueeIcon3}>
          <FaArrowRightLong />
        </span>
      </div>
      <div className="marquee" ref={marqueeRef4}>
        <span className="marquee-text">get in touch with traveller</span>
        <span className="marquee-icon" ref={marqueeIcon4}>
          <FaArrowRightLong />
        </span>
      </div>
      <div className="marquee" ref={marqueeRef5}>
        <span className="marquee-text">get in touch with traveller</span>
        <span className="marquee-icon" ref={marqueeIcon5}>
          <FaArrowRightLong />
        </span>
      </div>
      <div className="marquee" ref={marqueeRef6}>
        <span className="marquee-text">get in touch with traveller</span>
        <span className="marquee-icon" ref={marqueeIcon6}>
          <FaArrowRightLong />
        </span>
      </div>
      <div className="marquee" ref={marqueeRef7}>
        <span className="marquee-text">get in touch with traveller</span>
        <span className="marquee-icon" ref={marqueeIcon7}>
          <FaArrowRightLong />
        </span>
      </div>
    </div>
  );
};

export default Marquee;
