/* eslint-disable react/prop-types */
const EventItem = ({ event }) => {
  const { title, date, location, description, image, cta } = event;
  return (
    <div className="event-card">
      <img src={image} alt="" className="event-img" />
      <h2 className="event-title">{title}</h2>
      <p className="event-date">Date: {date}</p>
      <p className="event-location">Location: {location}</p>
      <p className="event-description">{description}</p>
      <button className="event-btn">{cta}</button>
    </div>
  );
};

export default EventItem;
