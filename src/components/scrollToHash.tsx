import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash?.slice(1);

    const headerOffset = window.innerHeight * 0.06; //6vh

    if (hash) {
      let attempts = 0;
      const maxAttempts = 5;

      const scrollToElement = () => {
        const el = document.getElementById(hash);
        if (el) {
          const y =
            el.getBoundingClientRect().top + window.scrollY - headerOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        } else if (attempts < maxAttempts) {
          attempts++;
          setTimeout(scrollToElement, 100);
        }
      };

      scrollToElement();
    } else {
      // scroll to top if no hash
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return null;
};

export default ScrollToHash;
