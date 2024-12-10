import { Swiper, SwiperSlide } from "swiper/react";

// Testimonial Data
const testimonials = [
  {
    name: "Sophia Carter",
    location: "New York, USA",
    comment:
      "This website made my dream vacation to Bali seamless and unforgettable! The itineraries were perfectly curated, and the booking process was a breeze.",
    rating: 5,
    image: "/images/testimonials/sophia.jpg",
  },
  {
    name: "Liam Johnson",
    location: "London, UK",
    comment:
      "I’ve never had such an easy time planning a trip. The recommendations for Paris were spot-on, and the travel tips saved me so much time and money.",
    rating: 5,
    image: "/images/testimonials/liam.jpg",
  },
  {
    name: "Aisha Khan",
    location: "Dubai, UAE",
    comment:
      "From start to finish, this site was my travel companion! The guided tours and local insights made my trip to Istanbul truly unique.",
    rating: 4.8,
    image: "/images/testimonials/aisha.jpg",
  },
  {
    name: "Carlos Martinez",
    location: "Madrid, Spain",
    comment:
      "Exceptional service! I found hidden gems in South America that I wouldn’t have known about without this site. Highly recommend to all travelers!",
    rating: 5,
    image: "/images/testimonials/carlos.jpg",
  },
];

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import TestimonialItem from "./TestimonialItem";
const TestimonialSec = () => {
  return (
    <section className="testimonial">
      <div className="container">
        <h2 className="section-title">testimonials</h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <TestimonialItem key={testimonial.id} testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSec;
