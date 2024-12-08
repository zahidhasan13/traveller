import { useRef } from "react";
import { Link } from "react-router-dom";
import { useNavBarAnimation } from "../hooks/gsapAnimation";

const Header = () => {
  const li1 = useRef(null);
  const li2 = useRef(null);
  const li3 = useRef(null);
  const li4 = useRef(null);
  const li5 = useRef(null);
  const li6 = useRef(null);
  const logoRef = useRef(null);

  const leftLink = [li1, li2, li3];
  const rightLink = [li4, li5, li6];
  const logoArr = [logoRef];

  useNavBarAnimation(leftLink, 1);
  useNavBarAnimation(logoArr, 2);
  useNavBarAnimation(rightLink, 2.5);
  return (
    <header className="header">
      <nav className="nav container">
        <ul className="left-links">
          <li ref={li1}>
            <Link to="/featured">feature</Link>
          </li>
          <li ref={li2}>
            <Link to="/events">events</Link>
          </li>
          <li ref={li3}>
            <Link to="/popular-destination">popular destination</Link>
          </li>
        </ul>
        <div className="logo" ref={logoRef}>
          <Link to="/">
            <h2>traveller</h2>
          </Link>
        </div>
        <ul className="right-links">
          <li ref={li4}>
            <Link to="/testimonial">testimonial</Link>
          </li>
          <li ref={li5}>
            <Link to="/blog">blog</Link>
          </li>
          <li ref={li6}>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
