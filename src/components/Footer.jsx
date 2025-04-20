import { useRef } from "react";
import {
  FaBehance,
  FaDribbble,
  FaFacebook,
  FaLinkedin,
  FaPinterest,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
// import { useFooterAnimation } from "../hooks/gsapAnimation";

const Footer = () => {
  const footerRef = useRef(null);
  const footerLogoRef = useRef(null);
  const footerSubtitleRef = useRef(null);
  const footerSocialRef = useRef(null);
  const footerRightRef = useRef(null);

  // const footerContentRef = [
  //   footerLogoRef,
  //   footerSubtitleRef,
  //   footerSocialRef,
  //   footerRightRef,
  // ];
  // useFooterAnimation(footerContentRef, footerRef);
  return (
    <footer className="footer" ref={footerRef}>
      <div className="container">
        <Link to="/">
          <h2 className="footer-logo" ref={footerLogoRef}>
            Traveller
          </h2>
        </Link>
        <p className="footer-subtitle" ref={footerSubtitleRef}>
          Play Your Perfect Journey
        </p>
        <div className="footer-social" ref={footerSocialRef}>
          <Link to="">
            <FaFacebook />
          </Link>
          <Link to="">
            <FaXTwitter />
          </Link>
          <Link to="">
            <FaLinkedin />
          </Link>
          <Link to="">
            <FaYoutube />
          </Link>
          <Link to="">
            <FaBehance />
          </Link>
          <Link to="">
            <FaPinterest />
          </Link>
          <Link to="">
            <FaDribbble />
          </Link>
        </div>
        <p className="footer-right" ref={footerRightRef}>
          &copy; {new Date().getFullYear()} All reserved by{" "}
          <Link to="/">Traveller</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
