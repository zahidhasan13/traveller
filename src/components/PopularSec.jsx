import PopularItem from "./PopularItem";

const popular = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/586687/pexels-photo-586687.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Explore the Hidden Gems of Venice",
    category: "Romantic Destinations",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/2178175/pexels-photo-2178175.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Discover the Sacred Waters",
    category: "Island Retreats",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Above the Clouds Adventure",
    category: "Hiking & Exploration",
  },
];

const PopularSec = () => {
  return (
    <section className="popular">
      <div className="container">
        <h2 className="section-title">popular destination</h2>
      </div>
      <div className="popular-container">
        {popular.map((item) => (
          <PopularItem key={item.id} popular={item} />
        ))}
      </div>
    </section>
  );
};

export default PopularSec;
