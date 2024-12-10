/* eslint-disable react/prop-types */
const TestimonialItem = ({ testimonial }) => {
  const { name, location, comment } = testimonial;
  return (
    <div className="testimonial-item">
      <blockquote className="testimonial-text">{comment}</blockquote>
      <h3 className="testimonial-name"> &quot; {name} &quot; </h3>
      <p className="testimonial-location">{location}</p>
    </div>
  );
};

export default TestimonialItem;
