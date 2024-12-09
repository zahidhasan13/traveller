import { useRef } from "react";
import {
  usePopularCategory,
  usePopularImage,
  usePopularTitle,
} from "../hooks/gsapAnimation";

/* eslint-disable react/prop-types */
const PopularItem = ({ popular }) => {
  const { img, title, category } = popular;

  const popularImgRef = useRef(null);
  const popularTitleRef = useRef(null);
  const popularCategoryRef = useRef(null);

  usePopularImage(popularImgRef);
  usePopularTitle(popularTitleRef, popularImgRef);
  usePopularCategory(popularCategoryRef, popularImgRef);

  return (
    <div className="popular-item">
      <h1 className="popular-title" ref={popularTitleRef}>
        {title}
      </h1>
      <p className="popular-category" ref={popularCategoryRef}>
        {category}
      </p>
      <div
        className="popular-img"
        ref={popularImgRef}
        style={{ backgroundImage: `url(${img})` }}
      ></div>
    </div>
  );
};

export default PopularItem;
