import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation(); // Gets the current route path

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to top when pathname changes
  }, [pathname]); // Runs every time pathname changes

  return null; // This component does not render anything
};

export default ScrollToTop;
