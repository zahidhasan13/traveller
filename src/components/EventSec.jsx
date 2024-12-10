// import EventItem from "./EventItem";

import { useRef } from "react";
import { useEventAnimation } from "../hooks/gsapAnimation";

const events = [
  {
    id: 1,
    title: "Santorini Sunset Cruise",
    date: "July 15, 2025",
    location: "Santorini, Greece",
    description:
      "Sail across the Aegean Sea and enjoy the breathtaking sunset views with a dinner onboard.",
    image:
      "https://images.pexels.com/photos/343701/pexels-photo-343701.jpeg?auto=compress&cs=tinysrgb&w=600",
    cta: "Book Now",
  },
  {
    id: 2,
    title: "Machu Picchu Guided Tour",
    date: "August 20, 2025",
    location: "Cusco, Peru",
    description:
      "Explore the ancient Incan city of Machu Picchu with an expert guide and breathtaking vistas.",
    image:
      "https://images.pexels.com/photos/17044910/pexels-photo-17044910/free-photo-of-man-looking-at-machu-picchu.jpeg?auto=compress&cs=tinysrgb&w=600",
    cta: "Explore More",
  },
  {
    id: 3,
    title: "Northern Lights Experience",
    date: "December 5, 2025",
    location: "Tromsø, Norway",
    description:
      "Witness the mesmerizing Northern Lights while exploring the Arctic landscapes.",
    image:
      "https://images.pexels.com/photos/3871773/pexels-photo-3871773.jpeg?auto=compress&cs=tinysrgb&w=600",
    cta: "Reserve Your Spot",
  },
  {
    id: 4,
    title: "Great Barrier Reef Snorkeling",
    date: "November 18, 2025",
    location: "Queensland, Australia",
    description:
      "Dive into the world’s largest coral reef system with crystal-clear waters and vibrant marine life.",
    image:
      "https://images.pexels.com/photos/13577528/pexels-photo-13577528.jpeg?auto=compress&cs=tinysrgb&w=600",
    cta: "Join Now",
  },
  {
    id: 5,
    title: "Safari Adventure",
    date: "September 12, 2025",
    location: "Serengeti, Tanzania",
    description:
      "Embark on a thrilling safari to witness the majestic wildlife of Africa in their natural habitat.",
    image:
      "https://images.pexels.com/photos/16064257/pexels-photo-16064257/free-photo-of-african-elephant-and-zebras.jpeg?auto=compress&cs=tinysrgb&w=600",
    cta: "Plan Your Safari",
  },
  {
    id: 6,
    title: "Paris Culinary Tour",
    date: "October 8, 2025",
    location: "Paris, France",
    description:
      "Indulge in the flavors of French cuisine with a guided tour of Parisian food markets and restaurants.",
    image:
      "https://images.pexels.com/photos/8433681/pexels-photo-8433681.jpeg?auto=compress&cs=tinysrgb&w=600",
    cta: "Discover More",
  },
  {
    id: 7,
    title: "Hot Air Balloon Ride",
    date: "March 10, 2025",
    location: "Cappadocia, Turkey",
    description:
      "Experience a magical sunrise over Cappadocia’s unique landscapes from a hot air balloon.",
    image:
      "https://images.pexels.com/photos/3027217/pexels-photo-3027217.jpeg?auto=compress&cs=tinysrgb&w=600",
    cta: "Fly Now",
  },
];

const EventSec = () => {
  const eventCardRefs = useRef([]);
  useEventAnimation(eventCardRefs.current);
  return (
    <section id="events" className="event">
      <div className="container">
        <h2 className="section-title">events</h2>

        <div className="event-container">
          {events.map((event, i) => (
            <div
              key={event.id}
              className="event-card"
              ref={(el) => (eventCardRefs.current[i] = el)}
            >
              <div className="event-left">
                <img src={event.image} alt="" />
              </div>
              <div className="event-right">
                <h2 className="event-title">{event.title}</h2>
                <p className="event-date">Date: {event.date}</p>
                <p className="event-location">Location: {event.location}</p>
                <p className="event-desc">Description: {event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventSec;
