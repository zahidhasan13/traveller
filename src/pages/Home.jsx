import ContactSec from "../components/ContactSec";
import EventSec from "../components/EventSec";
import FeatureSec from "../components/FeatureSec";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import PopularSec from "../components/PopularSec";
import TestimonialSec from "../components/TestimonialSec";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeatureSec />
      <Marquee />
      <EventSec />
      <PopularSec />
      <TestimonialSec />
      <ContactSec />
    </div>
  );
};

export default Home;
