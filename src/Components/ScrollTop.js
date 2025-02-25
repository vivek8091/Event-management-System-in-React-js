import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const wrapper = document.getElementById("main-container"); // Check if there's a wrapper div

    if (wrapper) {
      wrapper.scrollTo(0, 0); // Instantly move wrapper to top
    } else {
      window.scrollTo(0, 0); // Instantly move page to top
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
