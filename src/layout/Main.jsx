import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useSmoothScrolling } from "../hooks/useSmoothScrolling";

const Main = () => {
  useSmoothScrolling();
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
