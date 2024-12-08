import { useRef } from "react";
import featureImg2 from "../assets/h1.jpg";
import featureImg1 from "../assets/sq6.jpg";
import {
  useFeatureLeftShutterUnveil,
  useFeatureRightShutterUnveil,
} from "../hooks/gsapAnimation";
const FeatureSec = () => {
  const featureRef = useRef(null);
  const featureLeftShutterRef = useRef(null);
  const featureRightShutterRef = useRef(null);

  useFeatureLeftShutterUnveil(featureLeftShutterRef, featureRef);
  useFeatureRightShutterUnveil(featureRightShutterRef, featureRef);
  return (
    <section className="feature container" ref={featureRef}>
      <h2 className="section-title">featured</h2>
      <div className="features">
        <div className="features-left">
          <span>Tranquility Among the Hills</span>
          <img src={featureImg1} alt="" />
          <span
            className="feature-shutter-left"
            ref={featureLeftShutterRef}
          ></span>
        </div>
        <div className="features-right">
          <span>The Perfect Beach Escape</span>
          <img src={featureImg2} alt="" />
          <span
            className="feature-shutter-left"
            ref={featureRightShutterRef}
          ></span>
        </div>
      </div>
    </section>
  );
};

export default FeatureSec;
