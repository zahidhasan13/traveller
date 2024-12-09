import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useSmoothScrolling } from "../hooks/useSmoothScrolling";
import { useRef } from "react";
import { useCustomCursor } from "../hooks/gsapAnimation";

const Main = () => {
  const cursorRef = useRef(null);
  useSmoothScrolling();
  useCustomCursor(cursorRef);
  return (
    <>
      <div className="cursor" ref={cursorRef}></div>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
