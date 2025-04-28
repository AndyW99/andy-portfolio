import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Handle manual scroll to top button
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <div
          onClick={scrollToTop}
          className="scroll_up my_totop"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <span className="beny_tm_totop"></span>
        </div>
      )}
    </>
  );
}
